let input = document.querySelector('.text');
let submit= document.querySelector('.add_task');
let taskList = document.querySelector('.tasks');
let clearButton= document.querySelector('.clear');
let searchInput = document.querySelector('.search-task');
let select = document.querySelector('.select');
let filterButtons = document.querySelectorAll('.filter-btn');
let ArrayOfTasks = [];//empty array to store tasks
//check if there are tasks in local storage
if (localStorage.getItem("tasks")){
ArrayOfTasks=JSON.parse(localStorage.getItem("tasks"));
}

//get tasks from local storage when window load
getTasksFromLocalStorage();

//add the task
submit.onclick = function() {
    if(input.value !=="") 
        {
            addTaskToArray(input.value);// add task to array of task
            input.value="";// clear input field
        }
    }
//click on task element
taskList.addEventListener("click",(e)=>{
    //delete button
    if(e.target.classList.contains("delete")){
        //remove task from page
        e.target.parentElement.remove();
        //remove task from local storage
        deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
    }
    //edit button
    if(e.target.classList.contains("Edit")){
        const taskDiv = e.target.parentElement;
        const taskText = taskDiv.firstChild;
        const taskId = taskDiv.getAttribute("data-id");
        
        // Create input element
        const input = document.createElement("input");
        input.type = "text";
        input.value = taskText.textContent;
        input.className = "task-edit-input";
        
        // Replace text with input
        taskDiv.replaceChild(input, taskText);
        input.focus();
        
        // Handle saving on enter with arrow function
        const saveEdit = () => {
            const newTitle = input.value.trim();
            if (newTitle !== "") {
                const newText = document.createTextNode(newTitle);
                taskDiv.replaceChild(newText, input);
                editTaskInLocalStorage(taskId, newTitle);
            } else {
                taskDiv.replaceChild(taskText, input);
            }
        };
        
        input.addEventListener("blur", saveEdit);
        input.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {
                saveEdit();
            }
            if (e.key === "Escape") {
                taskDiv.replaceChild(taskText, input);
            }
        });
    }
    // update the status in local storage
    if (e.target.classList.contains("check")) {
    
    chekstatusInLocalStorage(e.target.dataset.id, e.target.checked);
     ArrayOfTasks.sort((a, b) => a.completed - b.completed);
        saveTasksToLocalStorage(ArrayOfTasks);
        addTasksToPage(ArrayOfTasks);
    }
});

 select.addEventListener("change",()=>{
    if(select.value === "All Tasks"){
        addTasksToPage(ArrayOfTasks);
    }
    if(select.value === "Active"){
       let activeTask=ArrayOfTasks.filter(task => task.completed === false);
        addTasksToPage(activeTask);
    }
    if(select.value === "Completed"){
        let completedTask = ArrayOfTasks.filter(task => task.completed === true);
        addTasksToPage(completedTask);
    }
 });
//clear all tasks
clearButton.addEventListener("click",()=>{
    clearAllTasks();
});
//search tasks
searchInput.addEventListener("input",()=>{
    searchTasks(searchInput.value);
});
//change the completed status

//function to add task to array of tasks
function addTaskToArray(taskText){
//task data
 const task={
    id:Date.now(),
    title:(taskText),
    completed: false,
 };
//push task to array
ArrayOfTasks.push(task);
ArrayOfTasks.sort((a, b) => a.completed - b.completed);
updateCounts();
//add tasks to page
addTasksToPage(ArrayOfTasks);
//save tasks to local storage
saveTasksToLocalStorage(ArrayOfTasks);
}

//add tasks to page function
function addTasksToPage(ArrayOfTasks){
    //empty the task list
    taskList.innerHTML="";
    //looping on array of tasks
    ArrayOfTasks.forEach((task)=>{
        //create the main task div
        let div = document.createElement("div");
        div.className="task";
        //check if task is completed
        if(task.completed){
            div.className="task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.title));
       //creat delete button
        let deleteButton = document.createElement("button"); 
            deleteButton.className="delete";
            deleteButton.appendChild(document.createTextNode("Delete"));
        //append button to main div
        div.appendChild(deleteButton);
        //append task div to task list
        taskList.appendChild(div); 
        //creat edit button
        let editButton = document.createElement("button"); 
            editButton.className="Edit";
            editButton.appendChild(document.createTextNode("Edit"));
        
        div.appendChild(editButton);
        taskList.appendChild(div);
        let chekstatus = document.createElement("input");
            chekstatus.dataset.id = task.id;
            chekstatus.className="check";
            chekstatus.type="checkbox";
        div.appendChild(chekstatus);
        taskList.appendChild(div);
        let label = document.createElement("label");
            label.textContent = "done";   // the text
            label.appendChild(chekstatus);// checkbox inside label
            chekstatus.checked = task.completed; // ✅ this line makes the checkbox match the real data
 
        div.appendChild(label);
     });
}
// Add click listener to each button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1️⃣ Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // 2️⃣ Add 'active' to the clicked button
    button.classList.add('active');

    // 3️⃣ Get the filter type from the button text
    const filter = button.textContent.trim();

    // 4️⃣ Filter tasks and show them
    if (filter === 'All') {
      addTasksToPage(ArrayOfTasks);
    } else if (filter === 'Active') {
      addTasksToPage(ArrayOfTasks.filter(task => !task.completed));
    } else if (filter === 'Completed') {
      addTasksToPage(ArrayOfTasks.filter(task => task.completed));
    }

    // 5️⃣ Update task counts
    updateCounts();
  });
});

function saveTasksToLocalStorage(ArrayOfTasks){
    window.localStorage.setItem("tasks",JSON.stringify(ArrayOfTasks));
}
//get tasks from local storage
function getTasksFromLocalStorage(){
    let data = window.localStorage.getItem("tasks");
    if(data){
        let tasks = JSON.parse(data);
        addTasksToPage(tasks); 
    }
    updateCounts();
}
//delete task from local storage
function deleteTaskFromLocalStorage(taskId){
    ArrayOfTasks = ArrayOfTasks.filter((task)=>task.id != taskId);
    updateCounts();
    saveTasksToLocalStorage(ArrayOfTasks);
}
//edit task in local storage
function editTaskInLocalStorage(taskId,newTitle){
   for(let i=0;i<ArrayOfTasks.length;i++){
    if(ArrayOfTasks[i].id == taskId){
        ArrayOfTasks[i].title = newTitle;
        break;
    }  
}
saveTasksToLocalStorage(ArrayOfTasks);
}
//clear all tasks
function clearAllTasks(){
    ArrayOfTasks = [];
    saveTasksToLocalStorage(ArrayOfTasks);
    taskList.innerHTML = "";
    updateCounts();
}
//search tasks
function searchTasks(query) 
{
    let task =taskList.querySelectorAll('.task');
    for(let i=0;i<task.length;i++){
        if(task[i].textContent.includes(query)){
            task[i].style.display='block';
        }
        else{
            task[i].style.display='none';
        }     
}
}
//Edit completed status in local storage
function chekstatusInLocalStorage(id,completed)
{    for(let i =0 ; i < ArrayOfTasks.length ; i++){
        if(ArrayOfTasks[i].id == id)
            {
            ArrayOfTasks[i].completed = completed;
            break;
            }
    }
    updateCounts();
    saveTasksToLocalStorage(ArrayOfTasks);
}
function updateCounts() {
  const total = ArrayOfTasks.length;
  const completed = ArrayOfTasks.filter(t => t.completed).length;
  const pending = total - completed;
  const itemsLeftDiv = document.querySelector(".items-left");
  
  if (itemsLeftDiv) {
    itemsLeftDiv.textContent = `Total: ${total} | Completed: ${completed} | Pending: ${pending}`;
  }
}
//done mark when checkbox is checked
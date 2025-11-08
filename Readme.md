# **To-Do List Assignment Guide**

---

## **Objective**

In this assignment, you will build an interactive To-Do List application using **HTML**, **CSS**, and **JavaScript**. The focus is on using JavaScript functions effectively to implement core features. You will also expand the functionality by adding a **search bar**, **filters**, and a **clear all tasks** button. The app must be responsive to different screen sizes.

---

## **Requirements**

Your To-Do List application must include:

1. **Core Features**

   - Add a new task.
   - Edit an existing task.
   - Delete a task.
   - Mark tasks as completed or undo completion.
   - Save and retrieve tasks from `localStorage` to persist data across page reloads.

2. **Search and Filters**

   - A search bar to filter tasks based on the text input.
   - A filter to display tasks based on their status:
     - **All**: Show all tasks.
     - **Completed**: Show only completed tasks.
     - **Pending**: Show only uncompleted tasks.

3. **Clear All Tasks**

   - A button to delete all tasks from the list and `localStorage`.

4. **Responsive Design**
   - Ensure the app works well on both desktop and mobile devices.

---

## **Steps to Complete the Assignment**

### **Step 1: Plan Your Layout**

Before you start coding, sketch the layout of your application. Include:

- A heading for the app title.
- A form to add new tasks (input field and add button).
- A search bar at the top to filter tasks by name.
- Filter buttons or a dropdown to filter tasks by status (All, Completed, Pending).
- A list to display tasks.
- Buttons to edit, delete, or toggle task completion.
- A "Clear All Tasks" button.

---

### **Step 2: Build the HTML Structure**

- Create a basic HTML file with placeholders for each element.
- Ensure you have:
  - An input field and button for adding tasks.
  - A search bar for filtering.
  - Buttons or a dropdown for status filters.
  - A list element (`ul` or `div`) to display the tasks.
  - A "Clear All Tasks" button.

---

### **Step 3: Style with CSS**

- Add styling to make the application visually appealing:
  - Use flexbox or grid for layout.
  - Ensure the app looks clean and intuitive on desktop and mobile.
- For responsiveness:
  - Use media queries to adjust styles for smaller screens.
  - Ensure buttons, text, and input fields resize or stack properly.

---

### **Step 4: Add Core Functionality Using JavaScript**

- Use JavaScript to:
  - Add tasks to the list and display them dynamically.
  - Edit tasks when a user clicks an "Edit" button.
  - Delete individual tasks with a "Delete" button.
  - Toggle task completion (strike-through for completed tasks).
  - Save tasks to `localStorage` and load them on page refresh.

---

### **Step 5: Implement Search and Filters**

1. **Search Functionality**

   - Add an input field for the search bar.
   - Write a function to filter tasks based on the text entered in the search bar.
   - Update the task display dynamically as the user types.

2. **Status Filters**
   - Add buttons or a dropdown for "All", "Completed", and "Pending".
   - Write functions to:
     - Show all tasks when "All" is selected.
     - Show only completed tasks when "Completed" is selected.
     - Show only uncompleted tasks when "Pending" is selected.
   - Combine this functionality with the search to apply both filters simultaneously.

---

### **Step 6: Add a "Clear All Tasks" Feature**

- Add a button labeled "Clear All Tasks".
- Write a function to:
  - Remove all tasks from the DOM.
  - Clear the `localStorage`.
  - Ensure the UI reflects the empty list after clearing.

---

### **Step 7: Make the App Responsive**

- Use media queries to:
  - Resize elements for smaller screens.
  - Stack elements vertically for better usability on mobile.
- Test the app on various screen sizes to ensure responsiveness.

---

### **Step 8: Use GitHub for Version Control**

1. **Push Your Project to GitHub**

   - Initialize a Git repository in your project folder.
   - Add and commit your files.
   - Push the project to a new repository on GitHub.

2. **Use Main GitHub Features**
   - Practice creating branches, making changes, and merging them.
   - Use `git pull` and `git push` to synchronize your local repository with GitHub.
   - Document your commits with clear messages.

---

## **Deliverables**

1. **HTML, CSS, and JavaScript Files**
   - Ensure your code is clean, well-commented, and organized into functions.
2. **Functional To-Do List**
   - The app must include all required features: adding, editing, deleting tasks, search, filters, and clearing all tasks.
3. **Responsive Design**
   - The app must work on both desktop and mobile devices.
4. **GitHub Repository**
   - A properly managed repository with meaningful commits, branches, and merge history.

---

## **Tips and Best Practices**

- **Use Functions Wisely:** Break your JavaScript code into reusable functions for each feature.
- **DOM Manipulation:** Practice selecting and updating elements dynamically.
- **localStorage:** Save the entire list in `localStorage` as a JSON string and retrieve it when the app loads.
- **Testing:** Test each feature thoroughly to ensure it works as expected.
- **Accessibility:** Ensure the app is accessible (e.g., use labels for input fields and buttons).
- **Version Control:** Regularly commit your changes and push them to GitHub.

---

## **Bonus Challenges**

1. Add a **dark mode** toggle for your app.
2. Show the total number of tasks, completed tasks, and pending tasks.
3. Animate task additions, deletions, or completions for a polished look.


// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load previously saved tasks
let tasks = JSON.parse(localStorage.getItem("academicTasks")) || [];

// Function to save tasks
function saveTasks() {
    localStorage.setItem("academicTasks", JSON.stringify(tasks));
}

// Function to display tasks
function displayTasks() {

    // Clear the current task list
    taskList.innerHTML = "";

    // Loop through the tasks array
    tasks.forEach(function(task) {

        // Create a list item
        const listItem = document.createElement("li");

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        // Create task text
        const taskName = document.createElement("span");
        taskName.textContent = task.text;

        // Show completed styling
        if (task.completed) {
            taskName.classList.add("completed");
        }

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        // Handle task completion
        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            saveTasks();
            displayTasks();

        });

        // Handle task deletion
        deleteBtn.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            saveTasks();
            displayTasks();

        });

        // Add elements to list item
        listItem.appendChild(checkbox);
        listItem.appendChild(taskName);
        listItem.appendChild(deleteBtn);

        // Display the list item
        taskList.appendChild(listItem);

    });

}

// Function to add a task
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter an academic task.");
        return;
    }

    // Create a new task object
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Add task to the array
    tasks.push(newTask);

    // Save updated tasks
    saveTasks();

    // Display updated tasks
    displayTasks();

    // Clear input
    taskInput.value = "";

    taskInput.focus();

}

// Listen for button clicks
addTaskBtn.addEventListener("click", addTask);

// Display saved tasks when the page loads
displayTasks();

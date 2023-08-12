// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${taskText} <span onclick="removeTask(this)">[x]</span>`;
    taskList.appendChild(li);
    taskInput.value = '';
}

// Function to remove a task from the list
function removeTask(taskElement) {
    taskElement.parentElement.remove();
}

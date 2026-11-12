const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");
let tasks = [];
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        taskInput.focus();
        return;
    }
    const task = {
        title: taskText,
        completed: false
    };
    tasks.push(task);
    taskInput.value = "";
    displayTasks();
    taskInput.focus();
});
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            displayTasks();
        });
        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = task.title;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            displayTasks();
        });
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
    const remainingTasks = tasks.filter(function (task) {
        return !task.completed;
    }).length;
    taskCount.textContent =
        remainingTasks + (remainingTasks === 1 ? " task left" : " tasks left");
    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";
}
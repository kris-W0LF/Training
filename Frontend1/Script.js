let Tasks = [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


addButton.addEventListener("click", () => {

    const data = taskInput.value;

    if (data === "") {
        return;
    }

    Tasks.push({
        title: data,
        completed: false
    });

    displayTask();

    taskInput.value = "";
});


function displayTask() {

    taskList.innerHTML = "";

    Tasks.forEach((data, index) => {

        taskList.innerHTML += `
            <li>
                <input type="checkbox">
                ${data.title}
                <button onclick="deleteTask(${index})">Delete</button>
            </li>
        `;

    });
}

function deleteTask(index) {

    Tasks.splice(index, 1);

    displayTask();
}
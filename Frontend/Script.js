let task = [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


addButton.addEventListener("click", () => {
    const data = taskInput.value;
    
    task.push({
        title: data,
        completed: false
    }); 
   
    displayTask();
    taskInput.value = "";
});
function displayTask() {
    taskList.innerHTML = "";


    task.forEach((data,index) => {
        const list = document.createElement("li");
        list.textContent = data.title;

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.addEventListener("click",()=>{
            task.splice(index,1);
            displayTask();

        })
        list.appendChild(deleteButton);
        taskList.appendChild(list);

    
    });
};


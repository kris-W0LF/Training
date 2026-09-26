let Tasks=[];

const taskInput= document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click",()=>{
    const data=taskInput.value;

    if (data === "") {
        return;
    }

    Tasks.push({
        title:data,
        completed:false
        });

        displayTask();
        taskInput.value="";

});

function displayTask(){
 taskList.innerHTML="";

    Tasks.forEach((data,index)=>{
        const list=document.createElement("li");
        list.textContent=data.title;

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.addEventListener("click",()=>{
            Tasks.splice(index,1);
            displayTask();


        })
        list.appendChild(deleteButton);
        taskList.appendChild(list);
    });

};


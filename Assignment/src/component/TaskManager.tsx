
import { useState } from "react";
import  "./TaskManager.css";
interface Task {
    title: string;
    completed: boolean;
}

function TaskManager() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskInput, setTaskInput] = useState("");

   
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const taskText = taskInput.trim();

        if (taskText === "") {
            return;
        }

        const newTask: Task = {
            title: taskText,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTaskInput("");
    }

   
    function toggleTask(index: number) {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }

            return task;
        });

        setTasks(updatedTasks);
    }

 
    function deleteTask(index: number) {
        const updatedTasks = tasks.filter(
            (_, i) => i !== index
        );

        setTasks(updatedTasks);
    }

    
    const remainingTasks = tasks.filter(
        (task) => !task.completed
    ).length;

    return (
        <main className="container">

            <header>
                <p className="tagline">STAY ORGANIZED</p>

                <h1>Student Task Manager</h1>

                <p className="subtitle">
                    Keep track of what you need to get done.
                </p>
            </header>

          

            <form id="taskForm" onSubmit={handleSubmit}>

                <input
                    type="text"
                    id="taskInput"
                    placeholder="Add a new task..."
                    autoComplete="off"
                    value={taskInput}
                    onChange={(event) =>
                        setTaskInput(event.target.value)
                    }
                />

                <button type="submit">
                    Add Task
                </button>

            </form>

          

            <section className="tasks-section">

                <div className="section-heading">

                    <h2>Your Tasks</h2>

                    <span id="taskCount">
                        {remainingTasks}
                        {remainingTasks === 1
                            ? " task left"
                            : " tasks left"}
                    </span>

                </div>

                <ul id="taskList">

                    {tasks.map((task, index) => (

                        <li
                            key={index}
                            className={task.completed ? "completed" : ""}
                        >

                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(index)}
                            />

                            <span className="task-text">
                                {task.title}
                            </span>

                            <button
                                className="delete-btn"
                                onClick={() => deleteTask(index)}
                                type="button"
                            >
                                Delete
                            </button>

                        </li>

                    ))}

                </ul>

               

                {tasks.length === 0 && (
                    <p id="emptyMessage">
                        No tasks yet. Add one to get started!
                    </p>
                )}

            </section>

        </main>
    );
}

export default TaskManager;

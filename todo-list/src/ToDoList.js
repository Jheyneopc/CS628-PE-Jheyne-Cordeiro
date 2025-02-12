import React, { useState } from "react";
import "./App.css";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]);
            setInput("");
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <h2>ToDo List App</h2>
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder="Enter task description" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoItem key={index} task={task} onDelete={() => deleteTask(index)} />
                ))}
            </ul>
        </div>
    );
};

const ToDoItem = ({ task, onDelete }) => {
    return (
        <li className="todo-item">
            {task}
            <button className="delete-button" onClick={onDelete}>Delete</button>
        </li>
    );
};

export default ToDoList;

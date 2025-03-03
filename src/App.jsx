
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "First task", done: false },
        { id: 2, text: "Second task", done: true }
    ]);
    const [newTask, setNewTask] = useState("");

    function toggleTask(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { id: task.id, text: task.text, done: !task.done };
            }
            return task;
        }));
    }

    function addTask() {
        if (newTask) {
            setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
            setNewTask("");
        }
    }

    return (
        <div>
            <h1>List tasks</h1>
            <ul>
                {tasks.sort((a, b) => a.done - b.done).map(task => (
                    <li
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        style={{ textDecoration: task.done ? "line-through" : "none", cursor: "pointer" }}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
            <input value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
import React from "react";
import TaskList from "./features/task/taskList";
import TaskInput from "./features/task/TaskInput";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TaskInput />
                <TaskList />
            </header>
        </div>
    );
}

export default App;

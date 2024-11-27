import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask])
  };

  const onToggleTask = (id) => {
    setTasks((prevTask) => 
      prevTask.map((task) =>
        task.id === id ? {...task, complete: !task.complete} : task
        )
      )
  };

  const onDeleteTask = (id) => {  
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={onAddTask}/>
      <TaskList tasks={tasks} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;

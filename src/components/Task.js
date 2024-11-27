import React from "react";

/**
 * TODO: implement the Task component
 * 
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({task, onToggleTask, onDeleteTask}) {
    return(
        <div>
        <input 
            type="checkbox" 
            onChange={() => onToggleTask(task.id)} // Calls the function with the item's ID
          />
            <span style={{textDecoration: task.complete ? "line-through" : "none"}}>
            {task.description}
            </span>
          <button onClick={() => onDeleteTask(task.id)}> ❌</button>
          
        </div>
      )
}

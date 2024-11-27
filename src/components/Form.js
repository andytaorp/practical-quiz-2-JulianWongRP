import React, { useState } from "react";
export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description: description.trim(),
      complete: false,
    };
    onAddTask(newTask);
    setDescription("");
  };
  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>
      <label>Description: </label>
      <input
        type="text"
        id="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
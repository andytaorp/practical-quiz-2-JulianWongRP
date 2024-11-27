import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      description: description, // Make sure this matches what you're displaying
      complete: false
    };
    
    onAddTask(newTask);
    setDescription("");
    
  };

  function handleText(e){
    setDescription(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={description} id="desc" onChange={handleText} required placeholder="New Task"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

import React, { useState } from "react";
//THIS IS CONNECTED TO THE APP.js
function NewTask(props) {
  const [input, setInput] = useState("");

  const handleInput = (value) => setInput(value);
  const handleAdd = () => props.addTask(input);

  return (
    <div>
      <input type="text" onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default NewTask;

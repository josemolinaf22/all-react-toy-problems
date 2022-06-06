import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const displayTasks = tasks.map((element, index) => {
    return <Todo task={element} key={index} />;
  });

  return (
    <div className="App">
      <h1>My Todo list:</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setTasks([...tasks, input])}>Add</button>
      {displayTasks}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import NewTask from "./Components/NewTask";
import List from "./Components/List";

import "./App.css";

function App() {
  const [tasks, setTask] = useState([]);

  const addTaskHandler = (task) => {
    setTask([...tasks, task]);
  };

  return (
    <div className="App">
      <h1>My To-do list:</h1>
      <NewTask addTask={addTaskHandler} />
      <List tasks={tasks} />
      <br />
    </div>
  );
}

export default App;

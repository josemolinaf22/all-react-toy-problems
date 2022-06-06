import React, { useState } from "react";

import "./App.css";

function App() {
  const [Array, setArray] = useState([
    "white",
    "red",
    "black",
    "green",
    "blue",
    "orange",
  ]);
  const [filter, setFilter] = useState("");

  let list = Array.filter((element, index) => {
    return element.includes(filter);
  }).map((element, index) => {
    return <h2 key={index}>{element}</h2>;
  });

  return (
    <div className="App">
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
      {list}
    </div>
  );
}

export default App;

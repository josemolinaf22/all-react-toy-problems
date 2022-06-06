import React, { useState } from "react";
import "./App.css";

function App() {
  const [Array, setArray] = useState([
    "Ice Cream",
    "Gummy Worms",
    "Sour Patch",
  ]);

  let list = Array.map((element, index) => {
    return <h2 key={index}>{element}</h2>;
  });

  return (
    <div className="App">
      <h3>{list}</h3>
    </div>
  );
}

export default App;

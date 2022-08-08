import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["mango", "apple", "watermelon"]);

  const arrayList = list.map((element, index) => {
    return <h2 key={index}> {element} </h2>;
  });

  return (
    <div className="App">
      <h1>Jose list of fruits</h1>
      {arrayList}
    </div>
  );
}

export default App;

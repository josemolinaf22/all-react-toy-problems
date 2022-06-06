import React, { useState } from "react";

function Textbox() {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="App">
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <p>{userInput}</p>
    </div>
  );
}

export default Textbox;

import React from "react";
//  THIS COMPONENT IS CONNECTED TO THE List.js

function Todo(props) {
  return (
    <div>
      <h4>{props.task}</h4>
    </div>
  );
}

export default Todo;

import React from "react";

function Todo(props) {
  //This is connected to APP.JS
  return (
    <div>
      <h2>{props.task}</h2>
    </div>
  );
}

export default Todo;

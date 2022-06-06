import React from "react";

function Image(props) {
  return (
    <div>
      {" "}
      <h1>"It Is Fine Now. Why? Because I Am Here!"</h1>
      <img src={props.img} alt="" />
    </div>
  );
}

export default Image;

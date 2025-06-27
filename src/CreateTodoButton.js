import React from "react";
import "./createtodobutton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("Click");
        console.log(event.target);
        
      }}
    >
      Add
    </button>
  );
}

export { CreateTodoButton };

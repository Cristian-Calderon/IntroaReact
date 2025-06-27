import React from "react";
import "./todoList.css";

function TodoList({children}) {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
}

export { TodoList };

import "./App.css";

import React from "react";
// React.Fragment
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const listdeTodos = [
  { text: "Comprar una coca cola", completado: true },
  { text: "Comprar una pepsi", completado: false },
  { text: "Comprar un helado", completado: false },
];

function App() {
  return (
    <div className="App-main-container">
      <TodoCounter completed={16} total={20} />
      <div className="TodoList-main-container">
        <div className="TodoList-container">
          <TodoSearch />
          <CreateTodoButton />
        </div>
        <TodoList>
          {/* Vamos a crear un nuevo array */}
          {listdeTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completado}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export default App;

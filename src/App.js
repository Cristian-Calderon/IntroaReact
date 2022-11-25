// import './App.css';

import React from "react";
// React.Fragment
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

// crear una lista falsa
const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso Intro a React", completed: false },
  { text: "Llorar con la Lloronas", completed: false },
];

// funcion que comienza con una letra mayuscula es un componente.
function App() {
  return (
    // React nos indica que puede recibir solo 1 elemento de html para renderizarlo.
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          // Cuando hacemos render de una lista en este caso todo's-items, tenemos que enviarle una propiedad especial que se llama "key" a nuestros componentes para que React pueda identificar cual componente es cual dentro de una lista.  
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

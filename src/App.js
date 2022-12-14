// import './App.css';

import React from "react";
// React.Fragment
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

// DefaultTodos estado inicial
const DefaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso Intro a React", completed: false },
  { text: "Llorar con la Lloronas", completed: false },
  { text: "Completar RankApp", completed: false}
];

// funcion que comienza con una letra mayuscula es un componente.
function App() {
  const [todos, setTodos] = React.useState(DefaultTodos)

  // todoSearch
  const [searchValue, setSearchValue] = React.useState('');


  // Para contar los todos que tenemos completados y cuantos tenemos en total.
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length;

  // El array vacio sirve para ver el filtrado.
  let searchedTodos = []
  
  // searchValue es el input 
  if(!searchValue.length >= 1){
    // searchValue no es nada, entonces QUE NOS MUESTRE TODOS LOS "to-dos"
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }


  //   RETURN 
  return (
    // React nos indica que puede recibir solo 1 elemento de html para renderizarlo.
    <React.Fragment>
      <TodoCounter 
      total = {totalTodos}
      completed = {completedTodos}
      />

      <TodoSearch 
      // si enviamos sin valor React nos entendera que es true y eso es lo que no queremos.
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
          // Cuando hacemos render de una lista en este caso todo's-items, tenemos que enviarle una propiedad especial que se llama "key" a nuestros componentes para que React pueda identificar cual componente es cual dentro de una lista.  
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

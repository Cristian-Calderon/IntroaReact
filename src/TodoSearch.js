import React from "react";
import './todosearch.css'


function TodoSearch (){
    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
    }

    return(
        <input className="TodoSearch"
        onChange = {onSearchValueChange}
        placeholder = "Cebolla" />

    );
}


export {TodoSearch}
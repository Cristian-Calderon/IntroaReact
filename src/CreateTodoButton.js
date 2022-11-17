import React from "react";
import './createtodobutton.css'


function CreateTodoButton (){
    const onClickButton =  (prop) => {
        alert(prop)
    }

    return(
        <button 
        className="CreateTodoButton"
        // Estamos llamando a la funcion de arriba
        onClick={() => onClickButton('Aqui deberia abrirse un modal')}
        >
        +
        </button>
    )
}

export {CreateTodoButton}
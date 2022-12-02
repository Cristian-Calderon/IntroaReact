import React from "react";
import './createtodobutton.css'


function CreateTodoButton (){
    // funcion alert
    const onClickButton =  (mensaje) => {
        alert(mensaje)
    }

    return(
        <button 
        className="CreateTodoButton"
        // En onClick tenemos que enviarle una funcion.
        onClick={() => onClickButton('Aqui deberia abrirse un modal')}
        >
        +
        </button>
    )
}

export {CreateTodoButton}
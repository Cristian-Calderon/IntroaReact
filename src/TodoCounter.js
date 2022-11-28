import React from "react";
// import './index.css';
import './todocounter.css'


function TodoCounter ({total, completed}){
    return(
        <h2 className="TodoCounter">Has completado {completed} de {total} Todo's</h2>
    )
}


// Lo que fatla es exportar esta funcion.
export {TodoCounter}
import "./todocounter.css";

function TodoCounter({ total, completed }) {
  return (
    <div className="TodoCounter-main-container">
      <div className="TodoCounter-container">
        <h1 className="TodoCounter">
          Has completado {completed} de {total} Todo's
        </h1>
      </div>
    </div>
  );
}

export { TodoCounter };

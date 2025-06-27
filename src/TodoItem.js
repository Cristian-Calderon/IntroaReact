import "./todoitem.css";
import checkIcon from "./assets/comprobar.png";
import cancelIcon from "./assets/cancelar.png";

function TodoItem(props) {
  return (
    <div className="TodoItem-main-container">
      <li className="TodoItem-container">
        <img
          src={checkIcon}
          alt="check"
          className={`TodoItem-check ${
            props.completed && "icon-check--active"
          }`}
        />
        <p className={`${props.completed && "todoitem-p--complete"}`}>{props.text}</p>
        <img
          src={cancelIcon}
          alt="cancel"
          className="TodoItem-cancel icon-delete"
        />
      </li>
    </div>
  );
}

export { TodoItem };

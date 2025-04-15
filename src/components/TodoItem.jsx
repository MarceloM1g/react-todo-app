import React from "react";
import '../index.css';

function TodoItem({ todo, toggle, remove }) {
    return (
        <li className="todo-item">
            <button className="toggle-btn" onClick={toggle}>✔</button>
            <span className={todo.done ? 'done' : ''}>{todo.text}</span>
            <button className="remove-btn" onClick={remove}>Remover</button>
        </li>
    );
}

export default TodoItem;
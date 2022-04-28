import React from "react";
import './TodoItem.css'
function TodoItem(props) {

    const onDelete = function() {
        alert('Borraste el todo' + props.text)
    }
    
    return (
        <li className="TodoItem">
            <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✔</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span onClick={onDelete} className="Icon Icon-delete">X</span>
        </li>
    )
}

export {TodoItem}

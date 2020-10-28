import React from "react"

export default function Todo(props){
    
    return(
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={props.completed} />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button className="btn" type="button">
                    Edit <span className="visually-hidden">{props.name}</span>
                </button>

                <button className="btn btn__danger">
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
}
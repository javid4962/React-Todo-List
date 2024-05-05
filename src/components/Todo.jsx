import React, { useState } from "react";

function Todo({ todo, index, delTodo }) {
  const [checkStatus, setCheckStatus] = useState(false);

  // const check = document.getElementById('todo-check').cheked
  return (
    <div className="todo-container" style={checkStatus ? {backgroundColor:'rgb(136, 136, 136)'}:{backgroundColor:'white'}}>
      <div className="output-header">
        {checkStatus ? <del>{todo}</del> : <span>{todo}</span>}
      </div>
      <input
        type="checkbox"
        id="todo-check"
        key={index}
        value={checkStatus}
        onChange={(e) => {
          checkStatus ? setCheckStatus(false) : setCheckStatus(true);
        }}
      />
      <button className="todo-delete" onClick={() => delTodo(index)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;

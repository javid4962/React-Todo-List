import React from "react";
import './style/Todo.css'
function InputContainer({inputVal, writeTodo, addTodo}) {
  return (
    <div className="input-container">
      <h1 className="todo-header">Todo-List</h1>
      <input type="text" placeholder="Enter your task" className="todo-input" value={inputVal} onChange={writeTodo}/>
      <button className="todo-add" onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;

import React from "react";
import './style/Todo.css'
import Todo from "./Todo";
function TodoContainer({todos,index, delTodo }) {
  return (
    <div className="todoContainer">
        {todos.map((todo, index) =>{
            return(
                <Todo todo={todo} index={index} delTodo={delTodo} key={index} />
            )
        })}
    </div>
  );
}

export default TodoContainer;

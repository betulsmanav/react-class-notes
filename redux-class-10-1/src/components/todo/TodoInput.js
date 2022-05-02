import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/TodoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    dispatch(addTodo(text))
    // !input un icini bosaltmak icin=> setText()
    setText('')
    
    
  };
  
  return (
        <form onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add Todo"
        value={text}
        onChange={(e)=>setText(e.target.value)}
          />
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
  );
};

export default TodoInput;

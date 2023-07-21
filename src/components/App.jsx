import React, { useState } from "react";
import TodoList from "./ToDoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todolists, setList] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setTodo(value);
  }

  function handleClick() {
    setList((previous) => {
      return [...previous, todo];
    });
    setTodo("");
  }

  function handleDelete(id) {
    setList((previous) => {
      return previous.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={todo} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todolists.map((newTodo, index) => (
            <TodoList
              key={index}
              id={index}
              value={newTodo}
              deleteItem={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
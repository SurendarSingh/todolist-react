import React from "react";

function TodoList(props) {
  return <li onClick={() => props.deleteItem(props.id)}>{props.value}</li>;
}

export default TodoList;

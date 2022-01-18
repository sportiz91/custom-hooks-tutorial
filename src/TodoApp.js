import React, { useState } from "react";
import useTodos from "./hooks/useTodos";

const initialTodos = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node.js" },
  { id: 3, title: "Learn web3.js" },
];

const TodoApp = () => {
  const [todos, addTodo, deleteTodo] = useTodos(initialTodos);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1 className="mb-3">Welcome to my ToDo List!</h1>
      <div className="new-todo">
        <input type="text" onChange={handleChange} value={input} />
        <button
          onClick={() => {
            addTodo({ title: input });
            setInput("");
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;

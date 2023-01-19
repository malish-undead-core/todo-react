import React, { useState, useEffect } from 'react'
import Header from './componets/header';
import Form from './componets/form';
import TodosList from './componets/todosList';
import Button from './componets/button/button';
import './App.css';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div id="darkBg" className="container">
      <div id="darkBs" className="app-wrapper">
        <div>
          <Button />
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

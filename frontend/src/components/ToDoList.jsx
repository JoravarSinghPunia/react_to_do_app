import { useState, useEffect } from "react";
import ToDo from "./ToDo";
import axios from "axios";

const ToDoList = () => {
  const API_URL = "http://localhost:4000/todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(API_URL);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todoCompleted: !todo.todoCompleted } : todo
      )
    );
    axios.patch(`${API_URL}/${id}`, {
      todoCompleted: !todos.find((todo) => todo.id === id).todoCompleted,
    });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    axios.delete(`${API_URL}/${id}`);
  };

  const updateTodoName = (id, newName) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todoDescription: newName } : todo
      )
    );
    axios.patch(`${API_URL}/${id}`, { todoDescription: newName });
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    axios.post(API_URL, newTodo);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">To-Do List</h2>
      {todos.map((item) => (
        <ToDo
          key={item.id}
          id={item.id}
          name={item.todoDescription}
          date={item.todoDateCreated}
          completed={item.todoCompleted}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          updateTodoName={updateTodoName}
        />
      ))}
    </div>
  );
};

export default ToDoList;

import { useState } from "react";
import sampleData from "../sampleData.json";
import ToDo from "./ToDo";
import AddForm from "./AddForm";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todoCompleted: !todo.todoCompleted } : todo
      )
    );
  }

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  const updateTodoName = (id, newName) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todoDescription: newName } : todo
      )
    );
  }

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
      <AddForm setTodos={setTodos} />
    </div>
  );
};

export default ToDoList;





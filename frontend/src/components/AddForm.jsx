import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddForm = (props) => {
  const [name, setName] = useState("");
  const API_URL = "http://localhost:4000/todos";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with name:", name);
    setName("");
    addTodo({
      todoDescription: name,
      todoCompleted: false,
      todoDateCreated: new Date().toISOString(),
    });
  };

  const addTodo = (newTodo) => {
    axios
      .post(API_URL, newTodo)
      .then((response) => {
        if (response.status === 201) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add To-Do</h2>

      <div className="container mt-4 border p-4 rounded">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="todoName" className="form-label">
              What do you want to do?
            </label>
            <input
              type="text"
              className="form-control"
              id="todoName"
              placeholder="Enter to-do description"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add To-Do
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;

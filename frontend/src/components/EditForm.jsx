import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = (props) => {
  const [editedName, setEditedName] = useState("");
  const [oldName, setOldName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const API_URL = "http://localhost:4000/todos";

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(API_URL + `/${id}`);
        setOldName(response.data.todoDescription);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${API_URL}/${id}`, { todoDescription: editedName });
      navigate("/");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit To-Do Item</h2>
      <div className="container mt-4 border p-4 rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="todoName" className="form-label">
              To-Do Name
            </label>
            <h3>{oldName}</h3>
            <input
              type="text"
              className="form-control"
              id="todoName"
              value={props.editedName}
              onChange={(e) => setEditedName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

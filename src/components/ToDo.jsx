import {useState} from "react";

const ToDo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(props.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.updateTodoName(props.id, editedName);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3 pb-2" key={props.id}>
      <div className="card-body">
        {isEditing ? (
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <button className="btn btn-primary ms-2" onClick={handleSave}>Save</button>
          </div>
        ) : <h5 className={`card-title ${props.completed ? "text-decoration-line-through" : ""}`}>{props.name}</h5>}
        <p className="card-text">
          <strong>Date Created:</strong>{" "}
          {new Date(props.date).toLocaleTimeString()}, {new Date(props.date).toLocaleDateString()}
        </p>
        <p className="card-text">
          <strong>Status:</strong>{" "}
          <span
            className={`badge ${props.completed ? "bg-success" : "bg-secondary"}`}>
            {props.completed ? "Completed" : "Not Completed"}
          </span>
        </p>
      </div>

      {/* Full-width footer row for action buttons */}
      <div className="card-footer bg-transparent border-0">
        <div className="d-flex justify-content-end gap-2 w-100">
          <button className="btn btn-success" onClick={() => props.toggleComplete(props.id)}>{props.completed ? "Undo" : "Complete"}</button>
          <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={() => props.handleDelete(props.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;

const ToDo = (props) => {
  return (
    <div className="card mb-3 pb-2" key={props.id}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
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
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;

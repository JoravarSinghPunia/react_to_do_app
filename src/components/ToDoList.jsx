import sampleData from "../sampleData.json";

const ToDoList = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">To-Do List</h2>
      {sampleData.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.todoDescription}</h5>
            <p className="card-text">
              <strong>Date Created:</strong>{" "}
              {new Date(item.todoDateCreated).toLocaleDateString()}
            </p>
            <p className="card-text">
              <strong>Status:</strong>{" "}
              <span
                className={`badge ${
                  item.todoCompleted ? "bg-success" : "bg-secondary"
                }`}
              >
                {item.todoCompleted ? "Completed" : "Not Completed"}
              </span>
            </p>
          </div>
          <div className="d-flex justify-content-end align-items-center mt-3">
            <button className="btn btn-success m-3 float-end">Edit</button>
            <button className="btn btn-danger m-3 float-end">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;

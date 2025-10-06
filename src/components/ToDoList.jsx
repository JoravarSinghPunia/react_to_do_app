import sampleData from "../sampleData.json";
import ToDo from "./ToDo";

const ToDoList = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">To-Do List</h2>
      {sampleData.map((item) => (
        <ToDo key={item.id} id={item.id} name={item.todoDescription} date={item.todoDateCreated} completed={item.todoCompleted} />
      ))}
    </div>
  );
};

export default ToDoList;





import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <ToDoList />
      <button className="btn btn-primary m-3 d-block mx-auto">Add To-Do</button>
      <Footer />
    </div>
  );
}

export default App;




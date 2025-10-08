import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/add-form" element={<AddForm />} />
        <Route path="/edit-form/:id" element={<EditForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

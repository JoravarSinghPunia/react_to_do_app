import { NavLink } from "react-router-dom";
import skyLogo from "../assets/skyLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between p-3 bg-light border-bottom">
      <div>
        <NavLink to="/">
          <img
            src={skyLogo}
            alt="Sky Logo"
            className="sky-logo"
            style={{ height: "50px" }}
          />
        </NavLink>
      </div>
      <div className="flex-grow-1 text-center"></div>
      <NavLink to="/add-form" className="btn btn-primary me-3">
        Add To-Do
      </NavLink>
      <a href="/" className="text-decoration-none cursor-pointer">
        <h1 className="mb-0 text-primary">Todo App</h1>
      </a>
    </div>
  );
};

export default Header;

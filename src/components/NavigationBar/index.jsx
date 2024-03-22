import { NavLink } from "react-router-dom";
import './navbar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          DanS Portfolio App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item nav-link-hover mx-2">
              <NavLink to="/" style ={ {textDecoration: 'none'} } className="nav-link-hover">Home</NavLink>
            </li>
            <li className="nav-item nav-link-hover mx-2">
              <NavLink to="/restaurants" style ={ {textDecoration: 'none'} } className="nav-link-hover">Projects</NavLink>
            </li>
            <li className="nav-item nav-link-hover mx-2">
              <NavLink to="/" style ={ {textDecoration: 'none'} } className="nav-link-hover">Contact</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search" id="formBox">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;

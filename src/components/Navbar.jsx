import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a
            className="nav-link active "
            aria-current="page"
            href="#About"
            style={{ color: "black" }}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Projects" style={{ color: "black" }}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact" style={{ color: "black" }}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;

import logo from "../assets/Mylogo.jpg";
import '../index.css';

const NavBar = () => {
  return (
    <>
      <div className="d-flex">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            width="50"
            height="50"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default NavBar;

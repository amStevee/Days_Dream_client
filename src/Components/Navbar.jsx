import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import NavbarComponent from "../styles/Navbar.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const windowSize = window.innerWidth;
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <NavbarComponent>
      <div className="logo">
        <Link to={"/"}>
          <h3>Days-Dream</h3>
        </Link>
      </div>

      {windowSize <= 667 ? (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setDropDown(!dropDown)}
          className="hambugar-menu"
        />
      ) : (
        ""
      )}

      <ul className={dropDown ? "drop" : ""}>
        <li>
          <Link to="/?category=art">
            <h4>Art</h4>
          </Link>
        </li>
        <li>
          <Link to="/?category=science">
            <h4>Science</h4>
          </Link>
        </li>
        <li>
          <Link to="/?category=technology">
            <h4>Technology</h4>
          </Link>
        </li>
        <li>
          <Link to="/?category=cinema">
            <h4>Cinema</h4>
          </Link>
        </li>
        <li>
          <Link to="/?category=design">
            <h4>Design</h4>
          </Link>
        </li>
        <li>
          <Link to="/?category=food">
            <h4>Food</h4>
          </Link>
        </li>

        <span>{currentUser?.username}</span>
        {currentUser ? (
          <Link to={"/"} onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
          </>
        )}
        <li>
          <span className="writeCategory">
            <Link to="/write">Write</Link>
          </span>
        </li>
      </ul>
    </NavbarComponent>
  );
};

export default Navbar;

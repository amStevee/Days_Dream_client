import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
          <NavLink activeClassName="currentLink" to="/?category=art" activeC>
            <h4>Art</h4>
          </NavLink>
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

        <Link to={"/account"}>
          <span>{currentUser?.username}</span>
        </Link>
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
            <Link to={currentUser?.username ? "/posts/write" : "/login"}>
              Write
            </Link>
          </span>
        </li>
      </ul>
    </NavbarComponent>
  );
};

export default Navbar;

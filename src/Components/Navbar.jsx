import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import NavbarComponent from "../styles/Navbar.styled";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const location = useLocation().search || null;
  const params = new URLSearchParams(location);
  const q = params.get("category");
  const { currentUser, logout, Admin } = useContext(AuthContext);
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
          icon={dropDown ? faX : faBars}
          onClick={() => setDropDown(!dropDown)}
          className="hambugar-menu"
        />
      ) : (
        ""
      )}

      <ul className={dropDown ? "drop" : ""}>
        <li>
          <NavLink
            ClassName={q === "art" ? "currentLink" : ""}
            to="/?category=art"
            activeC
          >
            <h4>Art</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            ClassName={q === "science" ? "currentLink" : ""}
            to="/?category=science"
          >
            <h4>Science</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            ClassName={q === "business" ? "currentLink" : ""}
            to="/?category=business"
          >
            <h4>Business</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            ClassName={q === "cinema" ? "currentLink" : ""}
            to="/?category=cinema"
          >
            <h4>Cinema</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            ClassName={q === "sport" ? "currentLink" : ""}
            to="/?category=sport"
          >
            <h4>Sport</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            ClassName={q === "food" ? "currentLink" : ""}
            to="/?category=food"
          >
            <h4>Food</h4>
          </NavLink>
        </li>

        <Link to={"/account"} className="user">
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
        {currentUser.isadmin && <li>
          <span className="writeCategory">
            <Link to={currentUser?.username ? "/posts/write" : "/login"}>
              Write
            </Link>
          </span>
        </li>}
      </ul>
    </NavbarComponent>
  );
};

export default Navbar;

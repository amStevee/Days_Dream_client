import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import AuthComponent from "../styles/Auth.styled";

const Login = () => {
  const navigate = useNavigate();
  const { login, err } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataf = new FormData(e.target);
      const fdata = await Object.fromEntries(dataf.entries());

      await login(fdata);
      if (err) navigate("/login");
      if (!err) navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthComponent>
      <h1>Login</h1>
      <form action="POST" onSubmit={handleSubmit} className="login">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Login</button>
        {err && <p className="error">{err}</p>}
        <span>
          Dont have an Account? <Link to="/register">Register</Link>
        </span>
      </form>
    </AuthComponent>
  );
};

export default Login;

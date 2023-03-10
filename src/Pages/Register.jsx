import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthComponent from "../styles/Auth.styled";

// BUGS///////////////////////////////////////////
// user image not showing for some reason(s)
// BUGS END /////////////////////////////////////

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [input, setInput] = useState({});
  const url = "https://day-dream-server.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataf = new FormData(e.target);
      const fdata = Object.fromEntries(dataf.entries());
      setInput(fdata);
      const { data } = await axios.post(`${url}/api/v1/auth/register`, {
        input,
      });

      if (data) navigate("/login");
    } catch (err) {
      setErr(err.Message);
      console.log(err);
    }
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      erroMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      erroMessage: "It should be a vaid emai address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      erroMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      erroMessage: "Password dont match!",
      label: "Confirm Password",
      pattern: input.passwords,
      required: true,
    },
  ];

  return (
    <AuthComponent>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((inp) => (
          <>
            <input
              type={inp.type}
              id={inp.label}
              name={inp.name}
              placeholder={inp.placeholder}
              required={inp.required}
              pattern={inp.pattern}
            />
            <span className="error" key={inp.id}>
              {inp.erroMessage}
            </span>
          </>
        ))}
        <button type="submit">Register</button>
        {err && <span>{err}</span>}
        <p>
          already have an Account?{" "}
          <Link to="/login">
            <u>Login</u>.
          </Link>
        </p>
      </form>
    </AuthComponent>
  );
};

export default Register;

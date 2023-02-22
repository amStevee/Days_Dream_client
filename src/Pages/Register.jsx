import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthComponent from "../styles/Auth.styled";

// BUGS///////////////////////////////////////////
// user image not showing for some reason(s)
// BUGS END /////////////////////////////////////

const Register = () => {
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  const [image, setImage] = useState(null);
  const handlefocused = () => {
    setFocused(true);
  };
  const [err, setErr] = useState(null);
  const [input, setInput] = useState({});
  const url = "https://day-dream-server.onrender.com";

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      const { data } = await axios.post(`${url}/api/v1/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const image = await handleUpload();
    try {
      const dataf = new FormData(e.target);
      const fdata = Object.fromEntries(dataf.entries());
      setInput(fdata);
      const { data } = await axios.post(`${url}/api/v1/auth/register`, {
        input,
        image,
      });
      console.log(data);
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
        <input
          type="file"
          style={{ display: "none" }}
          name="file"
          id="file"
          accept=".jpg, .png"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="file" className="reg">
          Upload profile
        </label>
        {inputs.map((inp) => (
          <>
            <input
              type={inp.type}
              id={inp.label}
              name={inp.name}
              placeholder={inp.placeholder}
              required={inp.required}
              pattern={inp.pattern}
              onBlur={handlefocused}
              onFocus={() => inp.name === "confirmPassword" && setFocused(true)}
              focused={focused.toString()}
            />
            <span className="error" key={inp.id}>
              {inp.erroMessage}
            </span>
          </>
        ))}
        <button type="submit">Register</button>
        {err && <span>{err}</span>}
        <span>
          already have an Account? <Link to="/login">Login</Link>
        </span>
      </form>
    </AuthComponent>
  );
};

export default Register;

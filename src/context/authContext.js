import axios from "axios";
import { createContext, useEffect, useState } from "react";

// const INIL_STATE = {
//   user: JSON.parse(localStorage.getItem("user") || null),
//   loading: true,
//   err: null
// }

export const AuthContext = createContext();

// const AuthReduser = (state, action) => {
//   switch (action.type) {
//     case "LOGING_IN":
//       return {
//         user: action.payload,
//         loading: false,
//         err: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         loading: false,
//         err: null,
//       };

//     case "LOGIN_FAIL":
//       return {
//         user: action.payload,
//         loading: false,
//         err: null,
//       };

//     default:
//       return state;
//   }
// }

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [err, setErr] = useState(null);
  const Admin = ["Apah4life", "Lorem"];


  const login = async (inputs) => {
    try {
      const { data } = await axios({
        url: `https://day-dream-server.onrender.com/api/v1/auth/login`,
        data: inputs,
        method: "POST",
        withCredentials: true,
      });
      setCurrentUser(data);
      if (data === null || data.msg) setErr(data);
    } catch (error) {
      setErr(error.response.data.msg);
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.post(
        `https://day-dream-server.onrender.com/api/v1/auth/logout`
      );
      if (data) setCurrentUser(null);
    } catch (err) {
      setErr(err.response.data.msg);
      console.log(err.response);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, err, Admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

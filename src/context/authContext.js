import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [err, setErr] = useState(null);

  const login = async (inputs) => {
    try {
      const { data } = await axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        url: `https://day-dream-server.onrender.com/api/v1/auth/login`,
        data: inputs,
        method: "POST",
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
    <AuthContext.Provider value={{ currentUser, err, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

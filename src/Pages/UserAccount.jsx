import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import User from "../styles/UserAccount.styled";

export default function UserAccount() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [input, setInput] = useState({});
  const [err, setErr] = useState(null);
  const url = "https://day-dream-server.onrender.com";

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      const { data } = await axios.post(`${url}/api/v1/upload`, formData, {
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const image = await handleUpload();
    try {
      const dataf = new FormData(e.target);
      const fdata = Object.fromEntries(dataf.entries());
      setInput(fdata);
      const { data } = await axios.post(`${url}/api/v1/auth/update`, {
        input,
        image,
      });

      if (data) navigate("/login");
    } catch (err) {
      setErr(err.Message);
      console.log(err);
    }
  };
  return (
    <User>
      <form onSubmit={handleUpdate}>
        <label htmlFor="file" className="file">
          {currentUser.user_image ? (
            <div className="img">
              <img src={currentUser.user_image} alt="user" />
            </div>
          ) : (
            <div className="fauser">
              <FontAwesomeIcon color="gray" fontSize={"2.2rem"} icon={faUser} />
            </div>
          )}
          <span>Tap to change</span>
        </label>
        <input
          type="file"
          style={{ display: "none" }}
          name="file"
          id="file"
          accept=".jpg, .png"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={currentUser.username}
          name="username"
          id="username"
        />

        <label htmlFor="email">Username</label>
        <input type="email" value={currentUser.email} name="email" id="email" />

        <button>UPDATE PROFILE</button>

        {err && <span>{err}</span>}
      </form>
    </User>
  );
}

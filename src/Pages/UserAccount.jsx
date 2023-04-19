import { faCheck, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Wraper from "../Components/reuseables/Wraper";
import { AuthContext } from "../context/authContext";
import User from "../styles/UserAccount.styled";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";

export default function UserAccount() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [input, setInput] = useState({});
  const [err, setErr] = useState(null);
  const userid = currentUser.userid;
  const url = "https://day-dream-server.onrender.com";
  const imageUrl = `https://daysdreamhub.s3.amazonaws.com/`;

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(`${url}/api/v1/user`);
      setUsers(data);
    };
    getUsers();
  }, []);

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
      const { data } = await axios.put(`${url}/api/v1/auth/update`, {
        input,
        image,
        userid,
      });

      if (data) navigate("/login");
    } catch (err) {
      setErr(err.Message);
      console.log(err);
    }
  };

  const searchUser = async () => {
    const searchedTerm = users.filter((user) => user.username === search);
    setUsers(searchedTerm);
  };

  const makeUserAdmin = async (id) => {
    try {
      await axios.post(`${url}/api/v1/user/?user:${userid}`, {
        id,
      });
       window.location.reload(true)
    } catch (error) {
      setErr(error.message);
    }
  };

  const removeAdmin = async (id) => {
    try {
      await axios.put(`${url}/api/v1/user/?user:${userid}`, {
        id,
      });
      window.location.reload(true);
    } catch (error) {
      setErr(error.message);
    }
  }

  return (
    <Wraper>
      <User>
        {currentUser?.isadmin && (
          <div id="isadmin">
            <div className="header">
              <h3>
                <FontAwesomeIcon icon={faBlogger} />
                <span>Bloggers:</span>
              </h3>
              <div className="search">
                <button onClick={searchUser}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search user"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <hr />
            <table>
              <tr>
                <th>Username</th>
                <th>Isadmin</th>
                <th>Make Admin</th>
                <th>Remove Admin</th>
              </tr>

              {users.map((blogger) => (
                <tr className="list">
                  <td>
                    <span>{blogger.username}</span>
                  </td>
                  <td>
                    <span>{blogger.isadmin ? "True" : "False"}</span>
                  </td>
                  <td>
                    <button onClick={() => makeUserAdmin(blogger.userid)}>
                      {blogger.isadmin ? (
                        <FontAwesomeIcon icon={faCheck}> <span>Admin</span></FontAwesomeIcon>
                      ) : (
                        "make admin"
                      )}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeAdmin(blogger.userid)}>Remove admin</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}

        <form onSubmit={handleUpdate}>
          <label htmlFor="file" className="file">
            {currentUser.user_image ? (
              <img src={`${imageUrl}${currentUser.user_image}`} alt="user" />
            ) : (
              <div className="fauser">
                <FontAwesomeIcon color="gray" fontSize={"4rem"} icon={faUser} />
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

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={currentUser.email}
            name="email"
            id="email"
          />

          <button>UPDATE PROFILE</button>

          {err && <span>{err}</span>}
        </form>
      </User>
    </Wraper>
  );
}

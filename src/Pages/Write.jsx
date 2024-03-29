import { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import WriteComponent from "../styles/Write.styled";
import Button from "../styles/Button.styled";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Wraper from "../Components/reuseables/Wraper";

export default function Write() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const [value, setValue] = useState(state?.description || "");
  const [title, setTitle] = useState(state?.title || "");
  const [category, setCategory] = useState(state?.category || "");
  const [image, setImage] = useState(state?.image || null);
  const { currentUser } = useContext(AuthContext);
  const searchParams = new URLSearchParams(location.search);
  const editValue = searchParams.get("edit");
  const userid = currentUser.userid;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await handleUpload();
    try {
      state
        ? await axios.put(`${url}/api/v1/posts/write?edit=${editValue}`, {
            userid,
            title,
            description: value,
            category,
            image: image ? imgUrl : "",
          })
        : await axios.post(`${url}/api/v1/posts/`, {
            userid,
            title,
            description: value,
            category,
            image: image ? imgUrl : "",
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const toolbarOptions = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['link'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['clean']
      ],
      handlers: {}
    }
  }

  return (
    <>
      <Wraper>
        {currentUser.username ? (
          <WriteComponent>
            <div className="content">
              <input
                type="text"
                value={title}
                name="title"
                id="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="editorContainer">
                <ReactQuill
                  className="editor"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  modules={toolbarOptions}
                />
              </div>
            </div>
            <div className="menu">
              <div className="item">
                <h1>Publish</h1>
                <span>
                  <b>Visibility: </b> Public
                </span>

                <input
                  type="file"
                  style={{ display: "none" }}
                  name="file"
                  id="file"
                  accept=".jpg, .png"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <label htmlFor="file" className="file">
                  Upload Image
                </label>
                <div className="buttons">
                  <Button
                    color={"#c1b49f"}
                    background={"#fff"}
                    padding={"3px 5px"}
                    border={"1px solid #c1b49f"}
                  >
                    Save as draft
                  </Button>

                  <button
                    onClick={handleSubmit}
                    style={{
                      color: "#c1b49f",
                      background: "#fff",
                      padding: "3px 5px",
                      border: "1px solid #c1b49f",
                    }}
                  >
                    Publish
                  </button>
                </div>
              </div>
              {/* use DRY concept: find a way round this */}
              <div className="item">
                <h1>Category</h1>
                <div className="category">
                  <input
                    type="radio"
                    name="category"
                    id="art"
                    value={"art"}
                    checked={category === "art"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="art">Art</label>
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="category"
                    id="science"
                    value={"science"}
                    checked={category === "science"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="science">Science</label>
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="category"
                    id="business"
                    value={"business"}
                    checked={category === "business"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="business">Business</label>
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="category"
                    id="cinema"
                    value={"cinema"}
                    checked={category === "cinema"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="cinema">Cinema</label>
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="category"
                    id="sport"
                    value={"sport"}
                    checked={category === "sport"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="sport">Sport</label>
                </div>
                <div className="category">
                  <input
                    type="radio"
                    name="category"
                    id="food"
                    value={"food"}
                    checked={category === "food"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <label htmlFor="food">Food</label>
                </div>
              </div>
            </div>
          </WriteComponent>
        ) : (
          navigate("/login")
        )}
      </Wraper>
    </>
  );
}

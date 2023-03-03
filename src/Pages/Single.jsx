import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SinglePage from "../styles/SinglePage.styled";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Aside from "../Components/Aside";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import Loading from "../Components/reuseables/Loading";

const Single = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const userid = currentUser.userid;
  const url = "https://day-dream-server.onrender.com";

  useEffect(() => {
    if (!currentUser) navigate("/login");
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`${url}/api/v1/posts/${location}`);
        setPost(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [location, currentUser, navigate]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: `${url}/api/v1/posts/${location}`,
        data: userid,
        method: "DELETE",
        withCredentials: true,
      });
      setPost(data);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          {post.username ? (
            <SinglePage>
              <div className="content">
                <img
                  src={`https://day-dream-server.onrender.com/${post.image}`}
                  alt="content"
                />
                <div className="user">
                  {post.user_image && (
                    <img
                      src={`https://day-dream-server.onrender.com/${post?.user_image}`}
                      alt="user"
                    />
                  )}
                  <div className="info">
                    <span>{post.username}</span>
                    <p>posted {moment(post.created_at).fromNow()}</p>
                  </div>
                  {currentUser.username === post.username && (
                    <div className="edit">
                      <Link to={`/edit=${post.id}`} state={post}>
                        <FontAwesomeIcon
                          color="green"
                          fontSize={"1.5rem"}
                          icon={faEdit}
                        />
                      </Link>
                      <i onClick={handleDelete}>
                        <FontAwesomeIcon
                          color="red"
                          fontSize={"1.5rem"}
                          icon={faTrash}
                        />
                      </i>
                    </div>
                  )}
                </div>
                <h1>{post.title}</h1>
                <ReactQuill
                  value={post.description}
                  readOnly={true}
                  theme={"bubble"}
                />
              </div>
              <Aside category={post.category} />
            </SinglePage>
          ) : (
            navigate("/login")
          )}
        </>
      )}
      <Footer />
    </>
  );
};

export default Single;

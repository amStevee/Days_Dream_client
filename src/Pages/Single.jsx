import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SinglePage from "../styles/SinglePage.styled";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
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
import Wraper from "../Components/reuseables/Wraper";
import Verify from "../Components/reuseables/Verify";

const Single = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activedel, setActivedel] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userid = currentUser?.userid;
  const url = "https://day-dream-server.onrender.com";
  const imageUrl = `https://daysdreamhub.s3.amazonaws.com/`;

  useEffect(() => {
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
  }, [location]);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`${url}/api/v1/posts/${location}?uid=${userid}`);
      setPost([]);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Wraper>
        {loading ? (
          <Loading />
        ) : (
          <>
            <SinglePage>
              <article className="content">
                <img src={`${imageUrl}${post.image}`} alt="content" />
                <div className="user">
                  {!post.user_image ? (
                    <div className="fauser">
                      <FontAwesomeIcon
                        color="gray"
                        fontSize={"2rem"}
                        icon={faUser}
                      />
                    </div>
                  ) : (
                    <img src={`${imageUrl}${post?.user_image}`} alt="user" />
                  )}
                  <div className="info">
                    <span>{post.username}</span>
                    <p>posted {moment(post.created_at).fromNow()}</p>
                  </div>
                  {currentUser?.username === post.username && (
                    <div className="edit">
                      <Link to={`/posts/write?edit=${post.id}`} state={post}>
                        <FontAwesomeIcon
                          color="green"
                          cursor={"pointer"}
                          fontSize={"1.5rem"}
                          icon={faEdit}
                        />
                      </Link>
                      <i onClick={() => setActivedel(true)}>
                        <FontAwesomeIcon
                          color="red"
                          cursor={"pointer"}
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
              </article>
              <Verify
                handleDelete={handleDelete}
                desc={"article"}
                activedel={activedel}
                setActivedel={setActivedel}
              />
              <Aside category={post.category} title={post.title} />
            </SinglePage>
          </>
        )}
      </Wraper>
    </>
  );
};

export default Single;

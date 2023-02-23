import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomePage from "../styles/Home.styled";
import { Link, useLocation } from "react-router-dom";
import Button from "../styles/Button.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import Loading from "../Components/reuseables/Loading";

const Home = () => {
  const location = useLocation().search;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://day-dream-server.onrender.com";

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`${url}/api/v1/posts/${location}`);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [location]);

  return (
    <>
      <Navbar />
      <HomePage>
        {loading ? (
          <Loading />
        ) : (
          <div className="posts">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <div className="image">
                  <img src={`${url}/${post.image}`} alt={post.title} />
                </div>

                <div className="content">
                  <Link to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <div className="desc">
                    <ReactQuill
                      value={post.description}
                      readOnly={true}
                      theme={"bubble"}
                    />
                  </div>
                  <Link to={`/post/${post.id}`}>
                    <Button
                      border={"1px solid #c1b49f"}
                      background={"transparent"}
                      margintop={".5rem"}
                      padding={".9rem"}
                      color={"#c1b49f"}
                      className="readmore"
                    >
                      Read More...
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </HomePage>
      <Footer />
    </>
  );
};

export default Home;

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
  const location = useLocation().search || null;
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  let perPage = 10;
  const [loading, setLoading] = useState(true);
  const url = "https://day-dream-server.onrender.com";
  const imageUrl = `https://daysdreamhub.s3.amazonaws.com/api/v1/images/`;

  useEffect(() => {
    const getPosts = async () => {
      try {
        if (location) {
          const { data } = await axios.get(
            `${url}/api/v1/posts?category=${location}`
          );
          setPosts(data);
        } else {
          const data = await axios.get(
            `${url}/api/v1/posts?page=${currentPage}&limit=${perPage}`
          );
          setPosts(data.data.rows);
          setTotalPages(data.data.rowCount);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [location, currentPage, perPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Navbar />
      <HomePage>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="posts">
              {posts.map((post) => (
                <div className="post" key={post.id}>
                  <div className="image">
                    <img src={`${imageUrl}/${post.image}`} alt={post.title} />
                  </div>

                  <div className="content">
                    <Link to={`/posts/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link>

                    <ReactQuill
                      className="editor"
                      value={post.description}
                      readOnly={true}
                      theme={"bubble"}
                    />

                    <Link to={`/posts/${post.id}`}>
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
            <div className="pagination">
              <button onClick={handlePrevPage}>Prev</button>
              <span>
                page {currentPage} of {totalPages}
              </span>
              <button onClick={handleNextPage}>Next</button>
            </div>
          </>
        )}
      </HomePage>
      <Footer />
    </>
  );
};

export default Home;

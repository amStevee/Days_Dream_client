import HomePage from "../styles/Home.styled";
import { Link, useLocation } from "react-router-dom";
import Button from "../styles/Button.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import Loading from "../Components/reuseables/Loading";
import Wraper from "../Components/reuseables/Wraper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const location = useLocation().search || null;
  const params = new URLSearchParams(location);
  const q = params.get("category");
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  let perPage = 10;
  const [loading, setLoading] = useState(true);
  const url = "https://day-dream-server.onrender.com";
  const imageUrl = `https://daysdreamhub.s3.amazonaws.com/`;

  useEffect(() => {
    const getPosts = async () => {
      try {
        if (q) {
          const { data } = await axios.get(`${url}/api/v1/posts?category=${q}`);
          setPosts(data);
        } else {
          const data = await axios.get(
            `${url}/api/v1/posts?page=${currentPage}&limit=${perPage}`
          );
          setPosts(data.data.rows);
          setTotalPages(data.data.totalPage);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, [q, currentPage, perPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Wraper>
        <HomePage>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="posts">
                {posts.map((post) => (
                  <div className="post" key={post.id}>
                    <div className="image">
                      <LazyLoadImage
                        alt={post.title}
                        src={`${imageUrl}${post.image}`}
                        height={"200px"}
                        width={"100%"}
                        PlaceholderSrc={"../../public/stockphoto.jpg"}
                      />
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
                <div className="pagination">
                  <button onClick={handlePrevPage}>
                    <FontAwesomeIcon
                      color="gray"
                      fontSize={"1rem"}
                      icon={faChevronLeft}
                    />
                  </button>
                  <span>
                    page {currentPage} of {totalPages}
                  </span>
                  <button onClick={handleNextPage}>
                    <FontAwesomeIcon
                      color="gray"
                      fontSize={"1rem"}
                      icon={faChevronRight}
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </HomePage>
      </Wraper>
    </>
  );
};

export default Home;

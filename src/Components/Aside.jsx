import AsideSection from "../styles/Aside.styled";
import Button from "../styles/Button.styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Aside(props) {
  const [posts, setPosts] = useState([]);
  const url = "https://day-dream-server.onrender.com";
  const imageUrl = `https://daysdreamhub.s3.amazonaws.com/`;

  useEffect(() => {
    const getRelatedPosts = async () => {
      try {
        const { data } = await axios.get(
          `${url}/api/v1/posts/aside?category=${props.category}&title=${props.title}`
        );
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getRelatedPosts();
  }, [props.category, props.title]);

  return (
    <AsideSection>
      <h1>RELATED ARTICLES YOU MAY LIKE:</h1>
      {posts.map((post) => (
        <article className="post" key={post.id}>
          <img
            src={`${imageUrl}${post.image}`}
            alt={post.title}
            loading="lazy"
          />

          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>

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
        </article>
      ))}
    </AsideSection>
  );
}

import AsideSection from "../styles/Aside.styled";
import Button from "../styles/Button.styled";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`${imageUrl}${post.image}`} alt={post.title} />
          <h2>{post.title}</h2>
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
        </div>
      ))}
    </AsideSection>
  );
}

import FooterComponent from "../styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterComponent>
      <div className="header">
        <h4>Days Dream Blog</h4>
        <div className="hcontentent">
          <Link to={"/posts/write"}>
            <button>Write</button>
          </Link>
          <Link to={"/"}>
            <u>About Us</u>
          </Link>
        </div>
      </div>
      <div className="social">
        <p>Socials:</p>
        <div className="icons">
          <a href="https://twitter.com/am_stevenanongo">
            <FontAwesomeIcon fontSize={"4rem"} icon={faTwitterSquare} />
          </a>
          <a href="https://instagram.com/am_stevee">
            <FontAwesomeIcon fontSize={"4rem"} icon={faInstagramSquare} />
          </a>
          <a href="https://twitter.com/amStevee">
            <FontAwesomeIcon fontSize={"4rem"} icon={faGithubSquare} />
          </a>
        </div>
      </div>
      <div className="copyright">&copy; {year} Days Dream Blog</div>
    </FooterComponent>
  );
};

export default Footer;

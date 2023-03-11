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
        <Link to={"/write"}>
          <button>Write for us</button>
        </Link>

        <Link>Home</Link>
        <Link>About Us</Link>
      </div>
      <div className="social">
        <p>Socials:</p>
        <div className="icons">
          <a href="https://twitter.com/am_stevenanongo">
            <FontAwesomeIcon fontSize={"2rem"} icon={faTwitterSquare} />
          </a>
          <a href="https://instagram.com/am_stevee">
            <FontAwesomeIcon fontSize={"2rem"} icon={faInstagramSquare} />
          </a>
          <a href="https://twitter.com/amStevee">
            <FontAwesomeIcon fontSize={"2rem"} icon={faGithubSquare} />
          </a>
        </div>
      </div>
      <div className="copyright">Copyright &copy; {year} Days Dream Blog</div>
    </FooterComponent>
  );
};

export default Footer;

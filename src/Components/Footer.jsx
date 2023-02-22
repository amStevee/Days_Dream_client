import FooterComponent from "../styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faTwitterSquare,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FooterComponent>
      <div className="header">
        <h4>Days Dream Blog</h4>
      </div>
      <div className="social">
        <p>Socials:</p>
        <div className="icons">
          <Link to={"https://twitter.com/am_stevenanongo"}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </Link>
          <Link to={"https://instagram.com/am_stevee"}>
            <FontAwesomeIcon icon={faInstagramSquare} />
          </Link>
          <Link to={"https://github.com/amStevee"}>
            <FontAwesomeIcon icon={faGithubSquare} />
          </Link>
        </div>
        <div className="copyright">Copyright &copy; {year} Days Dream Blog</div>
      </div>
    </FooterComponent>
  );
};

export default Footer;

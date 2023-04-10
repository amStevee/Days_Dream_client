import FooterComponent from "../styles/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Footer dose not look nice at the moment, need to add better styling to make it look appealing

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const { currentUser } = useContext(AuthContext);
  return (
    <FooterComponent>
      <div className="header">
        <h3>Days Dream Blog</h3>
        <div className="hcontentent">
          <Link to={currentUser?.username ? "/posts/write" : "/login"}>
            <button>Write for us</button>
          </Link>
          <Link to={"/about"}>
            <u>About Us</u>
          </Link>
          <Link to={"/about"}>
            <u>Terms of use</u>
          </Link>
        </div>
      </div>

      <div>
        <h4>Developed by:</h4>
        <a href="https://twitter.com/am_stevenanongo" style={{ color: "#fff" }}>
          Steven Anongo
        </a>
      </div>

      <div className="social">
        <h4>Socials:</h4>
        <div className="icons">
          <a href="https://daysdreamhub@gmail.com">
            <FontAwesomeIcon fontSize={"2rem"} icon={faEnvelope} />
          </a>
          <a href="https://twitter.com/am_stevenanongo">
            <FontAwesomeIcon fontSize={"2rem"} icon={faTwitterSquare} />
          </a>
          <a href="https://instagram.com/am_stevee">
            <FontAwesomeIcon fontSize={"2rem"} icon={faInstagramSquare} />
          </a>

          <a href="https://youtube.com/daysdreamhub">
            <FontAwesomeIcon fontSize={"2rem"} icon={faYoutubeSquare} />
          </a>
          <a href="https://telegram.com/daysdreamhub">
            <FontAwesomeIcon fontSize={"2rem"} icon={faTelegram} />
          </a>
        </div>
      </div>

      <div className="copyright">&copy; {year} Days Dream Blog</div>
    </FooterComponent>
  );
};

export default Footer;

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
    //
    <>
      <FooterComponent>
        <h2>Days Dream Blog</h2>
        <div className="header">
          <div className="hcontentent">
            <Link to={currentUser?.username ? "/posts/write" : "/login"}>
              <button>Write for us</button>
            </Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/about"}>Terms of use</Link>
          </div>
        </div>

        <div>
          <h4>Developed by:</h4>
          <a
            href="https://twitter.com/am_stevenanongo"
            style={{ color: "#f2f2f2" }}
          >
            Steven Anongo
          </a>
        </div>

        <div className="social">
          <div className="icons">
            <a href="https://daysdreamhub@gmail.com">
              <FontAwesomeIcon fontSize={"2rem"} icon={faEnvelope} />
              <span>daysdreamhub@gmail.com</span>
            </a>
            <a href="https://twitter.com/am_stevenanongo">
              <FontAwesomeIcon fontSize={"2rem"} icon={faTwitterSquare} />
              <span>Twitter</span>
            </a>
            <a href="https://instagram.com/am_stevee">
              <FontAwesomeIcon fontSize={"2rem"} icon={faInstagramSquare} />
              <span>Instagram</span>
            </a>

            <a href="https://youtube.com/daysdreamhub">
              <FontAwesomeIcon fontSize={"2rem"} icon={faYoutubeSquare} />
              <span>@daysdreamhub</span>
            </a>
            <a href="https://telegram.com/daysdreamhub">
              <FontAwesomeIcon fontSize={"2rem"} icon={faTelegram} />
              <span>@Daysdreamhub</span>
            </a>
          </div>
        </div>
      </FooterComponent>
      <div
        className="copyright"
        style={{ textAlign: "center", display: "block" }}
      >
        &copy; {year} Days Dream Blog
      </div>
    </>
  );
};

export default Footer;

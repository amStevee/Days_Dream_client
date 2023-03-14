import {
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wraper from "../Components/reuseables/Wraper";
import About from "../styles/AboutUs.styled";

const AboutUs = () => {
  return (
    <Wraper>
      <About>
        <h1>ABOUT US</h1>
        <p>
          Days dream blog provides you with the best articles the covers
          different aspect of your day to day life ranging from Business, Sport,
          Science, Art, Movies/celebrity gist e.t.c. <br />
          For Advert placement/Sponsorship contact:
          <br />
          <a href="https://twitter.com/am_stevenanongo">
            <FontAwesomeIcon fontSize={"2rem"} icon={faTwitterSquare} /> Twitter
          </a>
          <a href="https://instagram.com/am_stevee">
            <FontAwesomeIcon fontSize={"2rem"} icon={faInstagramSquare} />{" "}
            Instagram
          </a>
        </p>
      </About>
    </Wraper>
  );
};

export default AboutUs;

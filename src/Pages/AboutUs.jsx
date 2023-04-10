import {
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wraper from "../Components/reuseables/Wraper";
import About from "../styles/AboutUs.styled";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <Wraper>
      <About>
        <h1>ABOUT US</h1>
        <p>
          Welcome to our blog website, where we strive to provide our readers
          with engaging and informative content on a wide range of topics. Our
          blog covers sports, business, art, science, cinema, and food, offering
          readers a diverse array of subjects to explore.
        </p>

        <p>
          At our core, we are passionate about providing our readers with the
          most up-to-date and insightful information possible. We believe that
          knowledge is power, and we are committed to empowering our readers by
          giving them access to high-quality content that educates and
          entertains.
        </p>

        <p>
          In addition to providing articles from our team of experienced
          writers, we also offer our readers the opportunity to contribute to
          our blog. We welcome guest writers who are passionate about these
          subjects, and our platform allows them to upload their own articles
          for consideration.
        </p>

        <p>
          Our goal is to create a community of like-minded individuals who share
          our passion for sports, business, art, science, cinema, and food. We
          believe that everyone has a story to tell, and we are dedicated to
          providing a platform where these stories can be shared and celebrated.
        </p>

        <p>
          Thank you for visiting our blog, and we hope that you find our content
          informative, engaging, and inspiring.
        </p>

        <div>
          <h3>For Advert placement/Sponsorship contact:</h3>
          <div className="adv">
            <a href="https://daysdreamhub@gmail.com">
              <FontAwesomeIcon fontSize={"2rem"} icon={faEnvelope} />
              Email
            </a>
            <a href="https://telegram.com/daysdreamhub">
              <FontAwesomeIcon fontSize={"2rem"} icon={faTelegram} />
              Telegram
            </a>
          </div>
        </div>
      </About>
    </Wraper>
  );
};

export default AboutUs;

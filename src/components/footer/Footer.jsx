import "./footer.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section className="footer">
      <section className="share">
        <span className="tooltip">
          <a href="#" className="fab fa-facebook-f">
            <span className="socialWrapper">
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="tooltiptext">Facebook</span>
            </span>
          </a>
        </span>
        <span className="tooltip">
          <a href="#" className="fab fa-twitter">
            <span className="socialWrapper">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="tooltiptext">Twitter</span>
            </span>
          </a>
        </span>
        <span className="tooltip">
          <a href="#" className="fab fa-instagram">
            <span className="socialWrapper">
              <FontAwesomeIcon icon={faInstagram} />
              <span className="tooltiptext">Instagram</span>
            </span>
          </a>
        </span>
        <span className="tooltip">
          <a href="#" className="fab fa-linkedin">
            <span className="socialWrapper">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="tooltiptext">LinkedIn</span>
            </span>
          </a>
        </span>
        <span className="tooltip">
          <a href="#" className="fab fa-pinterest">
            <span className="socialWrapper">
              <FontAwesomeIcon icon={faPinterestP} />
              <span className="tooltiptext">Pinterest</span>
            </span>
          </a>
        </span>
      </section>
      <section className="links">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">creations</a>
        <a href="#reviews">reviews</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </section>
      <section className="credit">
        created by <span>Mohsin Kaduji</span> | &copy; all rights reserved
      </section>
    </section>
  );
};

export default Footer;

import "./contactus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contactus = () => {
  return (
    <section id="contact" className="contact">
      <h1 className="contacth1">
        <span>contact</span> us
      </h1>
      <section className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <form action="" className="contact-form">
          <h3>get in touch</h3>
          <span className="inputBox">
            <span className="fas fa-user">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input type="text" placeholder="name" />
          </span>
          <span className="inputBox">
            <span className="fas fa-envelope">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input type="email" placeholder="email" />
          </span>
          <span className="inputBox">
            <span className="fas fa-phone">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <input type="number" placeholder="number" />
          </span>
          <input
            type="submit"
            value="contact now"
            id="submit-btn"
            className="btn"
          />
        </form>
      </section>
    </section>
  );
};

export default Contactus;

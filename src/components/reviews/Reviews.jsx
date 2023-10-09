import "./reviews.css";
import { reviews } from "../../assets/Data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
const Reviews = () => {
  return (
    <>
      <section id="reviews" className="reviews">
        <h1 className="heading">
          customers' <span>reviews</span>
        </h1>

        <section className="box-container">
          {reviews.map((item, index) => (
            <section className="box" key={index * Math.random()}>
              <span class="quote">
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>
              <img src={item.img} className="user" alt="" />
              <h3>john doe</h3>
              <span className="stars">
                <i className="fas fa-star">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  <FontAwesomeIcon icon={faStar} />
                </i>
                <i className="fas fa-star-half-alt">
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </i>
              </span>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default Reviews;

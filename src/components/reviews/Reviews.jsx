import "./reviews.css";
import { reviews } from "../../assets/Data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Reviews = () => {
  const [more, setMore] = useState(true);
  return (
    <>
      <section id="reviews" className="reviews">
        <h1 className="heading">
          customers' <span>reviews</span>
        </h1>

        <section className="box-container">
          {reviews.map((item, index) => (
            <section className="box" key={index * Math.random()}>
              <span className="quote">
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              <article className="p">
                {item.summary}
                <details>
                  <summary></summary>
                  <article>{item.feedback}</article>
                </details>
              </article>
              <img src={item.img} className="user" alt="" />
              <h3>{item.name}</h3>
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

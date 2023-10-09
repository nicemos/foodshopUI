import { products } from "../../assets/Data.js";
import "./ownProd.css";
import {
  faCartShopping,
  faEye,
  faHeart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OwnProd = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our unique<span> creations</span>
      </h1>

      <section className="box-container">
        {products.map((item, index) => (
          <section className="box" key={index * Math.random()}>
            <section className="icons">
              <a href="#" className="fas fa-shopping-cart ">
                <FontAwesomeIcon icon={faCartShopping} width={"40px"} />
              </a>
              <a href="#" className="fas fa-heart">
                <FontAwesomeIcon icon={faHeart} width={"40px"} />
              </a>
              <a href="#" className="fas fa-eye">
                <FontAwesomeIcon icon={faEye} width={"40px"} />
              </a>
            </section>
            <span className="image">
              <img src={item.img} alt="" />
            </span>
            <section className="content">
              <h3>fresh coffee</h3>
              <section className="stars">
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
              </section>
              <span className="price">
                £15.99 <span>£20.99</span>
              </span>
              <a href="#" id="menu-btn" className="btn">
                add to cart
              </a>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default OwnProd;

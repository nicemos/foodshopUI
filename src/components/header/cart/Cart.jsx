import { cart } from "../../../assets/Data.js";
import "./cart.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cartRef }) => {
  let total = 0;
  const handleRemoveCartItem = (e, price) => {
    if (e.target.parentNode.parentNode.classList[0] === "cart-item") {
      e.target.parentNode.parentNode.classList.add("remove");
      total -= price;
    }
  };

  return (
    <section
      className="cart-items-container"
      ref={cartRef}
      aria-label="Shopping cart"
    >
      <h2 className="cart-heading">Basket</h2>
      {cart.map((item, index) => (
        <section
          className="cart-item"
          key={index * Math.random()}
          aria-label={`cart item ${index}`}
        >
          <img
            src={item.img}
            alt={`Added item ${index}`}
            className="item-img"
          />
          <div className="content cartcontent" aria-label="Description">
            <h3 className="h3">cart item {index + 1}</h3>
            <div className="price-cart" aria-label="Price">
              £{item.price}
            </div>
            <span className="subtotal">{(total += item.price)}</span>
          </div>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={(e) => handleRemoveCartItem(e, item.price)}
            className="fas fa-times"
            aria-label="Remove from cart"
          />
        </section>
      ))}
      <div className="total">
        Total: <span className="total-price">{/* {total.toFixed(2)} */}</span>
      </div>
      <a href="#" className="btn">
        checkout now
      </a>
      <div height="10"></div>
    </section>
  );
};

export default Cart;

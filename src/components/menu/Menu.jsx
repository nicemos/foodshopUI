import "./menu.css";
import { menu } from "../../assets/Data.js";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our <span>menu</span>
      </h1>

      <section className="box-container">
        {menu.map((item, index) => (
          <span className="box" key={index * Math.random()}>
            <img src={item.img} alt="" />
            <h3>tasty and healty</h3>
            <span className="price">
              £5.99 <span>10.99</span>
            </span>
            <a href="#" id="menu-btn" className="btn">
              add to cart
            </a>
          </span>
        ))}
      </section>
    </section>
  );
};

export default Menu;

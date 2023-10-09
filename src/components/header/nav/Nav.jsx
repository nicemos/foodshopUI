import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Searchbar from "../searchbar/Searchbar";
import Cart from "../cart/Cart";
import { useRef } from "react";

const Nav = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      <nav className="navbar" ref={navbarRef} aria-label="Menu">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#products">Creations</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#reviews">Reviews</a>
        <a href="#blog">Blogs</a>
      </nav>
      <nav aria-label="search, cart and bar menu" className="icons-navbar">
        <ul className="iconsNav">
          <li
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
            aria-label="Search"
            key={1}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#fff" }}
            />
          </li>
          <li
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
            aria-label="Shopping cart"
            key={2}
          >
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fff" }} />
          </li>
          <li
            className="fas fa-bars"
            id="bars-menu-btn"
            onClick={navbarHandler}
            aria-label="Bars Menu"
            key={3}
          >
            <FontAwesomeIcon icon={faBars} />
          </li>
        </ul>
      </nav>
      <Searchbar searchRef={searchRef} />
      <Cart cartRef={cartRef} />
    </>
  );
};

export default Nav;

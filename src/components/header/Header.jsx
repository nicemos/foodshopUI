import "./header.css";
import logo from "../../assets/images/logo.png";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <a href="#" aria-label="Home">
        <img src={logo} alt="Company Logo" className="logoImg" />
      </a>
      <Nav />
    </header>
  );
};

export default Header;

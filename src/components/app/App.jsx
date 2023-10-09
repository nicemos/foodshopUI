import "./app.css";
import About from "../about/About.jsx";
import Header from "../header/Header.jsx";
import Home from "../home/Home.jsx";
import Menu from "../menu/Menu.jsx";
import OwnProd from "../ownProd/OwnProd.jsx";
import Reviews from "../reviews/Reviews.jsx";
import Contactus from "../contactus/Contactus";
import Blog from "../blog/Blog";
import Footer from "../footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Menu />
      <OwnProd />
      <Reviews />
      <About />
      <Contactus />
      <Blog />
      <Footer />
    </>
  );
};

export default App;

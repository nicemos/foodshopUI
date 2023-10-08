import About from "../about/About.jsx";
import Header from "../header/Header.jsx";
import Home from "../home/Home.jsx";
import Menu from "../menu/Menu.jsx";
import OwnProd from "../ownProd/OwnProd.jsx";
import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Menu />
      <OwnProd />
      <About />
    </>
  );
};

export default App;

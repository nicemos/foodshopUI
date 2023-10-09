import "./home.css";

const Home = () => {
  return (
    <main className="home" id="home">
      <section className="home-content">
        <h3 className="home-h3">
          fresh & hot <span className="home-span">food on the </span>Spot
        </h3>
        <p className="home-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          labore, sint cupiditate distinctio tempora reiciendis.
        </p>
        <a href="#menu" className="home-btn">
          get yours now
        </a>
      </section>
      <section className="sticky-note">
        This project is <span className="home-span">Front-end only</span> for
        now. The values are hardcoded, simply for the demonstration purposes.
        Responsive.
      </section>
    </main>
  );
};

export default Home;

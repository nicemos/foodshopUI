import { useState } from "react";
import AboutImg from "../../assets/images/about-img.jpg";
import "./about.css";
const About = () => {
  const [historyToggle, setHistoryToggle] = useState(false);
  return (
    <article id="about" className="about">
      <h1 id="about-heading" className="about-heading">
        <span>about</span> food & us
      </h1>
      <article className="about-food">
        <h4 id="about-h4" className="about-h4">
          Our Food
        </h4>
        <span className="img-wrapper">
          <img src={AboutImg} className="img" alt="delicious food" />
          <span className="sp1">Delicioussss!</span>
          <span className="sp2">Yeassss</span>
          <span className="sp3">Our chefs are talented</span>
        </span>
        <section id="abt-sp-wrapper" className="abt-sp-wrapper">
          <h3>what makes our food special?</h3>
          <p>
            We set a very high standard for our food quality and ensure that our
            guests receive the same quality with every meal. High-quality
            ingredients prepared with every intricacy of temperature and timengs
            paired with experienced chefs and excellent hygiene practices are
            very important to us. Our chefs understand our guests' needs and
            work harmoniously with the kitchen staff to ensure that guests
            receive their great tasting meals the way they ordered it every
            time.
          </p>
          <p>
            Our food attract people from diffrent towns regularly. We serve over
            a million orders successfully every year!
          </p>
          <p>Our food won 'Pretty Food Festival Award' Three times in a row!</p>
          <p>
            Our food hygiene rating is at the highest it can be! The number
            Five(5)!
          </p>
          <a
            href="#us"
            id="btn-about"
            className="btn"
            onClick={() => setHistoryToggle((prev) => !prev)}
          >
            about us
          </a>
        </section>
      </article>
      {historyToggle && (
        <section id="us" className="us">
          <article className="history">
            <h4 id="about-h4" className="about-h4">
              Ourselves
            </h4>
            <h3>Who are We?</h3>
            <p>
              Mike Bellefontaine is the founder and owner of The Greatest
              Restaurant chain, a highly successful, full-service restaurants
              specializing in high quality, Bellefontaine in Manchester, a major
              city in NorthWest of England.
            </p>
            <p>
              One of the most remarkable and noteworthy parts of Mike's story is
              that in addition to being a world class restaurant operator he's
              also a 4 Time World Pizza Champion and 8 Time World Medalist Pizza
              Acrobat, holding more international medals than any other Briton.
            </p>
          </article>
          <article className="history">
            <h3>Why choose us?</h3>
            <p>
              Having worked from scratch and going through years of
              transformation, Mike and his team now know how to bring best
              flavour out of the food. It only means that our customers (you)
              can only have the greatest taste every time.
            </p>
          </article>
        </section>
      )}
    </article>
  );
};

export default About;

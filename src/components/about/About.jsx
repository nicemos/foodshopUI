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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
            ratione a officiis id temporibus autem? Quod nemo facilis
            cupiditate. Ex, vel?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet
            enim quod veritatis, nihil voluptas culpa! Neque consectetur
            obcaecati sapiente?
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              veritatis quam, eius doloremque minima eligendi repudiandae, sequi
              tempora sed fugit earum ipsum autem, excepturi quae dolorem
              officiis doloribus inventore facilis! Dicta, repellendus ipsum
              consequuntur eaque veritatis voluptatem quaerat magni consequatur
              laboriosam aspernatur laudantium sit ab nisi delectus
              exercitationem ex eveniet necessitatibus! Dignissimos illum autem
              voluptas ut maiores iure quos illo. Lorem ipsum dolor, sit amet
            </p>
            <p>
              consectetur adipisicing elit. Ad veritatis quam, eius doloremque
              minima eligendi repudiandae, sequi tempora sed fugit earum ipsum
              autem, excepturi quae dolorem officiis doloribus inventore
              facilis! Dicta, repellendus ipsum consequuntur eaque veritatis
              voluptatem quaerat magni consequatur laboriosam aspernatur
              laudantium sit ab nisi delectus exercitationem ex eveniet
              necessitatibus! Dignissimos illum autem voluptas ut maiores iure
              quos illo.
            </p>
          </article>
          <article className="history">
            <h3>Why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              ipsum, consectetur quasi magnam debitis aliquam iure provident
              quae? Beatae quod laboriosam nesciunt, expedita adipisci sunt.
              Nostrum excepturi ullam quibusdam culpa. Doloribus, placeat?
              Laboriosam, molestiae voluptates. Sunt, rem placeat illum ullam
              pariatur autem, est quos iste aliquid perferendis vitae! Facere
              autem in dolor reprehenderit illo commodi dolores esse dolorem cum
              velit. Quidem necessitatibus qui quisquam, error eius rerum! Optio
              tempora incidunt earum perspiciatis debitis quibusdam atque vero,
              asperiores facere dolore nostrum neque modi voluptas quaerat
              pariatur et veniam reiciendis? Eaque, architecto?
            </p>
          </article>
        </section>
      )}
    </article>
  );
};

export default About;

import "./blog.css";
import { blog } from "../../assets/Data.js";
const Blog = () => {
  return (
    <section id="blog" className="blog">
      <h1 className="heading">
        our <span>blog</span>
      </h1>

      <section className="box-container">
        {blog.map((item, index) => (
          <section className="box" key={index * Math.random()}>
            <span className="image">
              <img src={item.img} alt="" />
            </span>
            <section className="content">
              <a href="#menu" className="title">
                tasty and refreshing spices
              </a>
              <p id="byadmin-span">by admin / 21st may, 2021</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#" id="menu-btn" className="btn">
                read more
              </a>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Blog;

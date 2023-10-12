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
              <a
                href={item.article_details}
                id="title"
                target="_blank"
                title="Opens in a new tab"
              >
                <img src={item.img} alt={item.title} />
                {item.title}
              </a>
            </span>
            <section className="content">
              <p>{item.article_summary}</p>
              <p id="byadmin-span">- by admin / 21st may, 2021</p>
              <a
                href={item.article_details}
                id="menu-btn"
                className="btn"
                target="_blank"
                title="Opens in a new tab"
              >
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

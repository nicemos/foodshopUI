import "./searchbar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = ({ searchRef }) => {
  return (
    <section
      id="search-bar"
      className="search-bar"
      ref={searchRef}
      aria-labelledby="search-box"
    >
      <input type="search" id="search-box" placeholder="search here..." />
      <label htmlFor="search-box" className="fas fa-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </label>
    </section>
  );
};

export default Searchbar;

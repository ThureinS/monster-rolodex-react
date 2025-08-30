import "./search.css";

const Search = ({ onChangeHandler }) => {
  return (
    <input
      className="search-box-container"
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default Search;

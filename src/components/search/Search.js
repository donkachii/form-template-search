import React from "react";
import searchIcon from "../../assets/images/searchIcon.svg";

const Search = ({ filter, setFilter }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        value={filter}
        placeholder="Search Templates"
      />
      <img src={searchIcon} alt="" />
    </div>
  );
};

export default Search;

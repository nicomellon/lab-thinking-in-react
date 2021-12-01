import React from "react";
import { useState } from "react";
function SearchBar(props) {
  const [filterParams, setFilterParams] = useState({
    query: "",
    onlyAvailable: false,
  });

  const handleInput = (event) => {
    let { type, value, checked, name } = event.target;
    if (type === "checkbox") value = checked;
    const filterObj = { ...filterParams };
    filterObj[name] = value;
    props.searchCb(filterObj);
    setFilterParams(filterObj);
  };

  return (
    <div className="search-bar">
      <label htmlFor="query">Search</label>
      <input
        name="query"
        type="text"
        value={filterParams.query}
        onChange={handleInput}
      />
      <input
        name="onlyAvailable"
        type="checkbox"
        checked={filterParams.onlyAvailable}
        onChange={handleInput}
      />
      <label htmlFor="onlyAvailable">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;

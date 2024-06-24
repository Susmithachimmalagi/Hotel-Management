import React from "react";
import "../style/search.css";

function Search() {
  return (
    <div>
      <div class="search">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Search;

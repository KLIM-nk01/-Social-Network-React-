import React from "react";
import SearchStyle from "./Search.module.scss";

function Search() {
  return (
    <div>
      <form className={SearchStyle.search}>
        <p>
          <input type="search" name="" placeholder="Search" />
          <input type="submit" value="search" />
        </p>
      </form>
    </div>
  );
}

export default Search;

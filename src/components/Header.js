import React from "react";
import Search from "./Search";

function Header({setSearchedString}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchedString={setSearchedString}/>
    </header>
  );
}

export default Header;

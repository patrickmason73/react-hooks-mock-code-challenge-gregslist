import React, {useState} from "react";

function Search({setSearchedString}) {

  const [text, setText] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchedString(text)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

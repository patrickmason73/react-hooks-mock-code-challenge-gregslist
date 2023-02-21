import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setAllListings(data))
  }, [])


  const [allListings, setAllListings] = useState([])
  const [searchedString, setSearchedString] = useState("")

 

  function handleDelete(item) {
    const newListings = allListings.filter((listing) => {
      return item.id !== listing.id
    })
    setAllListings(newListings);

    fetch(`http://localhost:6001/listings/${item.id}`, {method: 'DELETE'});
  };
  

  const searchListings = allListings
  .filter((listing) => listing.description.toLowerCase().includes(searchedString.toLowerCase()))


  return (
    <div className="app">
      <Header setSearchedString={setSearchedString}/>
      <ListingsContainer allListings={searchListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

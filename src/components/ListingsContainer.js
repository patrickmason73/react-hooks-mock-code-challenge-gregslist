import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({allListings, handleDelete}) {

 
 
  const displayListings = 
  allListings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} handleDelete={handleDelete}/>
  })



  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;

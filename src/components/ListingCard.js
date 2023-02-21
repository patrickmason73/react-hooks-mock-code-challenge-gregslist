import React, {useState} from "react";

function ListingCard({listing, handleDelete}) {

const [favorite, setfavorites] = useState(false)

function displayFavorites() {
  return setfavorites(!favorite)
}

function cardDelete() {
  handleDelete(listing)
}



  return (
    <li className="card" key={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={displayFavorites}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={displayFavorites}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={cardDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

import React from "react";

function Favorites({ favorites, toggleFavorite }) {
  if(favorites.length === 0) return <p>No favorite buses yet.</p>;

  return (
    <div>
      <h3>Favorites</h3>
      {favorites.map(busId => (
        <button key={busId} onClick={() => toggleFavorite(busId)} style={{ margin: "5px" }}>
          Bus {busId} (Click to remove)
        </button>
      ))}
    </div>
  );
}

export default Favorites;


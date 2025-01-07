import React, { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../utils/localStorage";
import "../assets/css/favorite.css";

const FavoritesPage = ({ searchQuery }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (name) => {
    removeFavorite(name);
    setFavorites(getFavorites());
  };

  const filteredFavorites = favorites.filter((fav) =>
    fav.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="favorites-list">
      {filteredFavorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        filteredFavorites.map((fav) => (
          <div key={fav.name} className="pokemon-card">
            <img src={fav.image} alt={fav.name} />
            <h3>{fav.name}</h3>
            <button onClick={() => handleRemove(fav.name)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;





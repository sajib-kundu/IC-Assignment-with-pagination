import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"

const PokemonCard = ({ name, url }) => {
  const id = url.split("/").filter(Boolean).pop();

  return (
    <div className="pokemon-card">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <h3>{name}</h3>
      <Link to={`/pokemon/${name}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default PokemonCard;

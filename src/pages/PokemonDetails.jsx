import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addFavorite, removeFavorite, isFavorite } from "../utils/localStorage";
import axios from "axios";
import "../assets/css/style.css"

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => setPokemon(response.data))
      .catch((error) => console.error(error));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  const toggleFavorite = () => {
    if (isFavorite(name)) {
      removeFavorite(name);
    } else {
      addFavorite(name, pokemon.sprites.front_default);
    }
  };

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Abilities:</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
      <p><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p><strong>Base Stats:</strong></p>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
      <button onClick={toggleFavorite}>
        {isFavorite(name) ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default PokemonDetails;

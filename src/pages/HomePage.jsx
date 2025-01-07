import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import "../assets/css/style.css";

const HomePage = ({ searchQuery }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("name");

  useEffect(() => {
    // Fetch Pokémon data
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => setPokemonList(response.data.results))
      .catch((error) => console.error("API Error:", error));
  }, []);

  // Filter and sort Pokémon
  const filteredPokemon = pokemonList
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0; // Default: no additional sorting
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  const displayedPokemon = filteredPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      {/* Pokémon List */}
      <div className="pokemon-list">
        {displayedPokemon.length === 0 ? (
          <p>No Pokémon found</p>
        ) : (
          displayedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;

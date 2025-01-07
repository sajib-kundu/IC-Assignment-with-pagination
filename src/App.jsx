
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/favorites" element={<FavoritesPage searchQuery={searchQuery} />} />
      </Routes>
    </Router>
  );
};

export default App;

const FAVORITES_KEY = "favorites";

export const getFavorites = () => JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

export const addFavorite = (name, image) => {
  const favorites = getFavorites();
  favorites.push({ name, image });
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const removeFavorite = (name) => {
  const favorites = getFavorites().filter((fav) => fav.name !== name);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const isFavorite = (name) => getFavorites().some((fav) => fav.name === name);

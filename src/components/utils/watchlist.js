export const getWatchlist = () => {
  return JSON.parse(localStorage.getItem("watchlist")) || [];
};

export const addToWatchlist = (movie) => {
  const list = getWatchlist();

  const exists = list.find((m) => m.id === movie.id);
  if (exists) return;

  list.push(movie);

  localStorage.setItem("watchlist", JSON.stringify(list));
};

export const removeFromWatchlist = (id) => {
  const list = getWatchlist().filter((m) => m.id !== id);
  localStorage.setItem("watchlist", JSON.stringify(list));
};
import axios from "axios";

const BASE_URL = "https://api.imdbapi.dev";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const getMovieDetails = async (id) => {
  try {
    const res = await api.get(`/titles/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const getTitles = async ({ type, genre, minRating, limit = 50, pageToken } = {}) => {
  try {
    const params = { limit };
    if (type) params.type = type;
    if (genre) params.genre = genre;
    if (minRating) params["rating.gte"] = minRating;
    if (pageToken) params.pageToken = pageToken;

    const res = await api.get("/titles", { params });
    return res.data;
  } catch (error) {
    console.error("Error fetching titles:", error);
    return null;
  }
};

export const searchTitles = async (query, limit = 20) => {
  try {
    const params = { q: query, limit };

    const res = await api.get("/titles", { params });
    return res.data;
  } catch (error) {
    console.error("Error searching titles:", error);
    return null;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const res = await api.get("/titles", { params: { limit: 20 } });
    return res.data;
  } catch (error) {
    console.error("Error fetching top rated:", error);
    return null;
  }
};

export default api;

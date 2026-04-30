import axios from "axios";

const BASE_URL = "https://api.imdbapi.dev";

export const getMovieDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/titles/${id}`);
    console.log("API RESPONSE:", res.data);
    return res.data;
  } catch (error) {
    console.log("API ERROR:", error);
    return null;
  }
};
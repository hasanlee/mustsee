import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

async function searchMovieAPI(query) {
  const client = applyCaseMiddleware(axios.create());
  try {
    const response = await client.get(
      process.env.REACT_APP_OMDB_API_URL +
        "?apikey=" +
        process.env.REACT_APP_OMDB_API_KEY +
        "&s=" +
        query
    );
    if (JSON.parse(response.data.response.toLowerCase())) {
      console.log("iff");
      return response.data.search;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getMovieById(id) {
  const client = applyCaseMiddleware(axios.create());
  try {
    const response = await client.get(
      process.env.REACT_APP_OMDB_API_URL +
        "?apikey=" +
        process.env.REACT_APP_OMDB_API_KEY +
        "&i=" +
        id
    );
    if (JSON.parse(response.data.response.toLowerCase())) {
      return response.data;
    }
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export { searchMovieAPI, getMovieById };

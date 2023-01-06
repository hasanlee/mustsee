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
    if (response.data.response) {
      return response.data.search;
    }
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export { searchMovieAPI };

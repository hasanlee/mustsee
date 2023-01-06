import axios from "axios";

async function saveFavoriteListAPI(postData) {
  try {
    const response = await axios.post(process.env.REACT_APP_ALGORITMIKA_API);
    return response.data.id;
  } catch (error) {
    console.error(error);
  }
}

export { saveFavoriteListAPI };

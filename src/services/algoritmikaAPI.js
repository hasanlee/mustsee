import axios from "axios";

async function saveFavoritesAPI(postData) {
  try {
    const response = await axios.post(process.env.REACT_APP_ALGORITMIKA_API);
    console.table(response.data);
    return response.data.id;
  } catch (error) {
    console.error(error);
  }
}

export { saveFavoritesAPI };

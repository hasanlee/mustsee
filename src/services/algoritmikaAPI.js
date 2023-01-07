import axios from "axios";

async function saveFavoriteListAPI(postData) {
  try {
    const response = await axios.post(
      process.env.REACT_APP_ALGORITMIKA_API,
      postData
    );
    return response.data.id;
  } catch (error) {
    console.error(error);
  }
}

async function getListById(id) {
  try {
    const response = await axios.get(
      process.env.REACT_APP_ALGORITMIKA_API + "/" + id
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { saveFavoriteListAPI, getListById };

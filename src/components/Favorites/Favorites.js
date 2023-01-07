import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/stores/FavoritesSlice";
import { saveFavoriteListAPI } from "../../services/algoritmikaAPI";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [listlink, setListLink] = useState("");

  const removeHandler = (id) => {
    dispatch(removeFromFavorites(id));
  };
  const saveFavoriteListHandler = async () => {
    const postData = {
      title,
      movies: favorites.map(({ imdbId }) => imdbId),
    };
    const response = await saveFavoriteListAPI(postData);
    setListLink("/" + response);
  };

  return (
    <div className='favorites'>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='favorites__name'
        placeholder='List name'
      />
      <ul className='favorites__list'>
        {favorites.map((item) => {
          return (
            <li key={item.imdbId}>
              {item.title} ({item.year})
              <button
                className='btn'
                onClick={() => removeHandler(item.imdbId)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
      {listlink ? (
        <a href={listlink}>View your list</a>
      ) : (
        <button
          type='button'
          className='favorites__save'
          onClick={saveFavoriteListHandler}
        >
          Save to favorites
        </button>
      )}
    </div>
  );
};

export default Favorites;

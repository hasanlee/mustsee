import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromFavorites,
  addFavoriteList,
} from "../../redux/stores/FavoritesSlice";
import { saveFavoriteListAPI } from "../../services/algoritmikaAPI";
import "./Favorites.css";

const Favorites = () => {
  const { favorites, favoriteLists } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const removeHandler = (id) => {
    dispatch(removeFromFavorites(id));
  };
  const saveFavoriteListHandler = () => {
    const postData = {
      title,
      movies: favorites.map(({ imdbId }) => imdbId),
    };
    const response = saveFavoriteListAPI(postData);
    dispatch(addFavoriteList(response));
  };

  return (
    <div className='favorites'>
      <div className='box'>
        <h1 className='list-header'>Your lists ({favoriteLists.length})</h1>
        <br />
        <ul className='favorites__list'>
          {favoriteLists.map((list) => {
            return (
              <li className='list-name' key={list.id}>
                <a href={"/list/" + list.id} target='_blank'>
                  {list.title}
                </a>{" "}
                (Movies: {list.movies.length})
              </li>
            );
          })}
        </ul>
      </div>
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
      <button
        type='button'
        className='favorites__save'
        onClick={saveFavoriteListHandler}
      >
        Save to favorites
      </button>
    </div>
  );
};

export default Favorites;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/stores/FavoritesSlice";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const removeHandler = (id) => {
    dispatch(removeFromFavorites(id));
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
            <li key={item.imdbID}>
              {item.title} ({item.year})
              <button
                className='btn'
                onClick={() => removeHandler(item.imdbID)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
      <button type='button' className='favorites__save'>
        Save to favorites
      </button>
    </div>
  );
};

export default Favorites;

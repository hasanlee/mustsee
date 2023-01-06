import React from "react";
import "./MovieItem.css";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../redux/stores/FavoritesSlice";

const MovieItem = (movie) => {
  const { title, year, poster } = movie;

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addToFavorites(movie));
  };

  return (
    <article className='movie-item'>
      <img className='movie-item__poster' src={poster} alt={title} />
      <div className='movie-item__info'>
        <h3 className='movie-item__title'>
          {title}&nbsp;({year})
        </h3>
        <button
          type='button'
          className='movie-item__add-button'
          onClick={addHandler}
        >
          Add to favorites
        </button>
      </div>
    </article>
  );
};

export default MovieItem;

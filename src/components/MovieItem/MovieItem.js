import React, { useState, useEffect } from "react";
import "./MovieItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../redux/stores/FavoritesSlice";
import { toggleFavorite } from "../../redux/stores/MoviesSlice";

const MovieItem = (movie) => {
  const { title, year, poster, imdbId, favorite } = movie;
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addToFavorites(movie));
    dispatch(toggleFavorite({ ...movie, favorite: !favorite }));
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
          disabled={favorite}
        >
          {favorite ? "Favorited ❤️" : "Add to favorites 🤍"}
        </button>
      </div>
    </article>
  );
};

export default MovieItem;

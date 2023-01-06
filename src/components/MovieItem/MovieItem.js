import React, { useState, useEffect } from "react";
import "./MovieItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../redux/stores/FavoritesSlice";

const MovieItem = (movie) => {
  const { title, year, poster } = movie;
  const { favorites } = useSelector((state) => state.favorite);
  const [favorited, setFavorited] = useState(false);

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addToFavorites(movie));
    setFavorited(true);
  };
  const checkFavorited = () => {
    setFavorited(
      favorites.findIndex((fav) => fav.imdbId === movie.imdbId) > 0
        ? true
        : false
    );
  };
  useEffect(() => {
    checkFavorited();
  }, []);
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
          disabled={favorited}
        >
          Add to favorites
        </button>
      </div>
    </article>
  );
};

export default MovieItem;

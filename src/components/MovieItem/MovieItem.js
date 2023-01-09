import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../redux/stores/FavoritesSlice";
import { toggleFavorite } from "../../redux/stores/MoviesSlice";

const MovieItem = (movie) => {
  const { favorites } = useSelector((state) => state.favorite);
  const [film, setFilm] = useState(movie);
  const { title, year, poster, imdbId, favorite } = film;
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addToFavorites(movie));
    dispatch(toggleFavorite({ ...movie, favorite: !favorite }));
  };

  useEffect(() => {
    favorites.findIndex(({ imdbId: id }) => id === film.imdbId) < 0
      ? setFilm({ ...film, favorite: false })
      : setFilm({ ...film, favorite: true });
  }, [movie]);
  return (
    <article>
      <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden shadow-md rounded-lg bg-white dark:bg-slate-700 xl:aspect-w-7 xl:aspect-h-8'>
        <img
          className='h-1/3 w-full object-cover object-center group-hover:opacity-75 transition-opacity'
          src={poster}
          alt={title}
        />
        <div className='flex justify-between items-center p-2 h-2/3 text-black dark:text-white'>
          <h3 className='text-s'>
            {title}&nbsp;({year})
          </h3>
          <button
            type='button'
            className='text-xl border-0 hover:text-red-600 dark:hover:text-red-500 text-black dark:text-white'
            disabled={favorite}
            onClick={addHandler}
          >
            {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieItem;

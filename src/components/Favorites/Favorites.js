import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/stores/FavoritesSlice";
import { saveFavoriteListAPI } from "../../services/algoritmikaAPI";
import { toggleFavorite } from "../../redux/stores/MoviesSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [listlink, setListLink] = useState("");
  const [parent] = useAutoAnimate();

  const removeHandler = (item) => {
    dispatch(removeFromFavorites(item.imdbId));
    dispatch(toggleFavorite(item));
  };
  const saveFavoriteListHandler = async () => {
    const postData = {
      title,
      movies: favorites.map(({ imdbId }) => imdbId),
    };
    const response = await saveFavoriteListAPI(postData);
    setListLink("/list/" + response);
  };

  return (
    <div className='p-4 rounded shadow-md bg-white dark:bg-slate-700'>
      <p className='text-base font-medium text-gray-900 truncate dark:text-white px-2 mb-2'>
        Favorites
      </p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full brand-input'
        placeholder='List name'
        disabled={listlink}
      />
      <ul
        ref={parent}
        className='max-w-md divide-y divide-gray-200 dark:divide-slate-600 p-3'
      >
        {favorites.map((item) => {
          return (
            <li className='pb-3 sm:pb-4' key={item.imdbId}>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-8 h-8 rounded-full'
                    src={item.poster}
                    alt={item.title}
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-slate-900 truncate dark:text-white'>
                    {item.title}
                  </p>
                  <p className='text-sm text-slate-500 truncate dark:text-gray-400'>
                    {item.year}
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  {listlink ? null : (
                    <button
                      className='brand-btn !rounded-full  hover:text-red-600'
                      onClick={() => removeHandler(item)}
                    >
                      <AiOutlineDelete />
                    </button>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {listlink ? (
        <a href={listlink} target='_blank' rel='norefferer'>
          View your list
        </a>
      ) : (
        <button
          type='button'
          className='w-full brand-btn'
          onClick={saveFavoriteListHandler}
          disabled={!title}
        >
          Save list
        </button>
      )}
    </div>
  );
};

export default Favorites;

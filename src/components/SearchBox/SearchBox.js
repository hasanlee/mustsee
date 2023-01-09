import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToMovies } from "../../redux/stores/MoviesSlice";
import { searchMovieAPI } from "../../services/omdbAPI";

function SearchBox() {
  const [searchLine, setSearchLine] = useState("");

  const dispatch = useDispatch();

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await searchMovieAPI(searchLine);
    dispatch(addToMovies(result));
  };

  return (
    <div>
      <form className='w-full flex gap-2' onSubmit={searchBoxSubmitHandler}>
        <input
          value={searchLine}
          type='text'
          className='w-full brand-input'
          placeholder='Example, Shawshank Redemption'
          onChange={searchLineChangeHandler}
        />
        <button type='submit' className='brand-btn' disabled={!searchLine}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;

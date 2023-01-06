import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToMovies } from "../../redux/stores/MoviesSlice";
import { searchMovieAPI } from "../../services/omdbAPI";
import "./SearchBox.css";

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
    <div className='search-box'>
      <form className='search-box__form' onSubmit={searchBoxSubmitHandler}>
        <label className='search-box__form-label'>
          Search movie by name:
          <input
            value={searchLine}
            type='text'
            className='search-box__form-input'
            placeholder='Example, Shawshank Redemption'
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type='submit'
          className='search-box__form-submit'
          disabled={!searchLine}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;

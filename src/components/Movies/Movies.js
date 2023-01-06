import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = () => {
  const { movies } = useSelector((state) => state.movie);
  return (
    <ul className='movies'>
      {movies.map((movie) => (
        <li className='movies__item' key={movie.imdbId}>
          <MovieItem {...movie} />
        </li>
      ))}
    </ul>
  );
};

export default Movies;

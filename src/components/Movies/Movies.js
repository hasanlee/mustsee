import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";

const Movies = () => {
  const { movies } = useSelector((state) => state.movie);
  return (
    <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
      {movies.map((movie) => (
        <div className='group' key={movie.imdbId}>
          <MovieItem {...movie} />
        </div>
      ))}
    </div>
  );
};

export default Movies;

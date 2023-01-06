import React, { useEffect, useState, useRef } from "react";
import "./ListPage.css";
const ListPage = (props) => {
  const [movies, setMovies] = useState([
    {
      title: "The Godfather",
      year: 1972,
      imdbID: "tt0068646",
    },
  ]);
  useEffect(() => {
    const id = props.match.params;
    console.log(id); // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
  }, []);
  const state = useRef({
    movies: [
      {
        title: "The Godfather",
        year: 1972,
        imdbID: "tt0068646",
      },
    ],
  });
  return (
    <div className='list-page'>
      <h1 className='list-page__title'>Мой список</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID}>
              <a href='https://www.imdb.com/title/tt0068646/' target='_blank'>
                {item.title} ({item.year})
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;

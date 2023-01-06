import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ListPage.css";
const ListPage = () => {
  const { id } = useParams();
  const [movies] = useState([
    {
      title: "The Godfather",
      year: 1972,
      imdbID: "tt0068646",
    },
  ]);
  useEffect(() => {
    console.log(id);
    // TODO: запрос к сервер на получение списка
  }, [id]);
  return (
    <div className='list-page'>
      <h1 className='list-page__title'>My favorites</h1>
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

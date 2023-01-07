import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/omdbAPI";
import { getListById } from "../../services/algoritmikaAPI";
import "./ListPage.css";
const ListPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getListById(id).then(({ title, movies: list }) => {
        setTitle(title);
        list.forEach(async (el) => {
          setMovies([...movies, await getMovieById(el)]);
        });
      });
    }
    fetchData();
  }, [id]);

  return (
    <div className='list-page'>
      <h1 className='list-page__title'>{title}</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbId}>
              <a
                href={"https://www.imdb.com/title/" + item.imdbId}
                target='_blank'
                rel='noreferrer'
              >
                {item.title} ({item.year}) ⭐{item.imdbRating}/10
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;

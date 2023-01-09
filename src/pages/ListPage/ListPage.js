import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/omdbAPI";
import { getListById } from "../../services/algoritmikaAPI";
import Header from "../../components/Header/Header";
import { BiCopyAlt } from "react-icons/bi";
import Notification from "../../components/Notification/Notification";
const ListPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState([]);
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setShow(true);
  };

  useEffect(() => {
    async function fetchData() {
      await getListById(id).then(({ title, movies: list }) => {
        setTitle(title);
        list.forEach(async (el) => {
          let movie = await getMovieById(el);
          setMovies((movies) => [...movies, movie]);
        });
      });
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, "2000");
  }, [show]);

  return (
    <div>
      {show && <Notification badge='COPY' text='Link copied to clipboard' />}
      <Header />

      <main className='flex py-8 px-10 w-full items-center justify-center'>
        <section className='w-1/2 max-md:w-full'>
          <div>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl max-md:text-lg font-bold tracking-tight text-gray-900 dark:text-white flex justify-between'>
                List name : {title}{" "}
                <div>
                  <button onClick={copyHandler}>
                    <BiCopyAlt />
                  </button>
                </div>
              </h1>
            </div>
            <ul className='my-6 divide-y divide-slate-200'>
              {movies.map((item) => {
                return (
                  <li key={item.imdbId} className='flex py-6'>
                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-transparent'>
                      <img
                        src={item.poster}
                        alt={item.title}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='ml-4 flex flex-1 flex-col'>
                      <div>
                        <div className='flex justify-between text-base font-medium text-black dark:text-white max-md:text-sm'>
                          <h3>
                            <a
                              href={"https://www.imdb.com/title/" + item.imdbId}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {item.title} ({item.year})
                            </a>
                          </h3>
                          <p className='ml-4 max-md:text-xs'>{item.director}</p>
                        </div>
                        <p className='mt-1 text-sm text-gray-500 max-md:text-xs'>
                          {item.genre}
                        </p>
                      </div>
                      <div className='flex flex-1 items-end justify-between text-sm'>
                        <p className='text-gray-500 max-md:text-xs'>
                          Rating: {item.imdbRating}/10
                        </p>

                        <div className='flex max-md:text-xs'>
                          {item.released}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ListPage;

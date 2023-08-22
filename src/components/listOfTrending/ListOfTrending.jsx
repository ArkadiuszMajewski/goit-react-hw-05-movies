import { Suspense, useEffect, useState } from 'react';
import { getTrending } from '../api/api';
import { Link, Outlet } from 'react-router-dom';
import css from './ListOfTrending.module.css';

export const ListOfTrending = () => {
  //   console.log(trending);

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTrending();

      setTrending(data.results);
    };
    fetch();
  }, []);

  return (
    <div>
      <h1 style={{ padding: 10 }}>Trending today</h1>

      <ul className={css.list}>
        {trending.map(movie => (
          <li key={movie.id} className={css.line}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback={<div className={css.loading}>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

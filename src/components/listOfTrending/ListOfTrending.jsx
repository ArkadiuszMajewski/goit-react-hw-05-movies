import { useEffect, useState } from 'react';
import { getTrending } from '../api/api';
import { Link } from 'react-router-dom';
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
    <ul className={css.list}>
      {trending.map(movie => (
        <li key={movie.id} className={css.line}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import css from './ComponentLayout.module.css';
import { getTrending } from '../api/api';
import { useEffect, useState } from 'react';
import { ListOfTrending } from 'components/listOfTrending/ListOfTrending';

export const CommonLayout = () => {
  const isActiveLink = ({ isActive }) =>
    isActive ? css['active'] : css['link'];
  getTrending();

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTrending();

      setTrending(data.results);
    };
    fetch();
  }, []);

  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to="movies" className={isActiveLink}>
          Movies
        </NavLink>
      </nav>
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
      <div>
        <h1 style={{ padding: 10 }}>Trending today</h1>
        <ListOfTrending trending={trending} />
      </div>
    </div>
  );
};

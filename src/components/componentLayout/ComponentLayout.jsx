// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './ComponentLayout.module.css';

import { ListOfTrending } from 'components/listOfTrending/ListOfTrending';

export const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <h1 style={{ padding: 10 }}>Trending today</h1>
        <ListOfTrending />
      </div>
      <Outlet />
    </div>
  );
};

import { Outlet } from 'react-router-dom';
import css from './ComponentLayout.module.css';

import { ListOfTrending } from 'components/listOfTrending/ListOfTrending';
import { Suspense } from 'react';

export const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <h1 style={{ padding: 10 }}>Trending today</h1>
        <ListOfTrending />
      </div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

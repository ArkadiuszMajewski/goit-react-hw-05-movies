// import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import css from './ComponentLayout.module.css';

import { useEffect, useState } from 'react';
import { ListOfTrending } from 'components/listOfTrending/ListOfTrending';

export const CommonLayout = () => {
  return (
    <div className={css.container}>
      <div>
        <h1 style={{ padding: 10 }}>Trending today</h1>
        <ListOfTrending />
      </div>
    </div>
  );
};

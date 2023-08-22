import { NavLink, Outlet } from 'react-router-dom';
import css from './ComponentLayout.module.css';

import { ListOfTrending } from 'components/listOfTrending/ListOfTrending';
import { Suspense } from 'react';

const ComponentLayout = () => {
  const isActiveLink = ({ isActive }) =>
    isActive ? css['active'] : css['link'];
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink to="/" className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={isActiveLink}>
          Movies
        </NavLink>
      </nav>

      <Suspense fallback={<div className={css.loading}>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default ComponentLayout;

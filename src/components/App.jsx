// import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { CommonLayout } from './componentLayout/ComponentLayout';
import { MovieDetails } from './movieDetails/MovieDetails';
import css from './App.module.css';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import Movies from './Movies/Movies';
// const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  const isActiveLink = ({ isActive }) =>
    isActive ? css['active'] : css['link'];
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

      <Routes>
        <Route path="/" element={<CommonLayout />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<CommonLayout />} />
      </Routes>
    </div>
  );
};

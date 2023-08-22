// import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './componentLayout/ComponentLayout';
// import MovieDetails from './movieDetails/MovieDetails';
import css from './App.module.css';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
// import Movies from './Movies/Movies';
import { lazy } from 'react';

const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));

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
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

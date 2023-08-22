// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ComponentLayout from './componentLayout/ComponentLayout';
// import MovieDetails from './movieDetails/MovieDetails';
import css from './App.module.css';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
// import Movies from './Movies/Movies';
import { lazy } from 'react';
import { ListOfTrending } from './listOfTrending/ListOfTrending';

const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<ComponentLayout />}>
          <Route index element={<ListOfTrending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="*" element={<ListOfTrending />} />
        </Route>
      </Routes>
    </div>
  );
};

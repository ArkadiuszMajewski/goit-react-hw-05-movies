import React, { Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './Cast.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200'; // Base URL for actor images

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const key = '0127585737a1692bc4e9c9e0b9997760';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}`
        );
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <Link to={`/movies/${movieId}`} className={css.button}>
        Back to Movie Details
      </Link>
      <div className={css.castContainer}>
        {/* <MovieDetails /> */}
        <div className={css.castContainer}>
          <h2>Cast</h2>
          <ul className={css.castList}>
            {cast.map(actor => (
              <li className="cast-item" key={actor.id}>
                <img
                  className="actor-image"
                  src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                  alt={actor.name}
                />
                <p className="actor-name">{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </div>

      <Outlet />
    </div>
  );
};

export default Cast;

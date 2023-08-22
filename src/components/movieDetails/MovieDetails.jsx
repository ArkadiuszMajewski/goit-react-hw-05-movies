import css from './MovieDetails.module.css';
import { Suspense } from 'react';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
const imageUrl = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const key = '0127585737a1692bc4e9c9e0b9997760';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieContainer}>
      {movieDetails ? (
        <div>
          <h2 className={css.movieTitle}>{movieDetails.title}</h2>
          <img
            className={css.movieImage}
            src={imageUrl + movieDetails.poster_path}
            alt={movieDetails.title}
          />
          <p className={css.movieOverview}>{movieDetails.overview}</p>

          <Link to={`/movies/${movieId}/cast`} className={css.link}>
            Cast
          </Link>
          <Link to={`/movies/${movieId}/reviews`} className={css.link}>
            Reviews
          </Link>
        </div>
      ) : (
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      )}
    </div>
  );
};

import css from './MovieDetails.module.css';
import { Suspense } from 'react';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
const imageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
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
    <div>
      {movieDetails ? (
        <div className={css.movieContainer}>
          <img
            className={css.movieImage}
            src={imageUrl + movieDetails.poster_path}
            alt={movieDetails.title}
          />
          <div>
            <h2 className={css.movieTitle}>Title: {movieDetails.title}</h2>
            <h2>Overview</h2>
            <p className={css.movieOverview}>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <p>
              {movieDetails.genres.map(g => (
                <span> {g.name} </span>
              ))}{' '}
            </p>
          </div>
        </div>
      ) : (
        <Suspense fallback={<div>Loading page...</div>}></Suspense>
      )}
      <Link to={`/movies/${movieId}/cast`} className={css.link}>
        Cast
      </Link>
      <Link to={`/movies/${movieId}/reviews`} className={css.link}>
        Reviews
      </Link>
      <Suspense fallback={<div className={css.loading}>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;

import { MovieDetails } from 'components/movieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import '../Cast/Cast.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200'; // Base URL for actor images

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const apiKey = '1f189cc65d8faa305307626e5a4d4071'; // Klucz API themoviedb.org
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
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
      <Link to={`/movies/${movieId}`} className="btn">
        Back to Movie Details
      </Link>
      <MovieDetails />
      <div className={`cast-container`}>
        <h2>Cast</h2>
        <ul className="cast-list">
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
    </div>
  );
};

export default Cast;

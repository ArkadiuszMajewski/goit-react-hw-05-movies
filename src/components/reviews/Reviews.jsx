import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './Reviews.module.css';
import { MovieDetails } from 'components/movieDetails/MovieDetails';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const key = '0127585737a1692bc4e9c9e0b9997760';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`
        );
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <Link to={`/movies/${movieId}`} className={css.button}>
        Back to Movie Details
      </Link>

      <h2>Reviews</h2>
      <ul className="reviews-list">
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Reviews;

import { Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import css from './Reviews.module.css';

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

  console.log(reviews);
  return (
    <div className={css.reviewsContainer}>
      <Link to={`/movies/${movieId}`} className={css.button}>
        Back to Movie Details
      </Link>

      {reviews.length > 0 ? <h2>Reviews</h2> : <h2>No movie review</h2>}
      <ul className={css.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            --------------------------------------
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      <Suspense fallback={<div className={css.loading}>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Reviews;

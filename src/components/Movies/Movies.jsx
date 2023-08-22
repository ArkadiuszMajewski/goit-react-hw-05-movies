import { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Movies.css';

const Movies = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = event => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const key = '0127585737a1692bc4e9c9e0b9997760';
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchKeyword}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error while fetching data:', error);
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className={`movies-container Back to Movie Details`}>
      <h2>Search Movies</h2>

      <input
        type="text"
        placeholder="Enter search keyword"
        value={searchKeyword}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      <ul className="movies-list">
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link className="movie-items" to={`/movies/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-thumbnail"
              />
              <span className="movies-title">
                {truncateTitle(movie.title, 12)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

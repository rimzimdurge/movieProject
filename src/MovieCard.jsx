// MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img src={movie.Poster} alt={movie.Title} />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com?apikey=44241ef1&i=${id}`);
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleStarClick = (starIndex) => {
    // Set the rating to the clicked star's index + 1
    setRating(starIndex + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-left">
        <h2>{movie.Title}</h2>
        <hr />
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Year}</p>
        <Link to="/" className="GoBack-link">
          Go Back
        </Link>
      </div>
      <div className="movie-details-right">
        {/* Add more details here, for example: */}
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Description: Aron's mother is suffering from a terminal illness and his father is constantly worried about her. Aron dreams of gaining superhuman qualities to save her.</p>
        {/* <p>Cast: Adriana Bailescu	, Zsolt Bogdán , Tatal
        Ovidiu , Crisan	Ovidiu , Crisan	Elena Ivanca , Cornel Raileanu , Maria Seles	, Aaron Serban</p> */}
        <p>Cast: {movie.Actors}</p>
        

        <div className="rating-section">
          <p>Rate this movie:</p>
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                className={`star ${index <= rating ? 'yellow' : 'grey'}`}
                onClick={() => handleStarClick(index)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;





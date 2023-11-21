import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_URL = 'http://www.omdbapi.com?apikey=44241ef1';

const Action = ({ setHideOtherElements }) => {
  const [actionMovies, setActionMovies] = useState([]);
  const [sideMenuVisible, setSideMenuVisible] = useState(true); // State to control side menu visibility
  const [carouselVisible, setCarouselVisible] = useState(true); // State to control carousel visibility
  const navigate = useNavigate(); // Hook for navigation

  const fetchActionMovies = async () => {
    const response = await fetch(`${API_URL}&s=action`);
    const data = await response.json();
    setActionMovies(data.Search);
  };

  useEffect(() => {
    fetchActionMovies();
    setHideOtherElements(true);
  }, []);

  // Function to hide side menu, carousel, and go back to the previous page
  const hideAllAndGoBack = () => {
    setSideMenuVisible(false);
    setCarouselVisible(false);
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <h2>Action Movies</h2>
      {sideMenuVisible && (
        // Render side menu if sideMenuVisible is true
        <div className="side-menu">
          {/* Add your side menu content here */}
        </div>
      )}

      {carouselVisible && (
        // Render carousel if carouselVisible is true
        <div className="carousel">
          {/* Add your carousel content here */}
        </div>
      )}

      <div className="container">
        {actionMovies?.length > 0 ? (
          actionMovies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <div className="empty">
            <h2>No action movies found</h2>
          </div>
        )}
      </div>
      {/* <button onClick={hideAllAndGoBack}>Go Back</button>  */}
      <Link to="/" onClick={() => setHideOtherElements(false)}>Go Back</Link>
    </div>
  );
};

export default Action;
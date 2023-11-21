import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Navbar from "./components/Navbar";
import Side from "./components/Side";
import Login from "./components/Login";
import Horror from "./components/Horror";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import img1 from "../src/assets/img1.jpg";
import img2 from "../src/assets/img2.jpg";
import img3 from "../src/assets/img3.jpg";

//44241ef1

const API_URL = "http://www.omdbapi.com?apikey=44241ef1";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mode, setMode] = useState("light");
  const [hideOtherElements, setHideOtherElements] = useState(false);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <Router>
        <div className={`app ${mode === "light" ? "light-mode" : "dark-mode"}`}>
          <Navbar mode={mode} setMode={setMode} />
          <Side />
          <div className="centered-content">
            <h1>MovieLand</h1>

            <div className="search">
              <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
              />
            </div>
          </div>

          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Genre: Heist, Crime drama, Thriller</h5>
                  <p>
                    When the national mint and a touring school group are held
                    hostage by robbers, police believe that the thieves have no
                    way out. Little do they know that the thieves have a bigger
                    plan in store.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Genre:Action, Superhero, Fantasy</h5>
                  <p>
                    Still reeling from the loss of Gamora, Peter Quill must
                    rally his team to defend the universe and protect one of
                    their own. If the mission is not completely successful, it
                    could possibly lead to the end of the Guardians as we know
                    them..
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Genre:Animated Fantasy</h5>
                  <p>
                    Despite his family's generations-old ban on music, young
                    Miguel dreams of becoming an accomplished musician like his
                    idol Ernesto de la Cruz.{" "}
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/horror"
              element={<Horror setHideOtherElements={setHideOtherElements} />}
            />
          </Routes>
          {/* 
          <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        toggle mode
      </button> */}

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;

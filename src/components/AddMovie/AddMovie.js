import React, { useState } from "react";
import MovieCard from "../MovieCard";
import classes from "./AddMovie.module.css";
import { REACT_APP_TMDB_KEY } from "../../App";
const AddMovie = function () {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const searchMovieHandler = async function (e) {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (e.target.value) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      );
      const data = await response.json();
      setResult(data.results);
      console.log(data);
    }
  };
  return (
    <div className={`${classes["add-page"]}`}>
      <div className={classes.container}>
        <div className={classes.addcontent}>
          <div className={classes.inputwrapper}>
            <input
              type="text"
              placeholder="Search for a movie"
              onChange={searchMovieHandler}
              value={searchValue}
            />
          </div>
          {result.length > 0 && (
            <ul className={classes.results}>
              {result.map((movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;

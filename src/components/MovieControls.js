import React, { useContext } from "react";
import classes from "./MovieControls.module.css";
import { GlobalStore, useAppContext } from "../context/GlobalStore";
import { useHistory } from "react-router-dom";

export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeMovieFromWatched,
    addMovieToWatchlist,
  } = useAppContext();
  const history = useHistory();
  const removeMovieFromWatchlistHandler = function (e) {
    e.preventDefault();
    removeMovieFromWatchlist(movie.id);
  };
  const addMovieToWatchedHandler = function (e) {
    e.preventDefault();
    addMovieToWatched(movie);
  };
  const removeMovieFromWatchedHandler = function (e) {
    e.preventDefault();
    removeMovieFromWatched(movie.id);
  };
  const addMovieToWatchlistHandler = function (e) {
    e.preventDefault();
    addMovieToWatchlist(movie);
  };
  const movieDetailHandler = function (e) {
    e.preventDefault();
    history.push(`/movie/${movie.id}`);
  };
  return (
    <div className={classes.innercardcontrols}>
      {type === "watchlist" && (
        <>
          <button
            className={classes.ctrlbtn}
            onClick={addMovieToWatchedHandler}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className={classes.ctrlbtn}
            onClick={removeMovieFromWatchlistHandler}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
          <button className={classes.ctrlbtn} onClick={movieDetailHandler}>
            <i className="fa fa-info-circle"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className={classes.ctrlbtn}
            onClick={addMovieToWatchlistHandler}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            className={classes.ctrlbtn}
            onClick={removeMovieFromWatchedHandler}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
          <button className={classes.ctrlbtn} onClick={movieDetailHandler}>
            <i className="fa fa-info-circle"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;

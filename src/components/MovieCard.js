import React from "react";
import classes from "./MovieCard.module.css";
import { useAppContext } from "../context/GlobalStore";

const MovieCard = function ({ movie }) {
  const globalCtx = useAppContext();
  const storedMovie = globalCtx.watchlist.find((mov) => mov.id === movie.id);
  const storedMovieWatched = globalCtx.watched.find(
    (mov) => mov.id === movie.id
  );
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  const addWatchlistHandler = function () {
    globalCtx.addMovieToWatchlist(movie);
  };
  const addToWatchedHandler = function () {
    globalCtx.addMovieToWatched(movie);
  };
  return (
    <div className={`${classes["movie-card"]}`}>
      <div className={`${classes["poster-wrapper"]}`}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        )}
      </div>
      <div className={classes.info}>
        <div className={classes.header}>
          <h3 className={classes.title}>{movie.title}</h3>
          <h4 className={classes.reldate}>
            {movie.release_date ? movie.release_date.substring(0, 4) : ""}
          </h4>
        </div>
        <div className={classes.controls}>
          <button
            className={classes.btn}
            disabled={watchlistDisabled}
            onClick={addWatchlistHandler}
          >
            Add to Watchlist
          </button>
          <button
            className={classes.btn}
            disabled={watchedDisabled}
            onClick={addToWatchedHandler}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

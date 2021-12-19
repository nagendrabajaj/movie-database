import MovieControls from "./MovieControls";
import classes from "./MovieItem.module.css";

const MovieItem = function ({ movie, type }) {
  return (
    <div className={classes.moviecard}>
      <div className={classes.overlay}></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className={classes.fillerposter}></div>
      )}
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieItem;

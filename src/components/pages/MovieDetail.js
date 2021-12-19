import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./MovieDetail.module.css";
import { REACT_APP_TMDB_KEY } from "../../App";

const MovieDetail = function () {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const fetchMovieDetail = async function () {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_TMDB_KEY}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        setMovie(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMovieDetail();
  }, [movieId]);
  console.log(movie);

  return (
    <div className={classes.container}>
      {movie && (
        <>
          <div className={classes.description}>
            <h2>{movie.title}</h2>
            <h4>{`Release Date: ${new Date(
              movie.release_date
            ).toLocaleDateString()}`}</h4>
            <h4>{`Duration:${movie.runtime} minutes`}</h4>
            <h4>{`Genre: ${movie.genres.map((mov) => mov.name)}`}</h4>
            <p>{movie.overview}</p>
          </div>
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
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;

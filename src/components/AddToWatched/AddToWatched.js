import { useAppContext } from "../../context/GlobalStore";
import MovieItem from "../MovieItem";
import classes from "./AddToWatched.module.css";

const AddToWatched = function (props) {
  const { watched } = useAppContext();
  return (
    <div className={classes.moviepage}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.heading}>Watched Movies</h1>
          <span className={classes.countpill}>{`${watched.length} ${
            watched.length === 1 ? "Movie" : "Movies"
          }
        `}</span>
        </div>

        {watched.length > 0 ? (
          <ul>
            <div className={classes.moviegrid}>
              {watched.map((movie) => (
                <li key={movie.id}>
                  <MovieItem movie={movie} type="watched" />
                </li>
              ))}
            </div>
          </ul>
        ) : (
          <h2 className={classes.nomovies}>You have not watched any movie!</h2>
        )}
      </div>
    </div>
  );
};

export default AddToWatched;

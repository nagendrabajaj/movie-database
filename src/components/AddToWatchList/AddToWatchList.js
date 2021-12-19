import { useContext } from "react/cjs/react.development";
import { GlobalStore, useAppContext } from "../../context/GlobalStore";
import MovieItem from "../MovieItem";
import classes from "./AddToWatchList.module.css";

const AddToWatchList = function (props) {
  const { watchlist } = useAppContext();
  return (
    <div className={classes.moviepage}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.heading}>My Watchlist</h1>
          <span className={classes.countpill}>{`${watchlist.length} ${
            watchlist.length === 1 ? "Movie" : "Movies"
          }
        `}</span>
        </div>
        {watchlist.length > 0 ? (
          <ul>
            <div className={classes.moviegrid}>
              {watchlist.map((movie) => (
                <li key={movie.id}>
                  <MovieItem movie={movie} type="watchlist" />
                </li>
              ))}
            </div>
          </ul>
        ) : (
          <h2 className={classes.nomovies}>No movies in your watchlist!</h2>
        )}
      </div>
    </div>
  );
};

export default AddToWatchList;

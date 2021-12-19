import React, { useReducer, useEffect, createContext, useContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

export const GlobalStore = createContext({
  ...initialState,
  addMovieToWatchlist: () => {},
  removeMovieFromWatchlist: () => {},
  addMovieToWatched: () => {},
  removeMovieFromWatched: () => {},
});

export const GlobalProvider = function (props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  const addMovieToWatchlist = function (movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchlist = function (id) {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const addMovieToWatched = function (movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };
  const removeMovieFromWatched = function (id) {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };
  return (
    <GlobalStore.Provider
      value={{
        watched: state.watched,
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        removeMovieFromWatched,
      }}
    >
      {props.children}
    </GlobalStore.Provider>
  );
};

export function useAppContext() {
  return useContext(GlobalStore);
}

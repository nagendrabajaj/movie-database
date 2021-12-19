import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Add from "./components/pages/Add";
import WatchList from "./components/pages/WatchList";
import Watched from "./components/pages/Watched";
import MovieDetail from "./components/pages/MovieDetail";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/watchlist" />
        </Route>
        <Route path="/watched" exact>
          <Watched />
        </Route>
        <Route path="/watchlist">
          <WatchList />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;

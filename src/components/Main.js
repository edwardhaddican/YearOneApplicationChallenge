import React from "react";
import { AllMovies, SingleMovie, NavBar } from "./index";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <NavBar />
      <Switch>
        <Route
          path="/movies/:movieId"
          render={() => {
            return <SingleMovie />;
          }}
        />
        <Route
          path="/movies"
          render={() => {
            return <AllMovies />;
          }}
        />
        <Redirect to="/movies" />
      </Switch>
    </div>
  );
};

export default Main;

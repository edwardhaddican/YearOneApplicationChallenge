import React from "react";
import { Link } from "react-router-dom";
import {Voting} from "./index"

const Movie = (props) => {
  const { movie } = props;

  return (
    <Link to={`/movies/${movie.imdb_id}`}>
      <div className="movie_container">
        <h5>Title: {movie.title}</h5>
        {movie.year > 0 && <h6>Year: {movie.year}</h6>}
        <Voting />
      </div>
    </Link>
  );
};

export default Movie;

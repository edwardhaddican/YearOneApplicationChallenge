import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Voting } from "./index";

const Movie = (props) => {
  const { movie, setSearchResults, searchResults } = props;

  const setSingleMovie = useCallback(
    (singleMovie) => {
      const currentMovies = searchResults.map((resultMovie) => {
        if (resultMovie.imdb_id === singleMovie.imdb_id) {
          return singleMovie;
        }
        return resultMovie;
      });

      setSearchResults(currentMovies);
    },
    [searchResults, setSearchResults]
  );

  return (
    <div className="movie_container">
      <Link to={`/movies/${movie.imdb_id}`} className="movie_link">
        <div>
          <h4>Title: {movie.title}</h4>
          {movie.year > 0 && <h4>Year: {movie.year}</h4>}
        </div>
      </Link>
      <Voting singleMovie={movie} setSingleMovie={setSingleMovie} />
    </div>
  );
};

export default Movie;

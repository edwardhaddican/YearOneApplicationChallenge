import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Voting } from "./index";

const Movie = (props) => {
  const { movie, setSearchResults, searchResults } = props;

  const setSingleMovie = useCallback(
    (singleMovie) => {
      const currentMovies = searchResults.map((movie) => {
        if (movie.imdb_id === singleMovie.imdb_id) {
          return singleMovie;
        }
        return movie;
      });

      setSearchResults(currentMovies);
    },
    [searchResults]
  );

  return (
    <div className="movie_container">
      <Link to={`/movies/${movie.imdb_id}`}>
        <div>
          <h5>Title: {movie.title}</h5>
          {movie.year > 0 && <h6>Year: {movie.year}</h6>}
        </div>
      </Link>
      <Voting singleMovie={movie} setSingleMovie={setSingleMovie} />
    </div>
  );
};

export default Movie;

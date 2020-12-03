import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Voting, Loader } from "./index";

/**
 * fetch('/api/endpoint/') to access my backend
 */

const SingleMovie = () => {
  const { movieId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const movieData = await axios.get(`/api/movie/${movieId}`);

      setSingleMovie(movieData.data);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  }, [movieId, setLoading, setSingleMovie, setErrorMessage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading || !singleMovie) {
    return <Loader />;
  }

  if (errorMessage) {
    return <p className="error_message">{errorMessage}</p>;
  }

  return (
    <div className="single_movie_container">
      <h2>Title: {singleMovie.title}</h2>
      {singleMovie.directors ? (
        <p>
          <span className="single_movie_label">Director(s):</span>{" "}
          {singleMovie.directors.join(", ")}
        </p>
      ) : (
        <p>
          <span className="single_movie_label">Director(s):</span> No directors
          are listed
        </p>
      )}

      {singleMovie.description ? (
        <p>
          <span className="single_movie_label">Description:</span>{" "}
          {singleMovie.description}
        </p>
      ) : (
        <p>
          <span className="single_movie_label">Description:</span> No
          descriptions is listed
        </p>
      )}

      {singleMovie.year > 0 && (
        <p>
          {" "}
          <span className="single_movie_label">Release Year:</span>{" "}
          {singleMovie.year}
        </p>
      )}

      {singleMovie.genres ? (
        <p>
          <span className="single_movie_label">Genre:</span>{" "}
          {singleMovie.genres.join(", ")}
        </p>
      ) : (
        <p>
          {" "}
          <span className="single_movie_label">Genre:</span>No data listed{" "}
        </p>
      )}

      <Voting singleMovie={singleMovie} setSingleMovie={setSingleMovie} />
    </div>
  );
};

export default SingleMovie;

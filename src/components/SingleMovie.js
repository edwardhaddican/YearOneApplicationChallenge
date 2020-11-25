import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiKey from "../secrets";
import {Voting} from "./index"

/**
 * fetch('/api/endpoint/') to access my backend
 */

const SingleMovie = (props) => {
  const { movieId } = useParams();

  const [singleMovie, setSingleMovie] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const movieData = await axios.get(`/api/movie/${movieId}`);

      setSingleMovie(movieData.data);
    } catch (err) {
      console.log("O no, you have an error", err);
    }
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, []);

  if (!singleMovie) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="single_movie_container">
      <h2>Title: {singleMovie.title}</h2>
      {singleMovie.directors ? (
        <p>Director: {singleMovie.directors}</p>
      ) : (
        <p>Director: No directors are listed</p>
      )}
      <p>Description: {singleMovie.description}</p>

      {singleMovie.year > 0 && <h6>Release Year: {singleMovie.year}</h6>}

      {singleMovie.genres ? (
        <div className="single_movie_item_container">
          <div>Genre:</div>
          {singleMovie.genres.map((element, idx) => {
            return <ul key={`${element} with the Id of: ${idx}`}>{element}</ul>;
          })}
        </div>
      ) : (
        <p>Genre: No data listed </p>
      )}

      <Voting/>

    </div>
  );
};

export default SingleMovie;

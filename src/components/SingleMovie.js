import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import apiKey from '../secrets'

const SingleMovie = (props) => {
  const { movieId } = useParams();

  const [singleMovie, setSingleMovie] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const options = {
        method: "GET",
        url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
        params: { imdb: movieId, type: "get-movie-details" },
        headers: {
          "x-rapidapi-key":
          apiKey,
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        },
      };

      const result = await axios.request(options);
      const resultsData = result.data;

      setSingleMovie(resultsData);
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
    </div>
  );
};

export default SingleMovie;

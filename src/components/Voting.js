import React, { useState } from "react";
import axios from "axios";

const Voting = (props) => {
  const { singleMovie, setSingleMovie } = props;

  const thumbsUpOrDown = async (isUpvote) => {
    const { data } = await axios.put(`/api/movie/${singleMovie.imdb_id}`, {
      isUpvote,
      ...singleMovie
    });

    setSingleMovie(data);
  };

  if (!singleMovie) {
    return null;
  }

  return (
    <div className="voting-main-container">
      <button onClick={() => thumbsUpOrDown(true)}>
        {singleMovie.thumbsUp || 0} &#128077;
      </button>
      <button onClick={() => thumbsUpOrDown(false)}>
        {singleMovie.thumbsDown || 0} &#128078;
      </button>
    </div>
  );
};

export default Voting;

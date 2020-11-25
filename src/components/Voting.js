import React, { useState } from "react";

const Voting = (props) => {
  const [numberOfThumbsUp, setNumberOfThumbsUp] = useState(0);
  const [numberOfThumbsDown, setNumberOfThumbsDown] = useState(0);

  const thumbsUp = () => {};

  const thumbsDown = () => {};

  return (
    <div className="voting-main-container">
      <button onClick={thumbsUp}>{numberOfThumbsUp} &#128077;</button>
      <button onClick={thumbsDown}>{numberOfThumbsDown} &#128078;</button>
    </div>
  );
};

export default Voting;

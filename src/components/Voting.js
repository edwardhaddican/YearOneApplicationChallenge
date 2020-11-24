import React from "react";

const Voting = (props) => {

  const thumbsUp = () => {

  }

  const thumbsDown = () => {

  }

  return(
    <div className='voting-main-container'>
      <button onClick={thumbsUp}>Thumbs Up</button>
      <button onClick={thumbsDown}>Thumbs Down</button>
    </div>
  )
}

export default Voting

import React, { useState, useEffect } from "react";
import { Movie, SearchBar } from "./index";

const AllMovies = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTitleText, setSearchTitleText] = useState("");

  return (
    <div className="allMovies_Main_Container">
      <SearchBar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        searchTitleText={searchTitleText}
        setSearchTitleText={setSearchTitleText}
      />

      <h2>Movie Search Results:</h2>
      <div className="allMovies_Container">
        {searchResults.map((movie, idx) => {
          return (
            <div key={movie.imdb_id} >
              <Movie movie={movie} setSearchResults={setSearchResults}searchResults={searchResults}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllMovies;

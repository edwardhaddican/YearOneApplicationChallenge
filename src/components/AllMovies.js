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


        {searchResults ? searchResults.map((movie, idx) => {
          return (
            <div key={movie.imdb_id} >
              <Movie movie={movie} setSearchResults={setSearchResults}searchResults={searchResults}/>
            </div>
          );
        }): <p>There were no movies with that title</p>}
      </div>
    </div>
  );
};

export default AllMovies;

import React, { useState } from "react";
import { Movie, SearchBar, Loader } from "./index";

const AllMovies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTitleText, setSearchTitleText] = useState("");
  const [loading, setLoading] = useState(false)

  return (
    <div className="allMovies_Main_Container">
      <div>
        <SearchBar
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          searchTitleText={searchTitleText}
          setSearchTitleText={setSearchTitleText}
          setLoading={setLoading}
        />
      </div>
      {loading && <Loader/>}
      {searchResults.length > 0 ? (
        <div className="movie_search_results_container">
          <h2>Movie Search Results:</h2>
          <div className="allMovies_Container">
            {searchResults ? (
              searchResults.map((movie, idx) => {
                return (
                  <div key={movie.imdb_id}>
                    <Movie
                      movie={movie}
                      setSearchResults={setSearchResults}
                      searchResults={searchResults}
                    />
                  </div>
                );
              })
            ) : (
              <p>There were no movies with that title</p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AllMovies;

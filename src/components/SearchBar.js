import React, { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const {
    searchResults,
    setSearchResults,
    searchTitleText,
    setSearchTitleText,
    setLoading,
  } = props;

  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovie = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const results = await axios.get(`/api/movie?search=${searchTitleText}`);

      if (results.data.length === 0) {
        setErrorMessage("No movies matched your search");
      } else {
        setSearchResults(results.data);
        setErrorMessage("");
      }
      setLoading(false);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="searchbar_container">
      <div className="header">
        <h2>Search Movies</h2>
      </div>

      {searchResults && <p className="error_message">{errorMessage}</p>}

      <div className="searchbar_inner_container">
        <form onSubmit={fetchMovie} className="searchbar_inner_container">
          <div>
            <label className="title_label">Title:</label>
            <input
              value={searchTitleText}
              required
              onChange={(event) => {
                setSearchTitleText(event.target.value);
              }}
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

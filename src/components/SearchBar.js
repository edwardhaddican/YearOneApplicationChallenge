import React from "react";
import axios from "axios";
import apiKey from '../secrets'

const SearchBar = (props) => {
  const {
    searchResults,
    setSearchResults,
    searchTitleText,
    setSearchTitleText,
  } = props;

 const fetchMovie = async (event) => {
   event.preventDefault();

   try{
     const results = await axios.get(`/movie?search=${searchTitleText}`)
     console.log('results', results)
    // const searchTitleOptions = {
    //   method: 'GET',
    //   url: 'https://movies-tvshows-data-imdb.p.rapidapi.com/',
    //   params: {title: searchTitleText, type: 'get-movies-by-title'},
    //   headers: {
    //     'x-rapidapi-key': apiKey,
    //     'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com'
    //   }
    // };

    // const results = await axios.request(searchTitleOptions)
    // const resultsData = results.data.movie_results

    setSearchResults(results.data)


   }catch (err){
     console.log(err)
   }
 }

  return (
    <div className="searchbar_container">
      <div className="header">
        <h2 >Movie Title</h2>
      </div>

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

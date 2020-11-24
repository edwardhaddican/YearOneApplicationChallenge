const router = require("express").Router();
const { Movie } = require("../db/models");
const axios = require("axios");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    // const movies = await Movie.findAll();
    // res.json(movies);

    const searchTitle = req.query.search;

    const searchTitleOptions = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { title: searchTitle, type: "get-movies-by-title" },
      headers: {
        "x-rapidapi-key": process.env.API_SECRET,
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    };

    const results = await axios.request(searchTitleOptions);
    const resultsData = results.data.movie_results;

    res.json(resultsData);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const options = {
      method: "GET",
      url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
      params: { imdb: req.params.id, type: "get-movie-details" },
      headers: {
        "x-rapidapi-key": process.env.API_SECRET,
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      },
    };

    const result = await axios.request(options);
    const resultsData = result.data;
    res.json(resultsData);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const movie = await Movie.create({
      movieTitle: req.body.movieTitle,
      thumbsUp: req.body.thumbsUp,
      thumbsDown: req.body.thumbsDown,
    });
    res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    await movie.update(req.body);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

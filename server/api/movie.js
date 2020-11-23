const router = require("express").Router();
const { Movie } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(movie);
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

const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define('movie', {
  movieTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  thumbsUp: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    },
  },
  thumbsDown: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 0
    }
  },
})

module.exports = Movie

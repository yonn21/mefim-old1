const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    genre_name: String,
    genre_description: String,
    genre_movies: Array,
})

module.exports = mongoose.model('Genre', genreSchema)
const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    genre_name: { type: String },
    genre_description: { type: String, },
    genre_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

module.exports = mongoose.model('Genre', genreSchema)
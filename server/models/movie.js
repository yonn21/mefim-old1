const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    primary_title: { type: String },
    secondary_title: { type: String },
    directors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    year: { type: Number },
    country: { type: String },
    duration: { type: String },
    type: { type: String },
    languages: { type: String },
    episodes: { type: Array },
    rating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    trailer: { type: String },
    summary: { type: String },
    thumbnail: { type: String },
    cover_image: { type: String },
})

module.exports = mongoose.model('Movie', movieSchema)
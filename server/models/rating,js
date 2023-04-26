const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    rating_level: Number,
    rating_users: Array,
    rating_movies: Array,
    rating_date: Date,
})

module.exports = mongoose.model('Rating', ratingSchema)
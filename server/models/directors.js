const mongoose = require('mongoose')

const director = new mongoose.Schema({
    director_name: String,
    director_avatar: String,
    director_dateOfBirth: Date,
    director_description: String,
    director_movies: Array,
}, { versionKey: null })

module.exports = mongoose.model('directors', director)
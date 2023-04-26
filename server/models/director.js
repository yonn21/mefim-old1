const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
    director_name: String,
    director_avatar: String,
    director_dateOfBirth: Date,
    director_description: String,
    director_movies: Array,
})

module.exports = mongoose.model('Director', directorSchema)
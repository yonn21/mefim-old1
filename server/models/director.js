const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
    director_name: { type: String },
    director_avatar: { type: String },
    director_birth_date: { type: Date },
    director_description: { type: String },
    director_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

module.exports = mongoose.Model('Director', directorSchema)
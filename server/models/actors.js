const mongoose = require('mongoose')

const actor = new mongoose.Schema({
    actor_name: String,
    actor_avatar: String,
    actor_dateOfBirth: Date,
    actor_description: String,
    actor_movies: Array,
}, { versionKey: null })

module.exports = mongoose.model('actors', actor)
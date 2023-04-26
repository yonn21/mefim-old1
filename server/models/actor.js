const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
    actor_name: String,
    actor_avatar: String,
    actor_dateOfBirth: Date,
    actor_description: String,
    actor_movies: Array,
})

module.exports = mongoose.model('Actor', actorSchema)
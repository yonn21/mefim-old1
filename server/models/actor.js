const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
    actor_name: { type: String },
    actor_avatar: { type: String, },
    actor_dateOfBirth: { type: Date, },
    actor_description: { type: String, },
    actor_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

module.exports = mongoose.model('Actor', actorSchema)
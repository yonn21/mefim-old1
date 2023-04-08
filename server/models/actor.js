const mongoose = require('mongoose')

const actorSchema = mongoose.Schema({
    actor_name: { type: String },
    actor_avatar: { type: String },
    actor_birth_date: { type: Date },
    actor_description: { type: String },
    actor_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

module.exports = mongoose.model('Actor', actorSchema)
const mongoose = require('mongoose')

const yearSchema = mongoose.Schema({
    year: { type: Number },
    year_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

module.exports = mongoose.model('Year', yearSchema)
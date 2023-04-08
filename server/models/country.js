const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
    country: { type: String },
    country_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
})

module.exports = mongoose.model('Country', countrySchema)
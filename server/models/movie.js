const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title1: { type: String, required: true },
    // Các trường khác của bảng "movies"
});

module.exports = mongoose.model('Movie', movieSchema);
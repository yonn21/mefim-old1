const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_userName: { type: String, required: true, unique: true },
    user_password: { type: String, required: true },
    user_displayName: { type: String, required: true },
    user_avatar: { type: String, },
    user_email: { type: String, required: true, unique: true },
    user_phoneNumber: { type: String, required: true, unique: true },
    user_gender: { type: String, required: true },
    user_favoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_followedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_purchasedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_watchedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_rating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_currentBalance: { type: Number },
    user_vipLevel: { type: Number },
    user_vipExpiryDate: { type: Date },
})

module.exports = mongoose.model('User', userSchema)
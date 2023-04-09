const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_username: { type: String, required: true, unique: true },
    user_password: { type: String, required: true },
    user_display_name: { type: String, required: true },
    user_avatar: { type: String, },
    user_email: { type: String, required: true, unique: true },
    user_phone_number: { type: String, required: true, unique: true },
    user_gender: { type: String, required: true },
    user_favorite_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_followed_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_purchased_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_watched_movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_rating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    user_current_balance: { type: Number },
    user_vip_level: { type: String },
    user_vip_expiry_date: { type: Date },
})

module.exports = mongoose.model('User', userSchema)
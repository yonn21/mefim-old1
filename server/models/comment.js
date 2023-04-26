const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment_content: String,
    comment_user: String,
    comment_movie: String,
    comment_date: Date,
})

module.exports = mongoose.model('Comment', commentSchema)
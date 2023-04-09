const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    admin_username: { type: String, required: true, unique: true },
    admin_password: { type: String, required: true },
    admin_avatar: { type: String, },
    admin_email: { type: String, required: true, unique: true },
    admin_phone_number: { type: String, required: true, unique: true },
    admin_level: { type: Number },
})

module.exports = mongoose.model('Admin', adminSchema)
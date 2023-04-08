const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    admin_username: { type: String, required: true, unique: true },
    admin_password: { type: String, required: true },
    admin_avatar: { type: String },
    admin_admin_level: { type: Number, required: true },
    admin_email: { type: String, required: true, unique: true },
    admin_phoneNumber: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('Admin', adminSchema)
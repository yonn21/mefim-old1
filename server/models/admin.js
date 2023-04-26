const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    admin_loginInformation: Object,
    admin_email: String,
    admin_phoneNumber: String,
    admin_avatar: String,
    admin_level: Number,
})

module.exports = mongoose.model('Admin', adminSchema)
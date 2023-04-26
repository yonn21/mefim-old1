const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    loginInformation: Object,
    admin_email: String,
    admin_phoneNumber: String,
    admin_avatar: String,
    admin_level: Number,
}, { versionKey: null })

module.exports = mongoose.model('admin', adminSchema)
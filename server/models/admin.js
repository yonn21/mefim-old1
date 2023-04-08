const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    admin_level: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('admins', admin);
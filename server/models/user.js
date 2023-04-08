const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, },
    coin: { type: Number, default: 0 },
    userType: { type: Array, default: 1 },
    fullName: { type: Object, required: true },
    dateOfBirth: { type: Object, required: true },
    sex: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: false, unique: true },
    listFollow: { type: Array, },
    listFavorite: { type: Array, },
    listBought: { type: Array, }
});

module.exports = mongoose.model('user', user);
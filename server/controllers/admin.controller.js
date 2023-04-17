const adminModel = require('../models/admin')
const actorModel = require('../models/actor');
const movieModel = require('../models/movie');
const directorModel = require('../models/director');
const genreModel = require('../models/genre');
const userModel = require('../models/user');

class AdminController {
    async getLoginPage(req, res, next) {
        try {
            res.render("login", { message: req.flash("error") });
        } catch (error) {
            next(error);
        }
    }

    async getDashboardPage(req, res, next) {

    }

    async getMovieManagerAtPage(req, res, next) {

    }
}

module.exports = new AdminController()
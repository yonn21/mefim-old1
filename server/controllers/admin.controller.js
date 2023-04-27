const path = require('path')
const view_path = path.join(__dirname, '../views')

const actors = require('../models/actors')
const admins = require('../models/admins')
const comments = require('../models/comments')
const directors = require('../models/directors')
const genres = require('../models/genres')
const movies = require('../models/movies')
const ratings = require('../models/ratings')
const users = require('../models/users')

class AdminController {

    getLoginPage(req, res, next) {
        res.render(path.join(view_path, 'dang-nhap'), { message: req.flash('error') })
    }

    getLogout(req, res, next) {
        req.logout()
        res.redirect('/admin/dang-nhap')
    }

    getDashboardPage(req, res, next) {
        if (req.isAuthenticated()) {
            movies.find({}, (err, movieResult) => {
                admins.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        res.render(path.join(view_path, 'tong-quan'), {
                            message: req.flash('success'),
                            admin: adminResult,
                            movies: movieResult,
                        })
                    }
                )
            })
        } else {
            res.redirect('/admin/dang-nhap')
        }
    }

    getMovieManagerPage(req, res, next) {
        if (req.isAuthenticated()) {
            var numberItemPerPage = 12;
            movies.find({}, (err, movieResult) => {
                admins.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        directors.find({}, (err, directorResult) => {
                            actors.find({}, (err, actorResult) => {
                                genres.find({}, (err, genreResult) => {
                                    ratings.find({}, (err, ratingResult) => {
                                        comments.find({}, (err, commentResult) => {
                                            res.render("quan-ly-phim", {
                                                message: req.flash("success"),
                                                page: 1,
                                                numberItemPerPage: numberItemPerPage,
                                                admin: adminResult,
                                                movies: movieResult,
                                                directors: directorResult,
                                                actors: actorResult,
                                                genres: genreResult,
                                                ratings: ratingResult,
                                                comments: commentResult,
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                )
            })
        } else {
            res.redirect("/admin/login");
        }
    }

    getMovieManagerAtPage(req, res, next) {
        if (req.isAuthenticated()) {
            var numberItemPerPage = 12
            var page = req.params.page
            movies.find({}, (err, movieResult) => {
                admins.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        directors.find({}, (err, directorResult) => {
                            actors.find({}, (err, actorResult) => {
                                genres.find({}, (err, genreResult) => {
                                    ratings.find({}, (err, ratingResult) => {
                                        comments.find({}, (err, commentResult) => {
                                            res.render("quan-ly-phim", {
                                                message: req.flash("success"),
                                                page: page,
                                                numberItemPerPage: numberItemPerPage,
                                                admin: adminResult,
                                                movies: movieResult,
                                                directors: directorResult,
                                                actors: actorResult,
                                                genres: genreResult,
                                                ratings: ratingResult,
                                                comments: commentResult,
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                )
            })
        } else {
            res.redirect('/admin/dang-nhap')
        }
    }
}

module.exports = new AdminController()
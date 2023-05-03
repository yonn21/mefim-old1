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

    // Movie manager
    getMovieManagerPage(req, res, next) {
        if (req.isAuthenticated()) {
            var numberItemPerPage = 12
            movies.find({}, (err, movieResult) => {
                admins.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        directors.find({}, (err, directorResult) => {
                            actors.find({}, (err, actorResult) => {
                                genres.find({}, (err, genreResult) => {
                                    ratings.find({}, (err, ratingResult) => {
                                        comments.find({}, (err, commentResult) => {
                                            res.render('quan-ly-phim', {
                                                message: req.flash('success'),
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
            res.redirect('/admin/dang-nhap')
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
                                            res.render('quan-ly-phim', {
                                                message: req.flash('success'),
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

    // Director manager
    getDirectorManagerPage(req, res, next) {
        if (req.isAuthenticated()) {
            var numberItemPerPage = 12
            directors.find({}, (err, directorResult) => {
                admins.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        movies.find({}, (err, movieResult) => {
                            res.render(path.join(view_path, 'quan-ly-dao-dien'), {
                                message: req.flash('success'),
                                page: 1,
                                numberItemPerPage: numberItemPerPage,
                                admin: adminResult,
                                movies: movieResult,
                                directors: directorResult,
                            })
                        })
                    }
                )
            })
        } else {
            res.redirect('/admin/dang-nhap')
        }
    }

    getDirectorManagerAtPage(req, res, next) {
        if (req.isAuthenticated()) {
            var numberItemPerPage = 12
            var page = req.params.page
            directors.find({}, (err, directorResult) => {
                admins.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        movies.find({}, (err, movieResult) => {
                            res.render('quan-ly-dao-dien', {
                                message: req.flash('success'),
                                page: page,
                                numberItemPerPage: numberItemPerPage,
                                admin: adminResult,
                                movies: movieResult,
                                directors: directorResult,
                            })
                        })
                    }
                )
            })
        } else {
            res.redirect('/admin/dang-nhap')
        }
    }

    getAddDirectorPage(req, res, next) {
        if (req.isAuthenticated()) {
            admin.findOne({ 'loginInformation.username': req.session.passport.user.username }, (err, adminResult) => {
                res.render('add-categories', { customer: adminResult })
            })
        } else {
            res.redirect('/admin/login')
        }
    }

    postAddDirector(req, res, next) {
        if (req.isAuthenticated()) {
            var data = {
                'typeName': req.body.name,
                'thumbnail': `/${req.file.path}`,
                'status': true
            }
            var newCategories = new type(data)
            newCategories.save()
                .then(() => {
                    req.flash('success', 'Thêm danh mục thành công!')
                    res.redirect('/admin/dashboard/categories-manager/')
                })
                .catch((err) => {
                    console.log(err)
                    req.flash('error', 'Thêm danh mục không thành công! Có lỗi xảy ra!')
                })
        } else {
            res.redirect('/admin/login')
        }
    }
    getUpdateDirectorPage(req, res, next) {
        if (req.isAuthenticated()) {
            var id = req.params.id
            type.findOne({ _id: id }, (err, typeResult) => {
                admin.findOne({ 'loginInformation.username': req.session.passport.user.username }, (err, adminResult) => {
                    res.render('update-categories', { type: typeResult, customer: adminResult })
                })
            })
        } else {
            res.redirect('/admin/login')
        }
    }
    postUpdateDirectorPage(req, res, next) {
        if (req.isAuthenticated()) {
            var id = req.params.id
            type.findOne({ _id: id }, (err, typeResult) => {
                var data = {
                    typeName: req.body.name,
                    thumbnail: req.file ? `/${req.file.path}` : typeResult.thumbnail
                }
                type
                    .findOneAndUpdate({ _id: id }, data, { new: true })
                    .then(() => {
                        req.flash('success', 'Cập nhật thông tin danh mục thành công!')
                        res.redirect('/admin/dashboard/categories-manager')
                    })
                    .catch((err) => {
                        req.flash(
                            'error',
                            'Cập nhật thông tin danh mục không thành công! Có lỗi xảy ra!'
                        )
                        next()
                    })
            })
        } else {
            res.redirect('/admin/login')
        }
    }
    getDeleteDirectorInfo(req, res, next) {
        if (req.isAuthenticated()) {
            var id = req.params.id
            type.findOneAndRemove({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err)
                    req.flash('error', 'Xóa danh mục không thành công! Có lỗi xảy ra!')
                    next()
                }
                req.flash('success', 'Xóa danh mục thành công!')
                res.redirect('/admin/dashboard/categories-manager')
            })
        } else {
            res.redirect('/admin/login')
        }
    }
}

module.exports = new AdminController()
const path = require('path')
const adminModel = require('../models/admin')
const movieModel = require('../models/movie')

class AdminController {

    getLoginPage(req, res, next) {
        res.render(path.join(__dirname, '../views/login'), { message: req.flash('error') })
    }

    getDashboardPage(req, res, next) {
        if (req.isAuthenticated()) {
            movieModel.find({}, (err, movieResult) => {
                adminModel.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        res.render(path.join(__dirname, '../views/dashboard'), {
                            message: req.flash('success'),
                            admin: adminResult,
                            movies: movieResult,
                        })
                    }
                )
            })
        } else {
            res.redirect('/admin/login')
        }
    }

    getMovieManagerAtPage(req, res, next) {

    }
}

module.exports = new AdminController()
const adminModel = require('../models/admin')
const movieModel = require('../models/movie')

class AdminController {

    getLoginPage(req, res, next) {
        res.render('login', { message: req.flash('error') })
    }

    getDashboardPage(req, res, next) {
        if (req.isAuthenticated()) {
            movieModel.find({}, (err, movieResult) => {
                adminModel.findOne(
                    { 'admin_loginInformation.admin_username': req.session.passport.admin.admin_username },
                    (err, adminResult) => {
                        res.render('dashboard', {
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
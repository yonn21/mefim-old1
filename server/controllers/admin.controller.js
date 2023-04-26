const actor = require('../models/actors')
const admin = require('../models/admins')
const comment = require('../models/comments')
const director = require('../models/directors')
const genre = require('../models/genres')
const movie = require('../models/movies')
const rating = require('../models/ratings')
const user = require('../models/users')

class AdminController {

    getLoginPage(req, res, next) {
        res.render('login', { message: req.flash('error') })
    }

    getLogout(req, res, next) {
        req.logout();
        res.redirect('/admin/login');
    }

    getDashboardPage(req, res, next) {
        if (req.isAuthenticated()) {
            movie.find({}, (err, movieResult) => {
                admin.findOne(
                    { 'loginInformation.userName': req.session.passport.user.username },
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
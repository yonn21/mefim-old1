const path = require('path')
const view_path = path.join(__dirname, '../views')

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
        res.render(path.join(view_path, 'login'), { message: req.flash('error') })
    }

    getLogout(req, res, next) {
        req.logout();
        res.redirect('/admin/login');
    }

    getDashboardPage(req, res, next) {
        if (req.isAuthenticated()) {
            movie.find({}, (err, movieResult) => {
                admin.findOne(
                    { 'loginInformation.username': req.session.passport.user.username },
                    (err, adminResult) => {
                        res.render(path.join(view_path, 'dashboard'), {
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
        if (req.isAuthenticated()) {
            var numberItemPerpage = 12;
            var page = req.params.page;
            product.find({}, (err, productResult) => {
                admin.findOne(
                    { "loginInformation.userName": req.session.passport.user.username },
                    (err, resultCustomer) => {
                        supplier.find({}, (err, supplierResult) => {
                            type.find({}, (err, typeResult) => {
                                res.render("products-manager", {
                                    products: productResult,
                                    customer: resultCustomer,
                                    types: typeResult,
                                    suppliers: supplierResult,
                                    message: req.flash("success"),
                                    page: page,
                                    numberItemPerpage: numberItemPerpage,
                                });
                            });
                        });
                    }
                );
            });
        } else {
            res.redirect("/admin/login");
        }
    }
}

module.exports = new AdminController()
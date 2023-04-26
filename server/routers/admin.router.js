const express = require('express')
const passport = require('passport')
const adminRouter = express.Router()
const adminController = require('../controllers/admin.controller')

// Login, GET Dashboard, Pagination

adminRouter.get('/login', adminController.getLoginPage)
adminRouter.post('/login', passport.authenticate('admin-local', {
    failureRedirect: '/admin/login',
    successFlash: true,
    failureFlash: true
}), adminController.getDashboardPage)

adminRouter.get('/dashboard', adminController.getDashboardPage)


// Logout
// adminRouter.get('/dashboard/logout', getLogout)

module.exports = adminRouter
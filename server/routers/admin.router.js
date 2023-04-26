const express = require('express')
const passport = require('passport')
const router = express.Router()
const multer = require('multer')
const mkdirp = require('mkdirp')
const adminController = require('../controllers/admin.controller')

// Login
router.get('/login', adminController.getLoginPage)
router.post('/login', passport.authenticate('admin-local', {
    failureRedirect: '/admin/login',
    successFlash: true,
    failureFlash: true
}), adminController.getDashboardPage)

// Logout
router.get('/dashboard/logout', adminController.getLogout)

// GET Dashboard, Pagination
router.get('/dashboard', adminController.getDashboardPage)
//router.get('/dashboard/products-manager/', adminController.getProductManagerPage)
//router.get('/dashboard/products-manager/:page', adminController.getProductManagerAtPage)

module.exports = router
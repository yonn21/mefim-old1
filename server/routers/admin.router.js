const express = require('express')
const passport = require('passport')
const router = express.Router()
const multer = require('multer')
const mkdirp = require('mkdirp')
const adminController = require('../controllers/admin.controller')

// Login
router.get('/dang-nhap', adminController.getLoginPage)
router.post('/dang-nhap', passport.authenticate('admin-local', {
    failureRedirect: '/admin/dang-nhap',
    successFlash: true,
    failureFlash: true
}), adminController.getDashboardPage)

// Logout
router.get('/tong-quan/dang-xuat', adminController.getLogout)

// Dashboard
router.get('/tong-quan', adminController.getDashboardPage)

// Movie manager
router.get('/quan-ly-phim/trang-1', adminController.getMovieManagerPage);
router.get('/quan-ly-phim/trang-:page', adminController.getMovieManagerAtPage);

module.exports = router
const express = require('express')
const passport = require('passport')
const router = express.Router()
const multer = require('multer')
const mkdirp = require('mkdirp')
const adminController = require('../controllers/admin.controller')

const made = mkdirp.sync(`/uploads`);
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./uploads`)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const uploadSingle = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') {
            cb(null, true)
        } else {
            cb('File type is not allowed', false)
        };
    },
    limits: { fieldSize: 1024 * 5 }
});

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
// router.get('/quan-ly-phim/trang-1', adminController.getMovieManagerPage);
// router.get('/quan-ly-phim/trang-:page', adminController.getMovieManagerAtPage);

// Director manager
router.get('/quan-ly-dao-dien/', adminController.getDirectorManagerPage);
router.get('/quan-ly-dao-dien/trang-:page', adminController.getDirectorManagerAtPage);
router.post('/quan-ly-dao-dien/them-dao-dien', uploadSingle.single('avatar'), adminController.postAddDirector);
router.get('/quan-ly-dao-dien/them-dao-dien', adminController.getAddDirectorPage);
router.post('/quan-ly-dao-dien/chinh-sua-dao-dien/:id', uploadSingle.single('avatar'), adminController.postUpdateDirectorPage);
router.get('/quan-ly-dao-dien/chinh-sua-dao-dien/:id', adminController.getUpdateDirectorPage);
router.get('/quan-ly-dao-dien/xoa-dao-dien/:id', adminController.getDeleteDirectorInfo);

module.exports = router
const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller')

router.get('/login', adminController.getLoginPage)
router.get('/dashboard/:adminId', adminController.getDashboardPage)

module.exports = router
const express = require('express')
const app = express()

// Passport config
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const adminModel = require('./models/admin')
const userModel = require('./models/user')

app.use(
    session({
        secret: 'abcdefgh0912mefim873465zxc',
        saveUninitialized: true,
        resave: false,
        cookie: { maxAge: Infinity, path: '/admin' }
    })
)
app.use(
    session({
        secret: 'abcdefgh0912873465zxc',
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: Infinity,
            path: '/'
        }
    }))

app.use(flash())

passport.use(
    'admin-local',
    new LocalStrategy(function (admin_username, admin_password, done) {
        adminModel.findOne(
            { 'admin_loginInformation.admin_username': admin_username },
            function (err, admin) {
                if (err) {
                    return done(err)
                }
                if (!admin) {
                    return done(null, false, { message: 'Sai tên đăng nhập hoặc mật khẩu' })
                }
                if (admin.admin_loginInformation.admin_password !== admin_password) {
                    return done(null, false, { message: 'Sai tên tài khoản hoặc mật khẩu!' });
                }
                return done(null, admin, { message: 'Đăng nhập thành công!' });
            }
        )
    })
)



const path = require('path')

// Route config

const PORT = 6969
app.listen(PORT, () => {
    console.log(`Server is started at: http://localhost:${PORT}`)
})
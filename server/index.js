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
    new LocalStrategy(function (userName, password, done) {
        adminModel.findOne(
            { 'admin_userName': userName },
            function (err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, { message: 'Tài khoản này không tồn tại' })
                }
                if (user.admin_pass)
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
const express = require('express')
const app = express()
const path = require('path')

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

// passport.use(
//     'admin-local',
//     new LocalStrategy(function (admin_username, admin_password, done) {
//         adminModel.findOne(
//             { 'admin_loginInformation.admin_username': admin_username },
//             function (err, admin) {
//                 if (err) {
//                     return done(err)
//                 }
//                 if (!admin) {
//                     return done(null, false, { message: 'Sai tên đăng nhập hoặc mật khẩu' })
//                 }
//                 if (admin.admin_loginInformation.admin_password !== admin_password) {
//                     return done(null, false, { message: 'Sai tên tài khoản hoặc mật khẩu!' })
//                 }
//                 return done(null, admin, { message: 'Đăng nhập thành công!' })
//             }
//         )
//     })
// )
passport.use(
    'admin-local',
    new LocalStrategy(function (username, password, done) {
        adminModel.findOne(
            { 'loginInformation.username': username },
            function (err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, { message: 'Không tìm thấy tài khoản!' })
                }
                if (user.loginInformation.password !== password) {
                    return done(null, false, { message: 'Sai tên tài khoản hoặc mật khẩu!' })
                }
                return done(null, user, { message: 'Đăng nhập thành công!' })
            }
        )
    })
)
passport.use(
    'user-local',
    new LocalStrategy(function (username, password, done) {
        customer.findOne(
            { 'loginInformation.userName': username },
            function (err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, { message: 'Không tìm thấy tài khoản!' })
                }
                if (user.loginInformation.password !== password) {
                    return done(null, false, { message: 'Sai tên tài khoản hoặc mật khẩu!' })
                }
                return done(null, user, { message: 'Đăng nhập thành công!' })
            }
        )
    })
)


app.use(passport.initialize())
app.use(passport.session())

// passport.serializeUser((admin, done) => {
//     return done(null, { admin_username: admin.admin_loginInformation.admin_username })
// })
// passport.deserializeUser((admin, done) => {
//     adminModel.findOne({ 'admin_loginInformation.admin_username': admin.username }, (err, result) => {
//         if (err) return done(err)
//         if (!result) return done(null, false)
//         if (result.admin_loginInformation.admin_username == admin.username) {
//             return done(null, result)
//         }
//     })
// })

passport.serializeUser((user, done) => {
    return done(null, { username: user.loginInformation.username, type: user.loginInformation.type })
})
passport.deserializeUser((user, done) => {
    if (user.type == 'admin') {
        adminModel.findOne({ 'loginInformation.userName': user.username }, (err, result) => {
            if (err) return done(err)
            if (!result) return done(null, false)
            if (result.loginInformation.userName == user.username) {
                return done(null, result)
            }
        })
    } else {
        customer.findOne({ 'loginInformation.userName': user.username }, (err, result) => {
            if (err) return done(err)
            if (!result) return done(null, false)
            if (result.loginInformation.userName == user.username) {
                return done(null, result)
            }
        })
    }
})

// Mongoose Connect
mongoose
    .connect('mongodb://127.0.0.1/mefim', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected!')
    })
    .catch((err) => {
        console.log(err)
    })
mongoose.set('useFindAndModify', false)
mongoose.connection.on('error', (err) => {
    console.log(err)
})


app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ extended: true, limit: '30mb' }))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/')))

// Route config
const admin = require('./routers/admin.router');
app.use('/admin', admin)

const PORT = 6969
app.listen(PORT, () => {
    console.log(`Server is started at: http://localhost:${PORT}`)
})
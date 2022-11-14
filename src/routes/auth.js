// -----------Back-end---------//
const express = require('express')
const router = express.Router()
const passport = require('passport')

// -----------Controller---------//
const AuthController = require('../controllers/authController')

// -----------Middleware---------//
const { ensureAuth, ensureGuest, isAuth } = require('../middlewares/auth')

// -----------Router---------//

router.get('/', AuthController.index)

router.post(
    '/register', 
    AuthController.register
)

router.post(
    '/admin-register', 
    AuthController.adminRegister
)

router.post('/login', AuthController.login)

router.get(
    '/profile', 
    passport.authenticate('jwt', { session: false }), 
    AuthController.profile
)

router.put(
    '/update/:id', 
    passport.authenticate('jwt', { session: false }), 
    AuthController.update
)

router.delete(
    '/delete', 
    passport.authenticate('jwt', { session: false }), 
    AuthController.destroy
)


module.exports = router
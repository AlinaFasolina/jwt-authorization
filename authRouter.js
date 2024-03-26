const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', "Username cannot be empty").notEmpty(),
    check('password', "The password must be more than 5 and less than 10 characters").isLength({min:5, max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router
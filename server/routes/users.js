const router = require('express').Router()

// user controller methods import 
const user_controller = require('../controllers/users')

// endpoints fot users
router.get('', user_controller.get_all_users)
router.post('', user_controller.add_users)

module.exports = router

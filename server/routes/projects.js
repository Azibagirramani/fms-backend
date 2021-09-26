const router = require('express').Router()

// user controller methods import 
const project_controller = require('../controllers/projects')

// endpoints fot users
router.get('', project_controller.get_projects)
router.post('', project_controller.add_project)

module.exports = router

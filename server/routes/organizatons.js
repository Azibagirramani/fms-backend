const router = require('express').Router()

// user controller methods import 
const organization_controller = require('../controllers/organizations')

// endpoints fot users
router.post('', organization_controller.add_organization)

router.get('', organization_controller.get_all_org)
router.get('/:id', organization_controller.get_by_id)


router.patch('/:id', organization_controller.update)


router.delete('/:id', organization_controller.remove_by_id)


module.exports = router

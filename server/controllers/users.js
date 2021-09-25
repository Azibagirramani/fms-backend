const Users = require('../modals/users')

exports.get_all_users = async function(req, res) {
   const users = await Users.findAll()
   res.json(users)
}

exports.add_users = async function(req, res) {
    const user = {
        email: 'demo@viy'
    }

    const created = await Users.create(user)
    res.json(created)
}
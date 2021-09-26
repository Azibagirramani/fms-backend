const Users = require('../modals/users')

exports.get_all_users = async function(req, res) {
    let payload = { users: null, errors: null }
    const users = await Users.findAll()
    payload.users = users
    res.json(payload)
}

exports.add_users = async function(req, res) {
    const user = {
        email: 'demo@viy'
    }

    const created = await Users.create(user)
    
    res.json(created)
}
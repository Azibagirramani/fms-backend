const Project = require('../modals/projects')

exports.get_projects = async function(req, res) {
   res.json(await Project.findAll())
}

exports.add_project = async function(req, res) {
   const response = {}
   let { body } = req

   const created = await Project.create(body)

   res.json(created)
}
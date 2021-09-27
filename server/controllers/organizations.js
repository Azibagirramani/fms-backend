// modal import
const Organisations = require("../modals/organizations")

/**
 * Organization controller
 * * methods for handling organizations functionality
 * @readonly 
 * @returns
 */


/**
 * add organizations
 * * Add new organizations to database
 * @param {*} req 
 * @param {*} res
 * @readonly no
 * @requires 
 * @function
 * @returns { object:{ organization } } 
 */

exports.add_organization = async function(req, res){
    const { body } = req
    const response = {}
    const created = await Organisations.create(body)
    if(!created){
        res.json("unable to create organizations")
    }

    response.msg = "Organization Added"
    res.json(response)
}

/**
 * get all organizations
 * * returns an array of listed organizations
 * @param {*} req 
 * @param {*} res 
 * @function
 */
exports.get_all_org = async function(req, res){

    const response = { error: null, data: null }

    const orgs = await Organisations.findAll()

    response.data = orgs

    res.json(response)

}


/**
 * get all organization by Id
 * * return organization by id 
 * @param {*} req 
 * @param {*} res
 * @requires organization id
 * @function
 */
exports.get_by_id = async function (req, res){
    const { id } = req.params
    const response = {}
    const org = await Organisations.findByPk(id)

    if (org === null){
        response.msg = "Organization not found"     
        res.json(response)
        return
    } 

    response.data = org

    res.json(response)
}

/**
 * remove by id
 * * return string message
 * @param {*} req 
 * @param {*} res 
 * @requires organization id
 * @returns void
 * @function
 */
exports.remove_by_id = async function(req, res){
    const response = {}
    const { id } = req.params
    const status = await Organisations.destroy({ where: { id: id} })
    if(!status){
        response.msg = "No organization with this ID found"
        res.json(response)
    }

    response.msg = "Organization removed"
    res.json(response)
}

/**
 * update
 * * update organizations
 * @param {*} req 
 * @param {*} res 
 * @return { object }
 * @requires { organization, id }
 */
exports.update = async function(req, res){
    const { id } = req.params
    const { body } = req

    // const patch_org = Organisations.
    res.json(body)
}  
const { DataTypes } = require("sequelize");
const connection = require("../configurations/database");

const Users = connection.define('users',{
  email:{
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
})

module.exports = Users
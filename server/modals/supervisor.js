const { DataTypes, Model } = require("sequelize");
const connection = require("../configurations/database");
const Projects = require("./projects")
class Supervisor extends Model {}

Supervisor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    position: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    modelName: "supervisors",
    timestamps: true,
  }
);


// Supervisor.sync({ force: true, alter: true })

// Supervisor.hasMany(Projects)

module.exports = Supervisor
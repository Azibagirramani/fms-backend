const { DataTypes, Model } = require("sequelize");
const connection = require("../configurations/database");
const Supervisors = require("./supervisor")

class Organisations extends Model {}

Projects.init(
  {
    org_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    logo:{
        type: DataTypes.STRING,
    },
    employee_number:{
        type: DataTypes.NUMBER,
    }
  },
  {
    sequelize: connection,
    modelName: "organisations",
    timestamps: true,
  }
);

// update or create table if not exist
Organisations.sync({ force: true, alter: true })

// relationships
Organisations.hasMany(Supervisors)

module.exports = Organisations
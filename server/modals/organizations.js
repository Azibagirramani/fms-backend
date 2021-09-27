const { DataTypes, Model, Sequelize } = require("sequelize");
const connection = require("../configurations/database");

class Organisations extends Model {}

Organisations.init(
  {
    org_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    address:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    number_of_employee: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    modelName: "organisations",
    timestamps: true,
  }
);

// update or create table if not exist
Organisations.sync({ alter: true });

// relationships
// Organisations.hasMany(Supervisors)

module.exports = Organisations;


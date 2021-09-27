const { DataTypes, Model } = require("sequelize");
const connection = require("../configurations/database");

class Projects extends Model {}

Projects.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    purpose: {
      type: DataTypes.STRING,
    },
    supervisor_id:{
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize: connection,
    modelName: "projects",
    timestamps: true,
    createdAt: "requested_at",
  }
);


// Projects.sync({ force: true, alter: true })

module.exports = Projects
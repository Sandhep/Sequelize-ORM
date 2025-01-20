// models/index.js
import { Sequelize, DataTypes } from "sequelize";
import UserModel from "./User.js";
import EmployeeModel from "./Employee.js";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: console.log,
  }
);

// Initialize models
const db = {
  User: UserModel(sequelize, DataTypes),
  Employee: EmployeeModel(sequelize, DataTypes),
  sequelize,
  Sequelize,
};

export default db;

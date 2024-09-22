const test = require("dotenv").config();
// console.log("test: ", test);
const Sequelize = require("sequelize");
// console.log("DB_USER", process.env.DB_USER);
// console.log("DB_PASSWORD", process.env.DB_PASSWORD);
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        port: 5432,
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;

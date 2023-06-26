require("dotenv").config();

module.exports = {
  app: {
    port: process.env.PORT,
  },
  mysql: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
  },
};

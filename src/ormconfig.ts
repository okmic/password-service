import dotenv from "dotenv"
dotenv.config()

export default {
    "type": "mysql",
    "port": 3306,
    "host": process.env.MYSQL_HOST,
    "username": process.env.MYSQL_LOGIN,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": ["src/entity/**/*.ts"]
  }
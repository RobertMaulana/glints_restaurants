require('dotenv').config()

const config = {
  database: 'db_restaurants',
  username: 'root',
  password: 'root@123',
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  define: {
    underscored: false
  }
}
module.exports = config

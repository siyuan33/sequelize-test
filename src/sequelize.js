const Sequelize = require('Sequelize');

const sequelizeConfig = {
  host: "localhost",
  dialect: "mysql"
}
const sequelize = new Sequelize(`koa2_weibo`, "root", "1338263065", sequelizeConfig) // 建立实例去连接数据库

module.exports = sequelize

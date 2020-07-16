// 将表同步到数据库

const sequelize = require('./sequelize.js');

require("./model.js")

// 测试下连接
sequelize.authenticate().then(() => {   // 验证登录的函数 返回 Promise
  console.log("link mysql ok ")
}).catch(() => {
  console.log("link mysql err")
})

// 强制执行同步  返回一个 Promise
sequelize.sync({ force: true }).then(() => {
  console.log("sync ok") 
  process.exit()  // 终止程序
}).catch(() => { console.log("sync failed") })
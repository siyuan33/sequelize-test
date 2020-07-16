const Sequelize = require('Sequelize');
const sequelize = require('./sequelize.js');

// 创建 user 模型
const User = sequelize.define("user", {  // 会建立 表名为 users 的表 
  //  id 会自动创建为主键 并且自动递增 不需要定义 id 
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickName: {
    type: Sequelize.STRING,
    comment: "昵称",
  },

  // 会自动创建 createAt 和 updateAt
})

const Blog = sequelize.define("blog", {  // 会建立 表名为 users 的表 
  //  id 会自动创建为主键 并且自动递增 不需要定义 id 
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  // 会自动创建 createAt 和 updateAt
})


// 设置外键关联   多对一关系  多个 Blog  对应一个 id   默认关联id
Blog.belongsTo(User, {
  foreignKey: "userId"
})


//  或者可以这么写   写成  一对多 外键
User.hasMany(Blog, {
  foreignKey: "userId"
})


// 创建 blog 模型
module.exports = { User, Blog }
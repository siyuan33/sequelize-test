// 增
// 按照模型 创建数据
const { User, Blog } = require("./model.js")


!(async () => {
  const zhangsan = await User.create({
    userName: "张三",
    password: "123",
    nickName: "zs"
  })

  console.log(zhangsan.dataValues)  // 打印该数据记录
  const zhangsanId = zhangsan.dataValues.id

  const lisi = await User.create({
    userName: "李四",
    password: "123",
    nickName: "ls"
  })
  const LisiId = Lisi.dataValues.id


  const blog1 = await User.create({
    title: "title1",
    content: "content1",
    userId: zhangsanId
  })
  const blog2 = await User.create({
    title: "title2",
    content: "content2",
    userId: zhangsanId
  })
  const blog3 = await User.create({
    title: "title3",
    content: "content3",
    userId: LisiId
  })
  const blo43 = await User.create({
    title: "title4",
    content: "content4",
    userId: LisiId
  })
})()

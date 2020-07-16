// 查询

const { User, Blogs, Blog } = require('./model.js');

!(
  async () => {
    const zhangsan = await User.findOne({
      where: {
        userName: "张三"
      }
    })
    // console.log(zhangsan.dataValues, "zhangsan")

    const zhangsanName = await User.findOne({
      attributes: ["userName", "nickName"],
      where: {
        userName: "张三"
      }
    })
    // console.log(zhangsanName.dataValues, "zhangsan")   // attributes 来过滤查询出来的结果
    const zhangsanBlogList = await Blog.findAll({
      where: {
        userId: 2
      },
      order: [
        ["id", "desc"]
      ]
    })
    // console.log(zhangsanBlogList.map(blog => blog.dataValues), "zhangsanBlogList")

    // 查询分页
    const blogPageList = await Blog.findAll({
      limit: 2,
      offset: 2,
      order: [
        ["id", "desc"]
      ]
    })
    // console.log(blogPageList.map(blog => blog.dataValues), "blogPageList")

    // 查询总数 也可以返回分页
    const blogListTotalCount = await Blog.findAndCountAll({
      limit: 2,
      offset: 0,
      order: [
        ["id", "desc"]
      ]
    })
    // console.log(blogListTotalCount.count, "blogListTotalCount", blogListTotalCount.rows.map(blog => blog.dataValues))

    // 连表查询1    依赖于 model 里面的外链 foreignKey  userId
    const blogListWithUser = await Blog.findAndCountAll({
      order: [
        ["id", "desc"]
      ],
      include: [    // 连表查询 连User里面与 userId 相关联的数据也查出来
        {
          model: User,
          attributes: ["userName", "nickName", "id"],
          where: {
            userName: "张三"
          }
        }
      ]
    })
    // console.log(blogListWithUser.rows.map(blog => blog.dataValues), "blogListWithUser")

    // 连表查询2 通过 User 查询 Blog  对应了 model 里面的 User.hasMany
    const userListWithBlogs = await User.findAndCountAll({
      attributes: ["userName", "nickName"],
      include: [
        {
          model: Blog
        }
      ]
    })
    console.log(userListWithBlogs.rows.map(user => {
      return user.dataValues.blogs
    }), "userListWithBlogs")


  }
)()
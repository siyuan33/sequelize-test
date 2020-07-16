//  修改
const { User, Blog } = require('./model.js');

!(async () => {
  const updateResponse = await User.update({
    nickName: "zs2"
  }, {
    where: {
      userName: "张三"
    }
  })
  console.log(`update-${updateResponse[0] > 0 ? "success" : "failed"}`, "updateResponse")









})()
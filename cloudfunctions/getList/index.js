// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'test-pj6ub'
})

// 云函数入口函数
exports.main = async (event, context) => {
 return cloud.database().collection("daolun").get({
   success(res){
return res
   },
   fail(err){
     return res
   }
 })
  
}
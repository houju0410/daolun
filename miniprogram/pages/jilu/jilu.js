const DB=wx.cloud.database().collection("daolun")

let jilu= ""
let louceng=""
Page({

  shuru(res) {
  jilu=res.detail.value
  },

  shuru1(event) {
  louceng=event.detail.value
  },



addData(){
  let that=this
DB.add({
data:{
jilu:jilu,
louceng:louceng
},
success(res){
  console.log("添加成功",res)
that.tishi()
},
fail(res){
  console.log("添加失败", res)
}
})

},







tishi(){
wx.showToast({
  title: '操作成功',
  duration:2000
})

}



  })




 







  

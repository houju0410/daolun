
Page({

  getData() {
    let that = this
   wx.cloud.callFunction({
name:"getList",
      success(res) {
        console.log("查询成功", res)
        that.setData({
          datalist: res.result.data,
        })
      },
      fail(err){
        console.log("失败",err)
      }
    })
  },

  

  data: {
   
    datalist: []
  },

})
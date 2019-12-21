// pages/suiji/suiji.js
Page({

  data:{
    i:"" ,
    list: [
      {
        id: 0,
        name: "学一"
      },
      {
        id: 1,
        name: "学二"
      },
      {
        id: 2,
        name: "学三"
      },

      {
        id: 3,
        name: "学四"
      },

      {
        id: 4,
        name: "学五"
      },

      {
        id: 5,
        name: "教一"
      },

      {
        id: 6,
        name: "教二"
      }
      ,
      {
        id: 7,
        name: "教三"
      },
      {
        id: 8,
        name: "教四"
      }
      ,
      {
        id: 9,
        name: "教五"
      }
    ],
  },
  

  suiji(){
    this.setData({
      i: Math.floor(Math.random() * 10)
    })
   console.log("haha") 
  },


  
})
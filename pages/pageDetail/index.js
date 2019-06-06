const app = getApp()
const WxParse = require('../../wxParse/wxParse.js')
Page({
  data: {
    pageDetail: '',
    tittleColor:'blue',
    mainColor:[
      'blue','yellow','green'
    ]
      },
  productColor:function(){
      let str="#"
      let HexArr=['5','6','7','8','9','A','B','C','D','E']
      for(let i=0,j=6;i<j;i++){
        str+=HexArr[Math.floor(Math.random() * 99) % 9]
      }
      return str;
  },
  onLoad:function(){
    let tpl = app.globalData.pageContent.content
    WxParse.wxParse('tpl', 'html', tpl, this);
    this.setData({
      pageDetail: app.globalData.pageContent,
      tittleColor: this.productColor()
    })
  }
})

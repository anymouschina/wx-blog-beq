//index.js
//获取应用实例
const app = getApp()

Page({
  //选择头部标签
  chooseBar(event) {
    const that = this
    let number = event.currentTarget.dataset.index
    if (this.data.selected !== number) {
      this.setData({
        selected: number,
        current: number
      })
      const query = this.createSelectorQuery()
      query.select('.selected').fields({
        rect: true
      }, function(res) {
        that.setData({
          topbarLeft: 100 - res.left
        })
      }).exec()
      that.getBarData(this.data.topbar[number])
    }

  },
  //获取数据
  getBarData(item){
      console.log(item)
  },
  //滑屏事件入口，获取当前页数
  changeSwiper(event) {
    console.log(event, '!!')
    this.getNewData(event.detail.current)
  },
  getNewData(current) {
    this.chooseBar({
      currentTarget: {
        dataset: {
          index: current
        }
      }
    })
  },
  upper: function(e) {
    console.log(e)
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  data: {
    toView: 'red',
    topbarLeft: 100,
    scrollTop: 100,
    current: 1,
    selected: 0,
    x: 0,
    y: 0,
    topbar: [{
        title: '首页'
      },
      {
        title: '前端'
      },
      {
        title: '后端'
      },
      {
        title: '数据库'
      },
      {
        title: '信息安全'
      },
      {
        title: '计算机科学'
      },
      {
        title: '游戏'
      }
    ],
    arrays: [{
      index: 0,
      content: `<strong>asafadfadf</strong>`,
      title: '给前端新手的建议',
      type: ['原创'],
      discrible: [
        'asd',
        'asdas',
        'asdas'
      ]
    }, {
      index: 1,
      content: 2,
      type: '原创'
    }, {
      index: 2,
      content: 3
    }, {
      index: 3,
      content: 4
    }]
  },
  judgePage: function(item) {
    app.globalData.pageContent = item.currentTarget.dataset.arr;
    console.log(app.globalData.pageContent)
    wx.navigateTo({
      url: '../pageDetail/index'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
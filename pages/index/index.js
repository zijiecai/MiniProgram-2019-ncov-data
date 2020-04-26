//index.js
//获取应用实例
const app = getApp()

// 导入封装好的网络请求模块
import request from '../../service/network.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['地区','累计确诊','治愈','死亡'],
    lastUpdateTime:'',
    children:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:'https://wuliang.art/ncov/statistics/totalDataOne'
    }).then(res => {
      console.log(res);
      // console.log(res.data.data.lastUpdateTime)
      // console.log(res.data.data.areaTree[0].children);
      this.setData({
        lastUpdateTime: res.data.data.lastUpdateTime,
        children:res.data.data.areaTree[0].children
      })
    }).catch(err => {
      console.log(err);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})

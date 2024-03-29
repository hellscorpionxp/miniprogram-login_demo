// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

const app = getApp();

Page({
  data: {
    logs: [],
    hasPhoneInfo: false,
    canIUse: wx.canIUse('button.open-type.getPhoneNumber'),
    phoneNumber: '',
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map((log: string) => {
        return formatTime(new Date(log))
      }),
    })
  },
  getPhoneNumber: function (e: any) {
    // console.log(app.globalData.userInfo);
    // console.log(e);
    var _this = this;
    if (app.globalData.userInfo) {
      wx.request({
        // url: 'http://localhost:8080/rest/usr/login/weapp?appId=wxa37994884ff4a74f&scyCode=17138aa4be5a678bf424fb413dda84a1',
        // url: 'http://localhost:8080/rest/usr/login/weapp?appId=wxc895f464c47eb14a',
        url: 'http://gpostg.gfhcinfo.com/gpo-api/rest/usr/login/weapp?appId=wxc895f464c47eb14a',
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          'encryptedData': e.detail.encryptedData,
          'iv': e.detail.iv,
          'jsCode': app.globalData.code,
          'user.avatarUrl': app.globalData.userInfo.avatarUrl,
          'user.cityEnName': app.globalData.userInfo.city,
          'user.countryEnName': app.globalData.userInfo.country,
          'user.gender': app.globalData.userInfo.gender,
          'user.nickName': app.globalData.userInfo.nickName,
          'user.provinceEnName': app.globalData.userInfo.province,
        },
        success: function (res) {
          // console.log(res);
          _this.setData({
            phoneNumber: 'Hello ' + res.data.data.phone,
            hasPhoneInfo: true,
          });
        }
      });
    }
  },
})

"use strict";
var app = getApp();
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
        hasPhoneInfo: false,
        canIUse: wx.canIUse('button.open-type.getPhoneNumber'),
        phoneNumber: '',
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util_1.formatTime(new Date(log));
            }),
        });
    },
    getPhoneNumber: function (e) {
        var _this = this;
        console.log(e);
        // console.log(e.detail.errMsg);
        // console.log(e.detail.iv);
        // console.log(e.detail.encryptedData);
        // console.log(e.detail.cloudID);
        if (app.globalData.code) {
            wx.request({
              url: 'http://localhost:8080/code2Session?appid=wxa37994884ff4a74f&secret=17138aa4be5a678bf424fb413dda84a1&jsCode=' + app.globalData.code + '&grantType=authorization_code',
              success: function (res) {
                    console.log(res.data);
                    wx.request({
                        url: 'http://localhost:8080/getPhoneNumber',
                        method: 'post',
                        data: {
                            'sessionKey': res.data.session_key,
                            'encryptedData': e.detail.encryptedData,
                            'iv': e.detail.iv,
                        },
                        success: function (res) {
                            console.log(res);
                            _this.setData({
                                phoneNumber: 'Hello ' + res.data,
                                hasPhoneInfo: true,
                            });
                        }
                    });
              }
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xuLy8gY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbG9nczogW10sXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbG9nczogKHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW10pLm1hcCgobG9nOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSlcbiAgICAgIH0pLFxuICAgIH0pXG4gIH0sXG59KVxuIl19
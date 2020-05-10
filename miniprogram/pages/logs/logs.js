"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var app = getApp();
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
        if (app.globalData.userInfo) {
            wx.request({
                url: 'http://localhost:8080/rest/auth/login/weapp?appId=wxa37994884ff4a74f&appSecret=17138aa4be5a678bf424fb413dda84a1',
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
                    _this.setData({
                        phoneNumber: 'Hello ' + res.data.phone,
                        hasPhoneInfo: true,
                    });
                }
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNkM7QUFFN0MsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztRQUN0RCxXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsY0FBYyxFQUFFLFVBQVUsQ0FBTTtRQUc5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMzQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxpSEFBaUg7Z0JBQ3RILE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsbUNBQW1DO2lCQUNwRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtvQkFDdkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDakIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSTtvQkFDN0IsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUztvQkFDbkQsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDL0Msb0JBQW9CLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDckQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQzdDLGVBQWUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO29CQUNqRCxxQkFBcUIsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2lCQUN4RDtnQkFDRCxPQUFPLEVBQUUsVUFBVSxHQUFHO29CQUVwQixLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNaLFdBQVcsRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUN0QyxZQUFZLEVBQUUsSUFBSTtxQkFDbkIsQ0FBQyxDQUFDO2dCQUNMLENBQUM7YUFDRixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXHJcbi8vIGNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsLmpzJylcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGxvZ3M6IFtdLFxyXG4gICAgaGFzUGhvbmVJbmZvOiBmYWxzZSxcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0UGhvbmVOdW1iZXInKSxcclxuICAgIHBob25lTnVtYmVyOiAnJyxcclxuICB9LFxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGxvZ3M6ICh3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdKS5tYXAoKGxvZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSlcclxuICAgICAgfSksXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgZ2V0UGhvbmVOdW1iZXI6IGZ1bmN0aW9uIChlOiBhbnkpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVzdC9hdXRoL2xvZ2luL3dlYXBwP2FwcElkPXd4YTM3OTk0ODg0ZmY0YTc0ZiZhcHBTZWNyZXQ9MTcxMzhhYTRiZTVhNjc4YmY0MjRmYjQxM2RkYTg0YTEnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAnZW5jcnlwdGVkRGF0YSc6IGUuZGV0YWlsLmVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAnaXYnOiBlLmRldGFpbC5pdixcclxuICAgICAgICAgICdqc0NvZGUnOiBhcHAuZ2xvYmFsRGF0YS5jb2RlLFxyXG4gICAgICAgICAgJ3VzZXIuYXZhdGFyVXJsJzogYXBwLmdsb2JhbERhdGEudXNlckluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgJ3VzZXIuY2l0eUVuTmFtZSc6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLmNpdHksXHJcbiAgICAgICAgICAndXNlci5jb3VudHJ5RW5OYW1lJzogYXBwLmdsb2JhbERhdGEudXNlckluZm8uY291bnRyeSxcclxuICAgICAgICAgICd1c2VyLmdlbmRlcic6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLmdlbmRlcixcclxuICAgICAgICAgICd1c2VyLm5pY2tOYW1lJzogYXBwLmdsb2JhbERhdGEudXNlckluZm8ubmlja05hbWUsXHJcbiAgICAgICAgICAndXNlci5wcm92aW5jZUVuTmFtZSc6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLnByb3ZpbmNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogJ0hlbGxvICcgKyByZXMuZGF0YS5waG9uZSxcclxuICAgICAgICAgICAgaGFzUGhvbmVJbmZvOiB0cnVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG59KVxyXG4iXX0=
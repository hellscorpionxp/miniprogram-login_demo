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
                url: 'http://localhost:8080/rest/usr/login/weapp?appId=wxa37994884ff4a74f&scyCode=17138aa4be5a678bf424fb413dda84a1',
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
                        phoneNumber: 'Hello ' + res.data.data.phone,
                        hasPhoneInfo: true,
                    });
                }
            });
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNkM7QUFFN0MsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztRQUN0RCxXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsY0FBYyxFQUFFLFVBQVUsQ0FBTTtRQUc5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMzQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSw4R0FBOEc7Z0JBQ25ILE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsbUNBQW1DO2lCQUNwRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtvQkFDdkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDakIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSTtvQkFDN0IsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUztvQkFDbkQsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDL0Msb0JBQW9CLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDckQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQzdDLGVBQWUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO29CQUNqRCxxQkFBcUIsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2lCQUN4RDtnQkFDRCxPQUFPLEVBQUUsVUFBVSxHQUFHO29CQUVwQixLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNaLFdBQVcsRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDM0MsWUFBWSxFQUFFLElBQUk7cUJBQ25CLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xuLy8gY29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWwuanMnKVxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXG5cbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGxvZ3M6IFtdLFxuICAgIGhhc1Bob25lSW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRQaG9uZU51bWJlcicpLFxuICAgIHBob25lTnVtYmVyOiAnJyxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShsb2cpKVxuICAgICAgfSksXG4gICAgfSlcbiAgfSxcbiAgZ2V0UGhvbmVOdW1iZXI6IGZ1bmN0aW9uIChlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyk7XG4gICAgLy8gY29uc29sZS5sb2coZSk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVzdC91c3IvbG9naW4vd2VhcHA/YXBwSWQ9d3hhMzc5OTQ4ODRmZjRhNzRmJnNjeUNvZGU9MTcxMzhhYTRiZTVhNjc4YmY0MjRmYjQxM2RkYTg0YTEnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAnZW5jcnlwdGVkRGF0YSc6IGUuZGV0YWlsLmVuY3J5cHRlZERhdGEsXG4gICAgICAgICAgJ2l2JzogZS5kZXRhaWwuaXYsXG4gICAgICAgICAgJ2pzQ29kZSc6IGFwcC5nbG9iYWxEYXRhLmNvZGUsXG4gICAgICAgICAgJ3VzZXIuYXZhdGFyVXJsJzogYXBwLmdsb2JhbERhdGEudXNlckluZm8uYXZhdGFyVXJsLFxuICAgICAgICAgICd1c2VyLmNpdHlFbk5hbWUnOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5jaXR5LFxuICAgICAgICAgICd1c2VyLmNvdW50cnlFbk5hbWUnOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5jb3VudHJ5LFxuICAgICAgICAgICd1c2VyLmdlbmRlcic6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLmdlbmRlcixcbiAgICAgICAgICAndXNlci5uaWNrTmFtZSc6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICd1c2VyLnByb3ZpbmNlRW5OYW1lJzogYXBwLmdsb2JhbERhdGEudXNlckluZm8ucHJvdmluY2UsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICdIZWxsbyAnICsgcmVzLmRhdGEuZGF0YS5waG9uZSxcbiAgICAgICAgICAgIGhhc1Bob25lSW5mbzogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxufSlcbiJdfQ==
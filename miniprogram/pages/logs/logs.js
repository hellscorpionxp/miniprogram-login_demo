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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNkM7QUFFN0MsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztRQUN0RCxXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFXO2dCQUN0RCxPQUFPLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUNsQyxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsY0FBYyxFQUFFLFVBQVUsQ0FBTTtRQUc5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUMzQixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSw4R0FBOEc7Z0JBQ25ILE1BQU0sRUFBRSxNQUFNO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixjQUFjLEVBQUUsbUNBQW1DO2lCQUNwRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtvQkFDdkMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDakIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSTtvQkFDN0IsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUztvQkFDbkQsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtvQkFDL0Msb0JBQW9CLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTztvQkFDckQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU07b0JBQzdDLGVBQWUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO29CQUNqRCxxQkFBcUIsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRO2lCQUN4RDtnQkFDRCxPQUFPLEVBQUUsVUFBVSxHQUFHO29CQUVwQixLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNaLFdBQVcsRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDM0MsWUFBWSxFQUFFLElBQUk7cUJBQ25CLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9ncy50c1xyXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXHJcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5cclxuY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBsb2dzOiBbXSxcclxuICAgIGhhc1Bob25lSW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFBob25lTnVtYmVyJyksXHJcbiAgICBwaG9uZU51bWJlcjogJycsXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lKG5ldyBEYXRlKGxvZykpXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIGdldFBob25lTnVtYmVyOiBmdW5jdGlvbiAoZTogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Jlc3QvdXNyL2xvZ2luL3dlYXBwP2FwcElkPXd4YTM3OTk0ODg0ZmY0YTc0ZiZzY3lDb2RlPTE3MTM4YWE0YmU1YTY3OGJmNDI0ZmI0MTNkZGE4NGExJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgJ2VuY3J5cHRlZERhdGEnOiBlLmRldGFpbC5lbmNyeXB0ZWREYXRhLFxyXG4gICAgICAgICAgJ2l2JzogZS5kZXRhaWwuaXYsXHJcbiAgICAgICAgICAnanNDb2RlJzogYXBwLmdsb2JhbERhdGEuY29kZSxcclxuICAgICAgICAgICd1c2VyLmF2YXRhclVybCc6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLmF2YXRhclVybCxcclxuICAgICAgICAgICd1c2VyLmNpdHlFbk5hbWUnOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5jaXR5LFxyXG4gICAgICAgICAgJ3VzZXIuY291bnRyeUVuTmFtZSc6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLmNvdW50cnksXHJcbiAgICAgICAgICAndXNlci5nZW5kZXInOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5nZW5kZXIsXHJcbiAgICAgICAgICAndXNlci5uaWNrTmFtZSc6IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgJ3VzZXIucHJvdmluY2VFbk5hbWUnOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mby5wcm92aW5jZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6ICdIZWxsbyAnICsgcmVzLmRhdGEuZGF0YS5waG9uZSxcclxuICAgICAgICAgICAgaGFzUGhvbmVJbmZvOiB0cnVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG59KVxyXG4iXX0=
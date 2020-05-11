/*
52pojie Forum daily automatic bonus.

Description :
When using for the first time. Need to manually log in to the 52pojie forum to get cookie. When Surge pops up to get a successful notification, you can disable the HTTP request script.
Due to the validity of cookie, if the script pops up a notification of cookie invalidation in the future, you need to repeat the above steps.


Surge4.0 or Loon : 
[Script]

// Daily bonus Script. Will be performed every day at 8 am. You can modify the execution time.
cron "0 8 * * *" script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/52pojie.js

// Get Cookie Script :
http-request https:\/\/www\.52pojie\.cn\/home\.php\? script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/52pojieDailyBonus/Get-Cookie.js

// MITM = www.52pojie.cn
*/

var bonus = {
  url: 'https://www.52pojie.cn/home.php?mod=task&do=apply&id=2&mobile=no',
  headers: {
    Cookie: $persistentStore.read("CookieWA"),
  }
};
var date = new Date()
var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var month = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

$httpClient.get(bonus, function(error, response, data) {
  if (error) {
    console.log(error);
    $notification.post("吾爱破解论坛签到脚本 ：接口错误‼️‼️‼️", "", error)
    $done()
  } else {
    if (data.match(/(ÒÑÍê³É|\u606d\u559c\u60a8)/)) {
      $notification.post("吾爱破解论坛签到", "", week[date.getDay()] + ", " + month[date.getMonth()] + "" + date.getDate() + ", " + "签到结果：成功！🎉")
      $done()
    } else {
      if (data.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765)/)) {
        $notification.post("吾爱破解论坛签到", "", week[date.getDay()] + ", " + month[date.getMonth()] + "" + date.getDate() + ", " + "签到结果：重复！⚠️")
        $done()
      } else {
        if (data.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55)/)) {
          $notification.post("吾爱破解论坛签到脚本 ：Cookies失效", "", "请重新获取‼️")
          $done()
        } else {
          $notification.post("吾爱破解论坛签到", "", "脚本需要升级 ‼️‼️")
          $done()
        }
      }
    }
  }
})

// If reprinted, please indicate the source. My TG channel @NobyDa
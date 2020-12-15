if ($response.statusCode != 200) {
  $done(null);
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var flags = new Map([[ "澳大利亚" , "🇦🇨" ] , [ "南非" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "阿根廷" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "奥地利" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "比利时" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "保加利亚" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "巴西" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "挪威" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "加拿大" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "瑞士" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "中国" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "德国" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "丹麦" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "西班牙" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "西班牙" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "欧盟" , "🇪🇺" ] , [ "芬兰" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫🇴" ] , [ "法国" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "英国" , "🇬🇧" ] , [ "香港" , "🇭🇰" ] ,["匈牙利","🇭🇺"], [ "ID" , "🇮🇩" ] , [ "爱尔兰" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "印度" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "意大利" , "🇮🇹" ] , [ "日本" , "🇯🇵" ] , [ "韩国" , "🇰🇷" ] , [ "LU" , "🇱🇺" ] , [ "MO" , "🇲🇴" ] , [ "墨西哥" , "🇲🇽" ] , [ "马来西亚" , "🇲🇾" ] , [ "荷兰" , "🇳🇱" ] , [ "菲律宾" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "俄罗斯" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇸🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "瑞典" , "🇸🇪" ] , [ "新加坡" , "🇸🇬" ] , [ "泰国" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "土耳其" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇼🇸" ] , [ "英国" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "美国" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "越南" , "🇻🇳" ] , [ "南非" , "🇿🇦"]])
var body = $response.body;
var obj = JSON.parse(body)["data"];
var emoji = flags.get(obj['country'])? flags.get(obj['country']):"🏴‍☠️"
emoji=City_ValidCheck(obj['province']) == "香港"? "🇭🇰️":emoji
emoji=City_ValidCheck(obj['province']) == "澳门"? "️🇲🇴️":emoji
emoji=City_ValidCheck(obj['province']) == "台湾"? "️️🇼🇸":emoji
var title =  emoji +'「'+ City_ValidCheck(obj['province'])+'」';//+Area_check(obj['country']);
var subtitle =  "🌏 "+ ISP_ValidCheck(obj['isp']) + " ➠ "+ obj['country'];
var ip = obj['addr']; 
var description = '服务商:'+obj['isp'] + '\n'+'定位: [' +obj["latitude"]+","+obj["longitude"]+"]"+ '\n' + 'IP:'+ obj['addr'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
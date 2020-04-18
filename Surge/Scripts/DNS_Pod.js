/* AppStore Speed up Download

[Host]
iosapps.itunes.apple.com = script:DNS Pod
[Script]
DNS Pod = type=dns,script-path=https://raw.githubusercontent.com/iKangnir/iProfiles/Master/Surge/Scripts/DNS_Pod.js
*/

const url = 'http://119.29.29.29/d?dn=' + $domain;
if ($network.v4.primaryInterface === 'en0') {
  $httpClient.get(url, function(error, response, data) {
    if (error) {
      $done({server: '8.8.8.8'});
    } else {
      $done({addresses: data.split(';'), ttl: 600});
    }
  });
} else {
  $done({server: '8.8.8.8'});
}

/*
instapaper解锁Pro
https://www.instapaper.com/api/subscription_status
hostname = www.instapaper.com
*/

body = $response.body.replace(/.+/,"ipsubnow=1585578158&ipsubexp=4079167311&ipsub=1")
$done({body});
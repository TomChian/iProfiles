//Script event auto linked ipv4 nextdns: network-change

$httpClient.post('https://link-ip.nextdns.io/a1b2c3/xxxxxxxxxxxxxxxx', function(error, response, data){
  if (error) {
console.log(error + '! ! !');
  } else {
console.log(data);
$done();
  }
});
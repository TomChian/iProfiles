//Script event auto linked ipv4 nextdns: network-change

$httpClient.post('https://link-ip.nextdns.io/d1b5bb/2e06b2e1349cc615', function(error, response, data){

  if (error) {

console.log(error + '! ! !');

  } else {

console.log(data);

$done();

  }

});

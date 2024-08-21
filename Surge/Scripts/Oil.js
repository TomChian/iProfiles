const params = getParams($argument);
const provinceName = params.provname || "河北";
const apiUrls = [
  `https://apis.tianapi.com/oilprice/index?key=77204f3bf1d6a634988ea1830591cbac&prov=${encodeURIComponent(provinceName)}`,
  `https://apis.tianapi.com/oilprice/index?key=77204f3bf1d6a634988ea1830591cbac&prov=${encodeURIComponent(provinceName)}`,
  `https://apis.tianapi.com/oilprice/index?key=77204f3bf1d6a634988ea1830591cbac&prov=${encodeURIComponent(provinceName)}`,
  `https://apis.tianapi.com/oilprice/index?key=77204f3bf1d6a634988ea1830591cbac&prov=${encodeURIComponent(provinceName)}`,
  `https://apis.tianapi.com/oilprice/index?key=77204f3bf1d6a634988ea1830591cbac&prov=${encodeURIComponent(provinceName)}`
];
let currentIndex = 0;

function testNextUrl() {
  if (currentIndex >= apiUrls.length) {
    console.log("All URLs failed");
    $done();
    return;
  }

  const apiUrl = apiUrls[currentIndex];

  $httpClient.get(apiUrl, (error, response, data) => {
    if (error) {
      console.log(`Error for URL ${currentIndex + 1}: ${error}`);
      currentIndex++;
      testNextUrl();
    } else {
      handleResponse(data);
    }
  });
}

function handleResponse(data) {
  const oilPriceData = JSON.parse(data);
  console.log(oilPriceData);

  if (oilPriceData.code === 200) {
    const oilPriceInfo = oilPriceData.result;
    const message = `地区：${oilPriceInfo.prov}\n92号汽油：${oilPriceInfo.p92}元/升\n95号汽油：${oilPriceInfo.p95}元/升\n`;

    const body = {
      title: "今日油价",
      content: message,
      provname: params.provname,
      icon: params.icon,
      "icon-color": params.color
    };
    $done(body);
  } else {
    console.log(`请求失败，错误信息：${oilPriceData.msg}`);
    currentIndex++;
    testNextUrl();
  }
}

function getParams(param) {
  return Object.fromEntries(
    param
      .split("&")
      .map((item) => item.split("="))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}

testNextUrl();
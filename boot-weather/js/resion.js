// 1. 전체 url 가져오기
const currentURL = location.href;

// 2. 쿼리스트링 파라미터 가져오기
const urlobj = new URL(currentURL);

// 파라미터에 대한 정보가 들어있다.
const params = urlobj.searchParams;

// 파라미터의 값을 구한다. params.get("변수명")
const q = params.get("q");
const krcity = params.get("krcity");

// 3. ajax 이용해서 전체 날씨 정보 얻어오기
function getCityWeather(city) {
  var temp = {};
  var urlAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=afdc25ec011e725582bbb3acb8d653a3&units=metric&lang=kr";
  urlAPI += "&q=" + city;

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, // 동기상태 => ajax는 기본적으로 비동기
    success: function (data) {
      const celsius = data.main.temp.toFixed(1);
      const icon = data.weather[0].icon;
      const weather = data.clouds.all;
      const humidity = data.main.humidity.toFixed(1);
      const fell_like = data.main.feels_like.toFixed(1);
      const wind = data.wind.speed.toFixed(1);
      const description = data.weather[0].description;

      temp.celsius = celsius;
      temp.icon = icon;
      temp.weather = weather;
      temp.humidity = humidity;
      temp.fell_like = fell_like;
      temp.wind = wind;
      temp.description = description;
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
}

// 4. 데이터 바인딩 작업
$(".regison-title").text(`${krcity} 상세 날씨`);

let binding = getCityWeather(q);

// 온도
$(".celsius").text(`${binding.celsius}℃`);
// 아이콘
var iconURL = "https://openweathermap.org/img/wn/" + binding.icon + ".png";
$(".icon_ch").attr("src", iconURL);
// 날씨
$("#weather").text(`흐림 : ${binding.weather}%`);
// 습도
$("#humidity").text(`습도 : ${binding.humidity}℃`);
// 체감 온도
$("#fell_like").text(`체감 온도 : ${binding.fell_like}℃`);
// 풍속
$("#speed").text(`풍속 : ${binding.wind}`);
// 날씨 조건
$("#description").text(`${binding.description}`);

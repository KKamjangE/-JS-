const API_KEY="fb6d029b5475d24b5ccba7e8d4e36098" // weather API key

function onGeoOk(position) { //좌표를 구했을 경우
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` //weather API
    fetch(url) //url 요청
        .then(response => response.json()) //json파일 응답
        .then(data => { //data라는 이름으로 사용
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} @ ${data.main.temp}`;
        });
}
function onGeoError() { //좌표를 구하지 못했을 경우
    alert("Can't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) //현재 좌표 구하기
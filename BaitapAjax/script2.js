
let x = document.getElementById("toa-do");
class OpenWeatherMap{
    constructor(lat, long){
        this.lat = lat;
        this.long = long;
    }
    dataAPI(){
        //https://home.openweathermap.org/api_keys
        const apiKey = '1a811cb6a7e2f1b0647e5b2db4bed342';
        const apiOpenWeatherMap = 'https://api.openweathermap.org/data/2.5/weather';
        axios.get(apiOpenWeatherMap, { params: { lat: this.lat ,lon: this.long , appid: apiKey} })
        .then(function (response) {
            if(typeof response.data.main.temp !== 'undefined'){
                let celsius = parseFloat(response.data.main.temp - 273.15).toFixed(2) ;
                x.innerHTML = `Nhiệt độ là: ${celsius}`;
            }
        })
        .catch(function (error) {
            document.getElementById('toa-do').innerHTML = error.message;
        });
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude +
    "<br>Wating ...";
    let openWhereMap = new OpenWeatherMap(position.coords.latitude, position.coords.longitude);
    setTimeout(function(){
        openWhereMap.dataAPI()
    },2000);
}
getLocation();
const geoCodingWeatherAPI = "https://api.openweathermap.org/data/2.5/weather/"
const api_key = "bbc1f8ebc1bdaef327ca95454e98490f"
const city = document.getElementById("city")
const search = document.getElementById("search")

search.addEventListener("click", function () {
    fetch(geoCodingWeatherAPI + `?q=${city.value.trim()}&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            // let humidity = data["main"]["humidity"]
            // console.log(humidity)
            // let windSpeed = data["wind"]["speed"]
            // console.log(windSpeed)
            // let temperature = kelvinToCelsius(data["main"]["temp"])
            // console.log(temperature)

            document.getElementById("city-name").textContent = titleCase(city.value.trim())
            document.getElementById("weather-condition").textContent = titleCase(data["weather"][0]["description"])
            document.getElementById("temperature").innerHTML = `${kelvinToCelsius(data["main"]["temp"])}<sup>°</sup>`
            document.getElementById("wind-speed").innerHTML = `${beaufortWindScaleToKM(data["wind"]["speed"])} km/h`
            document.getElementById("humidity").innerHTML = `${data["main"]["humidity"]} %`
            document.getElementById("sea-level").innerHTML = `${data["main"]["sea_level"]} hPa`





        }).catch((err) => console.log(err))
})

function kelvinToCelsius(kelvin) {
    // return parseFloat((kelvin - 273.15).toFixed(2));
    return Math.round(kelvin - 273.15)
}

function beaufortWindScaleToKM(beaufortWindScale) {
    return Math.round(beaufortWindScale * 3.6)
}

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
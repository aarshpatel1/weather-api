const geoCodingWeatherAPI = "https://api.openweathermap.org/data/2.5/weather/"
const api_key = "bbc1f8ebc1bdaef327ca95454e98490f"
const city = document.getElementById("city")
const search = document.getElementById("search")

search.addEventListener("click", function () {
    fetch(geoCodingWeatherAPI + `?q=${city.value.trim()}&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let humidity = data["main"]["humidity"]
            console.log(humidity)
            let windSpeed = data["wind"]["speed"]
            console.log(windSpeed)
            let temperature = kelvinToCelsius(data["main"]["temp"])
            console.log(temperature)

            
        }).catch((err) => console.log(err))
})

function kelvinToCelsius(kelvin) {
    // return parseFloat((kelvin - 273.15).toFixed(2));
    return Math.round(kelvin - 273.15)
}
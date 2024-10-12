document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'bbc1f8ebc1bdaef327ca95454e98490f'; // Replace with your weather API key
    const city = 'Surat'; // Replace with the desired city

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

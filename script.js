async function getWeather() {
    const apiKey = '121eb6c9322538ef592db309896ee2d7'; //  actual API key from OpenWeatherMap
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weather-info').innerHTML = '<p>City not found.</p>';
        } else {
            const temp = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const location = data.name;

            document.getElementById('weather-info').innerHTML = `
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Temperature:</strong> ${temp}°C</p>
                <p><strong>Description:</strong> ${weatherDescription}</p>
            `;
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    }
}

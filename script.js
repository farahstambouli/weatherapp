function weatherApp(apiKey, city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(weatherData => {
            console.log("Weather data:", weatherData);
            displayWeatherInfo(weatherData);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function displayWeatherInfo(weatherData) {
    const weatherInfoDiv = document.getElementById("weatherInfo");
    weatherInfoDiv.innerHTML = `
        <h2>Weather Information</h2>
        <p>City: ${weatherData.name}</p>
        <p>Temperature: ${weatherData.main.temp} °C</p>
        <p>Description: ${weatherData.weather[0].description}</p>
    `;
}

const getWeatherBtn = document.getElementById("getWeatherBtn");
getWeatherBtn.addEventListener("click", () => {
    const apiKey = 'dd548d47f938f5245d0943cb7aeb2308';
    const cityInput = document.getElementById("cityInput").value;
    weatherApp(apiKey, cityInput);
});


// mykey='dd548d47f938f5245d0943cb7aeb2308'

/*In the context of JavaScript and web development, when we say that a method is "used
 to parse the response body as JSON," we are referring to the process of converting the raw 
 response data received from an API request (which is typically in the form of a string) into
  a JavaScript object that can be easily manipulated and accessed.*/

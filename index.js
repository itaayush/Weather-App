const apiKey="c76cee6c1766bc3e99a84ac2be41049c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        const weatherIcon = document.querySelector(".weather-icon");
        if (data.weather[0].main === "Clouds") {
            weatherIcon.className = "fa-solid fa-cloud weather-icon";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.className = "fa-solid fa-sun weather-icon";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.className = "fa-solid fa-cloud-rain weather-icon";
        } else if (data.weather[0].main === "Snow") {
            weatherIcon.className = "fa-solid fa-snowflake weather-icon";
        } else if (data.weather[0].main === "Thunderstorm") {
            weatherIcon.className = "fa-solid fa-bolt weather-icon";
        } else {
            weatherIcon.className = "fa-solid fa-cloud weather-icon";
        }
    }
    document.querySelector("#search-button").addEventListener("click", () => {
        const city = document.querySelector(".search input").value;
        if (city) {
            checkWeather(city);
        }
    });


const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');

async function checkWeather(city) {
    let apiKey = "a80a3e5dedc0854d15ff497c0c98b874";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

    try {
        let response = await fetch(url);
        let weatherData = await response.json();

        if (weatherData.cod === "404") {
            locationNotFound.style.display = "flex";
            weatherBody.style.display = "none";
            return;
        }

        locationNotFound.style.display = "none";
        weatherBody.style.display = "flex";

        temperature.innerHTML = `${Math.round(weatherData.main.temp)}°C`; 
        description.innerHTML = `${weatherData.weather[0].description}`;
        humidity.innerHTML = `${weatherData.main.humidity}%`;
        windSpeed.innerHTML = `${weatherData.wind.speed} Km/H`;

        switch (weatherData.weather[0].main) {
            case 'Clear':
                weatherImg.src = "https://www.freeiconspng.com/thumbs/sunny-icon/sunny-icon-17.png";
                break;
            case 'Rain':
                weatherImg.src = "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/cloud_rain.png";
                break;
            case 'Mist':
                weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkUwNM9qUrC4tGK76h4HpakjLCkaxSiaifA&s";
                break;
            case 'Snow':
                weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1xPQH839BpH818Og3r62qPAlLVxT8vo28XK5KSV5NQ7RcDdvbGrS8VB-Fr-d-msxzjw&usqp=CAU";
                break;
            case 'Haze':
                weatherImg.src = "https://i.pinimg.com/564x/5a/c5/9a/5ac59aecdd524aef993f81de331096ad.jpg";
                break;
            case 'Fog':
                weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9tQAh3cKjdHibe78bwM-tlWZ69ZWXuU3AA&s";
                break;
            case 'Lightning':
                weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJZ6v44Ecrgje7cLcTREzhmOUIH-jb96QVA&s";
                break;
            case 'Thunderstorm':
                weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJZ6v44Ecrgje7cLcTREzhmOUIH-jb96QVA&s";
                break;
            default:
                weatherImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkciKmH3So_le32LCItBzD9lpr0wa1x-aEw5a-zcmi5VsbmlYuej6qStJa0JsQ2fsc0g&usqp=CAU";
        }

        console.log(weatherData);
        
    } catch (error) {
        console.log("Error: ", error);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});

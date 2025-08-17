async function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    const apiKey = "ee3eed2c73ba13e0c2f32a7b641c5ab3";

    // an async function is a function that runs only after the promise set by the await keyword has been completed. It freezes up the application before that condition is met.

    if (searchInput == "") {
        weatherDataSection.innerHTML = `
        <div>
            <h2>Empty Input!</h2>
            <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return;

    }
        
    
    async function getLonAndLat() { // this async function will be in charge of getting the location's longitude and latitude
        const countryCode = 1;
        const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`
        const response = await fetch(geocodeURL); // MORE INFO NEEDED
        if (!response.ok) {
            console.log("Bad response! ", response.status) // .status allows us to print of the status of the response when there's an error
            return;
        }
        const data = await response.json();

        if (data.length === 0) {
            console.log("Something went wrong here.")
            weatherDataSection.innerHTML = `
            <div>
                <h2>Invalid Input: "${searchInput}"</h2>\
                <p>Please try again with a valid <u>city name</u>.</p>
            <div>`;
            return;

        }else{
            return data[0]
        }
    }
    

    async function getWeatherData(lon, lat) { // this async function will be in charge of getting the weather data using the longitude and latitude
         const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

         const response = await fetch(weatherURL);
         if (!response.ok) {
            console.log("Bad response! ", response.status);
            return;
         }

         const data = await response.json();
         weatherDataSection.style.display = "flex"
         weatherDataSection.innerHTML = `
         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}" width="100" />
         <div>
            <h2>${data.name}</h2>
            <p><strong>Temperature:</strong> ${Math.round(data.main.temp - 273.15)}°C</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
         </div>
         `;

    }

    document.getElementById("search").value = "";
    const geocodeData = await getLonAndLat();
    getWeatherData(geocodeData.lon, geocodeData.lat );


}


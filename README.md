# 🌦 Weather App  

A simple **JavaScript weather application** that fetches real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api). Users can search for a city, and the app will display the temperature, description, and weather icon.  

## 🚀 Features  
- Search weather by **city name**  
- Handles **invalid inputs** (empty search or invalid city)  
- Fetches **longitude & latitude** using OpenWeatherMap Geocoding API  
- Fetches **current weather** using OpenWeatherMap Weather API  
- Displays:  
  - City name  
  - Temperature (in Celsius)  
  - Weather description  
  - Weather icon

## 🛠️ Usage

1. **Clone or download** this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Enter a city name in the search box and click the search button.
4. The app will display the current weather information for the entered city.



## 📂 Project Structure  
```markdown
.
├── index.html         # HTML file with search input and weather section
├── script.js          # JavaScript logic (fetchWeather function)
├── style.css          # Optional styling
└── README.md          # Documentation

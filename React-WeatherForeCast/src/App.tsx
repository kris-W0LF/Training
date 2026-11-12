
import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) return;

    try {
      setError("");

      
      const geo = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
      );

      const geoData = await geo.json();

      if (!geoData.results?.length) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

     
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`
      );

      const data = await res.json();

      if (!res.ok) throw new Error("Weather unavailable");

      setWeather({ ...data.current, name });
    } catch {
      setWeather(null);
      setError("City not found. Try again!");
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="card">
          <h2>{weather.name}</h2>
          <h1>{Math.round(weather.temperature_2m)}°C</h1>

          <p>Humidity: {weather.relative_humidity_2m}%</p>
          <p>Wind: {weather.wind_speed_10m} km/h</p>
          <p>Feels Like: {weather.apparent_temperature}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  }
}
function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function getData() {

    if (!city) {
      alert("Please enter city name");
      return;
    }
    setLoading(true);
    setError("");

    const APIKey = "8ece761c305a100aed1260d309aa4a5e";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKey}&units=metric`;
    // const api = "https://api.openweathermap.org/data/2.5/weather";

    try {
      const data = await fetch(api);

      if (!data.ok) {
        throw new Error("City not found");
      }
      const result = await data.json();
      setWeather(result);


    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong");
      }
      setWeather(null);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <label htmlFor="city">City:</label>
      {/* <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> */}
      <select value={city} onChange={(e) => setCity(e.target.value)}>

        <option value="">Select a city</option>
        <option value="Bhopal">Bhopal</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Agra">Agra</option>
        <option value="Amritsar">Amritsar</option>
        <option value="Bhubaneswar">Bhubaneswar</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Dehradun">Dehradun</option>
        <option value="Faridabad">Faridabad</option>
        <option value="Guwahati">Guwahati</option>
        <option value="Gwalior">Gwalior</option>
        <option value="Jabalpur">Jabalpur</option>
        <option value="Jodhpur">Jodhpur</option>
        <option value="Kanpur">Kanpur</option>
        <option value="Kochi">Kochi</option>
        <option value="Ludhiana">Ludhiana</option>
        <option value="Madurai">Madurai</option>
        <option value="Mysuru">Mysuru</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Nashik">Nashik</option>
        <option value="Patna">Patna</option>
        <option value="Prayagraj">Prayagraj</option>
        <option value="Raipur">Raipur</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Ranchi">Ranchi</option>
        <option value="Surat">Surat</option>
        <option value="Thane">Thane</option>
        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
        <option value="Udaipur">Udaipur</option>
        <option value="Vadodara">Vadodara</option>
        <option value="Varanasi">Varanasi</option>
        <option value="Vijayawada">Vijayawada</option>
        <option value="Visakhapatnam">Visakhapatnam</option>
      </select>

      <button onClick={getData}>Search</button>
      

      {error && <p>{error}</p>}


      {loading && <p>Loading..</p>}

      {weather && <h2>{weather.name}</h2>}
      {weather && <h1>Temperature: {weather.main.temp}°C</h1>}
      {weather && <h3>{weather.weather[0].main}</h3>}
      {weather && <p> Humidity: {weather.main.humidity}%</p>}
      {weather && <p>Wind Speed: {weather.wind.speed}</p>}


    </div>
  )


}

export default App;
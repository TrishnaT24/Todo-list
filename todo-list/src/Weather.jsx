import { useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const api_key = "c02dfd746b47a41e83a6f45eb4544feb";
  const fetchWeather = async (cityName) => {
    const Weatherdetail =
      await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}
            &limit=5&appid=${api_key}`);

    const response = Weatherdetail.data[0];

    console.log(response.name);
    console.log(response.lat);
    console.log(response.lon);
    console.log(response.state);
    console.log(response.country);
    const latitude = response.lat;
    const longitude = response.lon;
    // console.log(Weatherdetail);
    fetchInfo(latitude, longitude);
  };

  const fetchInfo = async (latitude, longitude) => {
    const allInfo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c02dfd746b47a41e83a6f45eb4544feb&units=metric`
    );

    console.log(allInfo);
    setWeather(allInfo.data);
  };

  return (
    <div>
    <div>
      <h2 className="text-slate-50 flex justify-center mt-32">
        This is Your own weather App
      </h2>
      <input
        className="ml-48"
        type="text"
        placeholder="Enter City Name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button className="border-4" onClick={() => {fetchWeather(cityName)}}>
        Enter
      </button>
    </div>
    <div>
        {weather && (
       <ul className="text-white ml-48 mt-4 list-disc">
          <li>City: {weather.name}</li>
          <li>Temperature: {weather.main.temp} °C</li>
          <li>Condition: {weather.weather[0].description}</li>
          <li>Humidity: {weather.main.humidity}%</li>
          <li>Wind Speed: {weather.wind.speed} m/s</li>
        </ul>
        )}
    </div>
    </div>
  );
}

export default Weather;

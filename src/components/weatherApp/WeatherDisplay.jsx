import WeatherDetail from "./WeatherDetail";
import { formatTemp, formatWindSpeed } from "../../utils/weatherUtils";
import "../styles/WeatherDisplay.css";

const WeatherDisplay = ({ weather, unit, toggleUnit }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>
          Weather in {weather.name}, {weather.sys.country}
          <button onClick={toggleUnit} className="unit-toggle">
            {unit === "metric" ? "°F" : "°C"}
          </button>
        </h2>
        <p className="weather-description">{weather.weather[0].description}</p>
      </div>

      <div className="weather-details">
        <div className="main-temp">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <span>{formatTemp(weather.main.temp, unit)}</span>
        </div>

        <div className="secondary-details">
          <WeatherDetail
            label="Feels like"
            value={formatTemp(weather.main.feels_like, unit)}
          />
          <WeatherDetail label="Humidity" value={`${weather.main.humidity}%`} />
          <WeatherDetail
            label="Wind"
            value={formatWindSpeed(weather.wind.speed, unit)}
          />
          <WeatherDetail
            label="Pressure"
            value={`${weather.main.pressure} hPa`}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

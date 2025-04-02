import useWeather from "../../hooks/useWeather";
import WeatherSearch from "./WeatherSearch";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/WeatherApp.css";

const WeatherApp = () => {
  const {
    city,
    setCity,
    weather,
    error,
    loading,
    unit,
    fetchCoordinates,
    toggleUnit,
  } = useWeather();

  return (
    <div className="weather-app-container">
      <h1>Weather Forecast</h1>

      <WeatherSearch
        city={city}
        setCity={setCity}
        fetchCoordinates={fetchCoordinates}
        loading={loading}
      />

      {loading && <div className="loading-spinner"></div>}

      {error && <p className="error-message">{error}</p>}

      <WeatherDisplay weather={weather} unit={unit} toggleUnit={toggleUnit} />
    </div>
  );
};

export default WeatherApp;

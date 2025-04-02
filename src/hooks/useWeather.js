import { useState, useEffect } from "react";

const useWeather = () => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState("");
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    if (coords) {
      fetchWeather();
    }
  }, [coords, unit]); // Re-fetch when unit changes

  // Fetch coordinates from city name
  const fetchCoordinates = async () => {
    if (!city.trim()) {
      setError("Please enter a city name!");
      return;
    }

    setError(null);
    setLoading(true);
    setWeather(null);

    try {
      const geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );

      if (!geoResponse.ok) throw new Error("Failed to fetch coordinates");

      const geoData = await geoResponse.json();
      if (geoData.length === 0) throw new Error("City not found!");

      setCoords({ lat: geoData[0].lat, lon: geoData[0].lon });
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  // Fetch weather data from coordinates
  const fetchWeather = async () => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${API_KEY}`
      );

      if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");

      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Toggle between metric and imperial units
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return {
    city,
    setCity,
    weather,
    error,
    loading,
    unit,
    fetchCoordinates,
    fetchWeather,
    toggleUnit,
  };
};

export default useWeather;

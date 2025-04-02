export const formatTemp = (temp, unit) => {
  return `${Math.round(temp)}°${unit === "metric" ? "C" : "F"}`;
};

export const formatWindSpeed = (speed, unit) => {
  return unit === "metric"
    ? `${speed} m/s`
    : `${(speed * 2.237).toFixed(1)} mph`;
};

export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

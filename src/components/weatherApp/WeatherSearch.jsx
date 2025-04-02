import "../styles/WeatherSearch.css";

const WeatherSearch = ({ city, setCity, fetchCoordinates, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && city.trim()) {
      fetchCoordinates();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="Enter city name for weather search"
      />
      <button
        onClick={fetchCoordinates}
        disabled={loading || !city.trim()}
        aria-label="Get weather information"
      >
        {loading ? "Searching..." : "Get Weather"}
      </button>
    </div>
  );
};

export default WeatherSearch;

const WeatherDetail = ({ label, value }) => {
  return (
    <p>
      <span>{label}:</span> {value}
    </p>
  );
};

export default WeatherDetail;

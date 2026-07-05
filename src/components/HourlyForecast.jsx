const hours = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
];

export default function HourlyForecast() {
  return (
    <>
      <h2 className="section-title">
        Hourly Forecast
      </h2>

      <div className="hourly-row">
        {hours.map((hour) => (
          <div className="hour-card" key={hour}>
            <h3>{hour}</h3>

            <h1>☀️</h1>

            <p>29°</p>
          </div>
        ))}
      </div>
    </>
  );
}
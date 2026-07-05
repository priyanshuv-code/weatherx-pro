const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export default function Forecast() {
  return (
    <>
      <h2 className="section-title">
        7 Day Forecast
      </h2>

      <div className="forecast-row">
        {days.map((day) => (
          <div className="day-card" key={day}>
            <h3>{day}</h3>

            <h1>☀️</h1>

            <p>31°</p>
          </div>
        ))}
      </div>
    </>
  );
}
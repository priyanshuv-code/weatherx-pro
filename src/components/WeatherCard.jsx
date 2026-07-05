import { WiDaySunny } from "react-icons/wi";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weatherHero">
      <div>
        <h1>{Math.round(weather.main.temp)}°</h1>

        <h2>{weather.name}</h2>

        <p>{weather.weather[0].description}</p>
      </div>

      <WiDaySunny size={180} />
    </div>
  );
}
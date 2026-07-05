import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Highlights from "../components/Highlights";
import HourlyForecast from "../components/HourlyForecast";
import Forecast from "../components/Forecast";
import Footer from "../components/Footer";

export default function Home({
  weather,
  loading,
  searchWeather,
  getCurrentLocation,
}) {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>🌤</h1>

        <h2>WeatherX</h2>

        <ul>
          <li className="active">Dashboard</li>
          <li>Favorites</li>
          <li>Settings</li>
          <li>About</li>
        </ul>
      </aside>

      <section className="dashboard">
        <Navbar />

        

        <SearchBar
        searchWeather={searchWeather}
      getCurrentLocation={getCurrentLocation}
      />

        {loading ? (
          <h2 style={{ color: "white" }}>Loading...</h2>
            ) : (
        <WeatherCard weather={weather} />
      )}

        {weather && <Highlights weather={weather} />}

        {/* Hourly Forecast */}
        <HourlyForecast />

        {/* 7 Day Forecast */}
        <Forecast />

        <Footer />
      </section>
    </div>
  );
}
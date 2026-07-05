import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { getWeather, getWeatherByLocation } from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchWeather("Delhi");
  }, []);

  const searchWeather = async (city) => {
    if (!city) return;

    setLoading(true);

    try {
      const data = await getWeather(city);
      setWeather(data);
    } catch (error) {
      alert("City not found!");
      console.log(error);
    }


    setLoading(false);
  };
  const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        setLoading(true);

        const { latitude, longitude } = position.coords;

        const data = await getWeatherByLocation(
          latitude,
          longitude
        );

        setWeather(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    () => {
      alert("Location permission denied.");
    }
  );
};
  

  return (
    <Home
  weather={weather}
  loading={loading}
  searchWeather={searchWeather}
  getCurrentLocation={getCurrentLocation}
/>
  );
}

export default App;
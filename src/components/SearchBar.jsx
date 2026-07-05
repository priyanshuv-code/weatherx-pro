import { useState } from "react";
import {
  FaSearch,
  FaLocationArrow,
} from "react-icons/fa";

export default function SearchBar({
  searchWeather,
  getCurrentLocation,
}) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;

    searchWeather(city);

    setCity("");
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>
      <FaSearch />
      </button>

      <button
    className="location-btn"
    onClick={getCurrentLocation}
    >
    <FaLocationArrow />
      </button>
    </div>
  );
}
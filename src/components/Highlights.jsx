import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiDaySunny,
} from "react-icons/wi";

const data = [
  {
    title: "Humidity",
    value: "62%",
    icon: <WiHumidity />,
  },
  {
    title: "Wind",
    value: "12 km/h",
    icon: <WiStrongWind />,
  },
  {
    title: "Pressure",
    value: "1012 hPa",
    icon: <WiBarometer />,
  },
  {
    title: "UV Index",
    value: "5.8",
    icon: <WiDaySunny />,
  },
];

export default function Highlights() {
  return (
    <>
      <h2 className="section-title">Today's Highlights</h2>

      <div className="highlight-grid">
        {data.map((item) => (
          <div className="highlight-card" key={item.title}>
            <div className="icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <h2>{item.value}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
import { useState, useEffect } from "react";
import s from "./ClockWeather.module.css";

const WMO: Record<number, string> = {
  0: "CLEAR", 1: "MOSTLY CLEAR", 2: "PARTLY CLOUDY", 3: "OVERCAST",
  45: "FOG", 48: "RIME FOG",
  51: "LIGHT DRIZZLE", 53: "DRIZZLE", 55: "HEAVY DRIZZLE",
  61: "LIGHT RAIN", 63: "RAIN", 65: "HEAVY RAIN",
  71: "LIGHT SNOW", 73: "SNOW", 75: "HEAVY SNOW",
  80: "SHOWERS", 81: "SHOWERS", 82: "HEAVY SHOWERS",
  95: "THUNDERSTORM",
};

const ClockWeather = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<{ temp: number; condition: string } | null>(null);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,weathercode`
        );
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          condition: WMO[data.current.weathercode] ?? "—",
        });
      } catch {
        // silently fail
      }
    });
  }, []);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");
  const date = time
    .toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "short" })
    .toUpperCase();

  return (
    <div className={s.widget} data-label="Local">
      <div className={s.clock}>
        {hh}<span className={s.sep}>:</span>{mm}<span className={s.sep}>:</span>{ss}
      </div>
      <div className={s.date}>{date}</div>
      {weather && (
        <div className={s.weather}>
          <span className={s.temp}>{weather.temp}°C</span>
          <span className={s.condition}>{weather.condition}</span>
        </div>
      )}
    </div>
  );
};

export default ClockWeather;

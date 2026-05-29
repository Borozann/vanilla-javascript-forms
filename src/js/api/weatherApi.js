import { Weather } from "./../models/Weather";

export class weatherApi {
  static async grabWeather(user) {
    try {
      const path = `https://api.open-meteo.com/v1/forecast`;
      const params = new URLSearchParams({
        latitude: user.getCoords().lat,
        longitude: user.getCoords().lng,
        current: "temperature_2m",
      });

      const res = await fetch(`${path}?${params.toString()}`);
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();

      const weather = new Weather();
      weather.setTemperature(data.current.temperature_2m);

      return weather;
    } catch (err) {
      throw new Error(err);
    }
  }
}

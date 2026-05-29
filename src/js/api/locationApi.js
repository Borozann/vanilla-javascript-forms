export class locationApi {
  static async grabLocation(coords) {
    try {
      const path = `https://nominatim.openstreetmap.org/reverse`;
      const params = new URLSearchParams({
        lat: String(coords.lat),
        lon: String(coords.lng),
        format: "jsonv2",
      });

      const res = await fetch(`${path}?${params.toString()}`);
      if (!res.ok) throw new Error(`Erro: ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(`Erro: ${err}`);
    }
  }
}

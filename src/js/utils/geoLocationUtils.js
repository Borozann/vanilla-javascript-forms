import { Coords } from "../models/Coords";

export function getUserCoords() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation)
      return reject(new Error("Geolocation not supported"));
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve(new Coords(latitude, longitude));
      },
      (err) => {
        reject(new Error(`Erro: ${err}`));
      },
    );
  });
}

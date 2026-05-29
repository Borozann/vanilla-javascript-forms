import { User } from "./models/User";
import { locationApi } from "./api/locationApi";
import { getUserCoords } from "./utils/geoLocationUtils";
import { Weather } from "./models/Weather";
import { weatherApi } from "./api/weatherApi";
import { loadingService } from "./services/loadingService";
import { localStorageService } from "./utils/localStorageService";

export class Session {
  constructor() {
    this.user = new User();
    this.weather = new Weather();
  }

  async start() {
    loadingService.toggleSpinner(true);
    await this._getIPs();
    await this._getLocation();
    await this._getWeather();
    localStorageService.merge("userCache");
    loadingService.toggleSpinner(false);
  }

  async _getIPs() {
    const pub = await fetch("https://api.ipify.org?format=json").then((r) =>
      r.json(),
    );
    const pc = new RTCPeerConnection();
    pc.createDataChannel("");
    pc.createOffer().then((o) => pc.setLocalDescription(o));
    pc.onicecandidate = (e) => {
      const ip =
        e?.candidate?.candidate?.split(" ")[4] ||
        "f0ae8065-8e2f-46f3-b908-642506f154dd.local";
      this.user.setIp(pub.ip);
      this.user.setIpInterno(ip);
    };
  }

  async _getLocation() {
    try {
      const coords = await getUserCoords();
      const location = await locationApi.grabLocation(coords);
      this.user.setCoords(coords);
      this.user.setLocation(location.address.city);
    } catch (err) {
      throw new Error(err);
    }
  }

  async _getWeather() {
    try {
      if (this.user.getCoords() == null) {
        throw new Error("Não foi possivel carregar o clima");
      }

      this.weather = await weatherApi.grabWeather(this.user);
    } catch (err) {
      throw new Error(err);
    }
  }
}

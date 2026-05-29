export class User {
  #nome;
  #telefone;
  #coords;
  #location;
  #ip;
  #ipInterno;

  getCoords() {
    return this.#coords;
  }

  setCoords(coords) {
    this.#coords = coords;
  }

  getLocation() {
    return this.#location;
  }

  setLocation(newLocation) {
    this.#location = newLocation;
  }

  getIp() {
    return this.#ip;
  }

  setIp(ip) {
    this.#ip = ip;
  }

  getIpInterno() {
    return this.#ipInterno;
  }

  setIpInterno(ipInterno) {
    this.#ipInterno = ipInterno;
  }

  getNome() {
    return this.#nome;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  getTelefone() {
    return this.#telefone;
  }

  setTelefone(telefone) {
    this.#telefone = telefone;
  }
}

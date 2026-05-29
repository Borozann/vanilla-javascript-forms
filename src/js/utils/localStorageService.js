export class localStorageService {
  static merge(key, value) {
    localStorage.setItem(key, value);
  }

  static get(key) {
    return localStorage.getItem(key);
  }
}

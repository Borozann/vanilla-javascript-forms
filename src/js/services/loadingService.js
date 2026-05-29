export class loadingService {
  static #loaderDOM = document.querySelector(".loader-card");

  static toggleSpinner(state) {
    if (!this.#loaderDOM) return;
    if (state) {
      this.#loaderDOM.classList.remove("hidden");
    } else {
      this.#loaderDOM.classList.add("hidden");
    }
  }
}

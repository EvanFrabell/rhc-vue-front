export class Sealed {
  #value = "";
  get value() {
    return this.#value;
  }

  constructor(value) {
    this.#value = Object.freeze(value);
  }
}

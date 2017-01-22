export default class Grocery {
  constructor(text, attributes) {
    this.text = text;
    this.attributes = attributes;
  }

  getText() {
    return this.text;
  }

  getAttributes() {
    return this.attributes;
  }
}

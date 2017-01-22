export default class Groceries {
  constructor() {
    this.groceries = [];
  }

  addGrocery(grocery) {
    return this.groceries.push(grocery);
  }

  getGroceries() {
    return this.groceries;
  }
}

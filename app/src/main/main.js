import Vue from 'vue'
import Listable from '../components/listable.js'
import Grocery from '../models/Grocery.js'
import Groceries from '../models/Groceries.js'

var list = new Listable('todo-item', 'todo', 'getText()');
var groceries = new Groceries();

groceries.addGrocery(new Grocery('Vegetables'));
groceries.addGrocery(new Grocery('Cheese'));
groceries.addGrocery(new Grocery('Potatoes'));

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: groceries.getGroceries()
  }
});

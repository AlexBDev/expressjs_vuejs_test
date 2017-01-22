import Vue from 'vue'
import Listable from '../components/listable.js'
import Grocery from '../models/Grocery.js'
import Groceries from '../models/Groceries.js'
import VueSocketio from 'vue-socket.io'

var a = Vue.use(VueSocketio, 'http://localhost:1923');
// var b = new Vue(a);
var vm = new Vue({
  el : "#chat",
  data: {
    message: '',
    listMessages: []
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    newMessageEmit: function(val){
      console.log(val);
      this.listMessages.push(val);
    }
  },
  methods: {
    sendMessage: function(val){
        // $socket is socket.io-client instance
        this.$socket.emit('my other event', this.message);
        this.message = '';
    }
  }
});

vm.use = a;

// var list = new Listable('todo-item', 'todo', 'getText()');
// var groceries = new Groceries();

// groceries.addGrocery(new Grocery('Vegetables'));
// groceries.addGrocery(new Grocery('Cheese'));
// groceries.addGrocery(new Grocery('Potatoes'));
// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     groceryList: groceries.getGroceries()
//   }
// });

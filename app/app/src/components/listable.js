import Vue from 'vue'

var list = function Listable(listName, item, attr) {
  return Vue.component(listName, {
    props: [item],
    template: '<li>{{ '+ item + '.' + attr +' }}</li>'
  });
}

export default list;

import Vue from 'vue'
import App from './App.vue'
import ColorDirect from './color';


Vue.directive('colored', ColorDirect)
export const eventEmitter = new Vue()



new Vue({
  el: '#app',
  render: h => h(App)
})




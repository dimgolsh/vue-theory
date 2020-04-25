import Vue from 'vue'
import App from './App.vue'
import ColorDirect from './color';


Vue.directive('colored', ColorDirect)


export const eventEmitter = new Vue()

Vue.filter('uppercase', (value)=>{
  return value.toUpperCase()
})

Vue.filter('add', (value)=>{
  return value + ' Yess'
})



new Vue({
  el: '#app',
  render: h => h(App)
})




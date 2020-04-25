import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from 'vue-resource'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/'
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
})



new Vue({
  el: '#app',
  render: h => h(App),
  router
})

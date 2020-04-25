import VueRouter from "vue-router";
import home from './pages/home.vue'
import Cars from './pages/Cars.vue'
export default new VueRouter({
  routes:[
    {
      path:'',
      component: home
    },
    {
      path:'/cars',
      component: Cars
    }
  ],
  mode: 'history'
})

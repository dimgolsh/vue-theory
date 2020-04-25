import VueRouter from "vue-router";
import home from './pages/home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import FormS from './pages/FormS.vue'
export default new VueRouter({
  routes:[
    {
      path:'/',
      component: home
    },
    {
      path:'/cars',
      component: Cars
    },
    {
      path:'/car/:id',
      component: Car
    },
    {
      path:'/form',
      component: FormS
    }
  ],
  mode: 'history'
})

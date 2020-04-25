import VueRouter from "vue-router";
import home from './pages/home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import FormS from './pages/FormS.vue'
import CarFull from './pages/CarFull.vue'
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
      component: Car,
      children: [
        {
          path: 'full',
          component:CarFull,
          name: 'carfull'
        }
      ]
    },
    {
      path:'/form',
      component: FormS
    }
  ],
  mode: 'history'
})

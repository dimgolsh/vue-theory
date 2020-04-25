import VueRouter from "vue-router";
import home from './pages/home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import FormS from './pages/FormS.vue'
import CarFull from './pages/CarFull.vue'
import Error from './pages/Error.vue'
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
    },
    {
      path:'/none',
      redirect: '/cars'
    },
    {
      path:'*',
      component: Error
    },

  ],
  mode: 'history',
  scrollBehavior(to,from,savedPosition){

    if (savedPosition){
      return savedPosition
    }
    if(to.hash){
      return {
        selector: to.hash
      }
    }
    return {
      x:0,
      y:700
    }
  }
})

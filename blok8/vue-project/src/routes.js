import VueRouter from "vue-router";
import home from './pages/home.vue'
//import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import FormS from './pages/FormS.vue'
import CarFull from './pages/CarFull.vue'
import Error from './pages/Error.vue'
import CarPost from './pages/CarPost.vue'
import CounterPage from './pages/CounterPage.vue'

const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'],()=>{
    resolve(
      require('./pages/Cars.vue')
    )
  })
}

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
      path:'/count',
      component: CounterPage
    },
    {
      path:'/carsf',
      component: CarPost
    },
    {
      path:'/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component:CarFull,
          name: 'carfull',
          beforeEnter(to,from,next){
            if(true){
              next(true)
            } else {
              next(false)
            }
          }
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

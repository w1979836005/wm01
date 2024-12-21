import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/video/:id',
    name: 'video',
    component: () => import(/* webpackChunkName: "about" */ '../views/VideoView.vue'),
    props:true,
    children:[
      {
        path:'info1',
        name:'info1',
        component: () => import(/* webpackChunkName: "about" */ '../views/video/Info1View.vue')
      },
      {
        path:'info2',
        name:'info2',
        component: () => import(/* webpackChunkName: "about" */ '../views/video/Info2View.vue')
      }
    ]
  }
]

const router = new VueRouter({
  //如果使用hash模式看起来就知道是一个单页应用
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  console.log('路由触发了')
  next()
})
export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import course from '../views/Course.vue'
import ge from '../views/Ge.vue'
import user from '../views/User.vue'
import Details from '../views/Details.vue'
import error from '../views/error.vue'
import count from '../views/count.vue'
const routes = [
  // 1、路由在views里面写页面，2、在父页面调用，3、在../router/index.js下配置路由信息
  // 路由传参：
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Course',
    // 路由地址
    name:'course',
    // 路由名称
    component:course,
    // 路由组件

    // 配置子路由
    children:[
      {
        // 子路由的路径不写/
        path:'Ge',
        name:'ge',
        component:ge,
      },
    ]
  },
  {
    path:'/user',
    name:'user',
    component:user
  },
  {
    // 第三种设置传参
    name:'details',
    path:'/Details/:id/:price',
    component:Details
  },
  {
    name:'count',
    path:'/count',
    component:count
  },
  {
    // 放在路由配置的最后一项
    // path是通配符
    // vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path:'/:pathMatch(.*)*',
    name:'error',
    component:error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
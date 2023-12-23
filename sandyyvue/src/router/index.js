import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'header',
    component: () => import('../views/header.vue'),
    children:[
      {
        path: "/",
        name: "test",
        component: () =>import( "../views/test.vue")
      },
      {
        path: "/aboutus",
        name: "aboutus",
        component: () =>import( "../views/aboutus.vue")
      },
      {
        path: "/product",
        name: "product",
        component: () =>import( "../views/product.vue")
      },
      {
        path: "/png",
        name: "png",
        component: () =>import( "../views/png.vue")
      },
      {path: '/product',
      name: 'product',
      component: () => import('../views/product.vue')
    },
    {path: '/contactus',
      name: 'contactus',
      component: () => import('../views/contactus.vue')
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

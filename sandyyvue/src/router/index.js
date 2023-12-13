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
        path: "/png1",
        name: "png1",
        component: () =>import( "../views/png1.vue")
      },
      {path: '/product2',
      name: 'product2',
      component: () => import('../views/product2.vue')
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

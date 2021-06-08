import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "skill" */ '../views/Skills.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Blog.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
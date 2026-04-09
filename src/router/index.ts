import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import progress from '../views/Progress.vue'
import Project_Basis from '../views/Project_Basis.vue'
import Project_SoS from '../views/Project_SoS.vue'
import Project_LiK from '../views/Project_LiK.vue'

// Typisierung der Routen mit RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
     {
        path: '/progress',
        name: 'progress',
        component: progress
     },
     {
        path: '/BasisProject',
        name: 'BasisProject',
        component: Project_Basis
     },
     {
        path: '/SoundOfSurvival',
        name: 'SoundOfSurvival',
        component: Project_SoS
     },
     {
        path: '/LightisKey',
        name: 'LightisKey',
        component: Project_LiK
     }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
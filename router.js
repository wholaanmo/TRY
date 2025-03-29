import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/login.vue'; // Ensure this path is correct
import Register from './components/register.vue';
import Home from './components/home.vue';

const routes = [
  { path: '/', redirect: '/login' }, 
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; // Fix 

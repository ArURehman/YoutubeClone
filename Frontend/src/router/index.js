import { createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue'
import History from '../views/History.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/history',
        name: 'History',
        component: History
    }
];

const router = createRouter({
    history: createWebHistory(), routes
});

export default router
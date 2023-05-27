import { createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue'
import History from '../views/History.vue'
import VideoPlay from '../views/VideoPlay.vue'
import Channel from '../views/Channel.vue'

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
    },
    {
        path: '/video',
        name: 'Video',
        component: VideoPlay
    },
    {
        path: '/channel',
        name: 'Channel',
        component: Channel
    }
];

const router = createRouter({
    history: createWebHistory(), routes
});

export default router
import { createWebHistory, createRouter} from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue'
import History from '../views/History.vue'
import VideoPlay from '../views/VideoPlay.vue'
import Channel from '../views/Channel.vue'
import Library from '../views/Library.vue'
import ChannelHome from '../views/ChannelHome.vue'
import ChannelAbout from '../views/ChannelAbout.vue'

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
        name: 'VideoPlay',
        component: VideoPlay
    },
    {
        path: '/channel',
        name: 'Channel',
        redirect: { name : 'ChannelHome'},
        component: Channel,
        children: [
            {
                path: 'home',
                name: 'ChannelHome',
                component: ChannelHome
            },
            {
                path: 'about',
                name: 'ChannelAbout',
                component: ChannelAbout
            }
        ]
    },
    {
        path: '/library',
        name: 'Library',
        component: Library
    }
];

const router = createRouter({
    history: createWebHistory(), routes
});

export default router
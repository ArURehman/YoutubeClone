import { createApp } from 'vue'
import router from './router'

import './assets/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMagnifyingGlass, faBell, faCircleUser, faHouse, faClockRotateLeft, faChevronDown, faBookmark, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faYoutube, faBars, faMagnifyingGlass, faBell, faCircleUser, faHouse, faClockRotateLeft, faChevronDown, faBookmark, faUser, faLock)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
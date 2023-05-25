import { createApp } from 'vue'
import router from './router'

import './assets/style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMagnifyingGlass, faVideo, faCircleUser, faBell } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'

library.add(faYoutube, faBars, faMagnifyingGlass, faVideo, faCircleUser, faBell)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
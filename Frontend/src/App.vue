<template>
  <div class="flex flex-col h-screen">
  <div class="h-10 flex-none">
    <Navbar @openLogin="changeLoginVisible"/>
  </div>
  <div class="flex-1 flex">
    <div class="w-40 flex-none">
      <Sidebar/>
    </div>
    <div class="flex-1 overflow-y-auto">
      <router-view/>
    </div>
  </div>
  <Login v-show="loginIsVisible" @closeLogin="changeLoginVisible"/>
</div>

</template>

<script>
import { ref } from 'vue';
import Navbar from '../src/components/Navbar.vue'
import Sidebar from '../src/components/Sidebar.vue'
import Login from './components/Login.vue';

export default{
  name: 'App',
  components: {Navbar, Sidebar, Login},
  setup(){
    let loginIsVisible = ref(false)

    const changeLoginVisible = () => {
      loginIsVisible.value = !loginIsVisible.value
    }

    return{loginIsVisible, changeLoginVisible}
  }
}

</script>
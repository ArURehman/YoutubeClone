<template>
  <div class="flex flex-col h-screen">
  <div class="h-10 flex-none">
    <Navbar/>
  </div>
  <div class="flex-1 flex">
    <div class="w-40 flex-none">
      <Sidebar/>
    </div>
    <div class="flex-1 overflow-y-auto">
      <router-view/>
    </div>
  </div>
</div>

</template>

<script>
import Navbar from '../src/components/Navbar.vue'
import Sidebar from '../src/components/Sidebar.vue'

export default{
  name: 'App',
  components: {Navbar, Sidebar},
  setup(){

  }
}

</script>
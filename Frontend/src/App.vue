<template>
  <Navbar/>
  <Sidebar/>
  <RouterView/>
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
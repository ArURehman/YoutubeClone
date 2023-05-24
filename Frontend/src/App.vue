<template>
  <Navbar/>
  <RouterView/>
</template>

<script>
import Navbar from '../src/components/Navbar.vue'

export default{
  name: 'App',
  components: {Navbar},
  setup(){

  }
}

</script>
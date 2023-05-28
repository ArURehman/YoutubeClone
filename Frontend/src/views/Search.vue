<template>
  <div class="mx-52 mt-6 flex-col">
    <SHVideo :view-desc="true" :change-styles="false"/>
  </div>
</template>

<script>
import SHVideo from '../modals/SHVideo.vue';

export default{
  name: 'Search',
  components: {SHVideo},
  data(){
    return{
      viewHeader: false
    }
  }
}

</script>
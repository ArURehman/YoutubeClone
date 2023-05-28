<template>
  <h4 class="text-white text-xs mx-52 mt-4"><span class="mr-1">Watch</span>history</h4>
  <div class="mx-52 mt-6 flex-col">
    <SHVideo :view-desc="true" :change-styles="false" :add-hover-effect="true"/>
  </div>
</template>

<script>
import SHVideo from '../modals/SHVideo.vue';

export default{
  name: 'History',
  components: {SHVideo},
  methods:{

  }
}

</script>
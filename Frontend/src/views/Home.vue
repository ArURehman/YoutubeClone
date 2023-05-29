<template>
  <div class="flex flex-wrap gap-1">
    <RcVideo/>
  </div>
</template>

<script>
import RcVideo from '../modals/RcVideo.vue'; 
import VideoPlay from './VideoPlay.vue';

export default{
  name: 'Home',
  components: {RcVideo, VideoPlay},
  methods: {
    
  }
}

</script>
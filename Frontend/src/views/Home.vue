<template>
  <div v-for="video in videos" :key="video.VideoID" class="flex flex-wrap gap-1">
    <RcVideo :video="video"/>
  </div>
</template>

<script>
import RcVideo from '../modals/RcVideo.vue'; 
import VideoPlay from './VideoPlay.vue';
import axios from 'axios';

export default{
  name: 'Home',
  components: {RcVideo, VideoPlay},
  data(){
    return{
      videos: []
    }
  },
  methods: {
    
  },
  mounted(){
    axios.get('/api/videos/home')
    .then((res) => {
      this.videos = res.data.videos;
      console.log(this.videos)
    }).catch((err) => {
      console.log(err);
    })
  }
}

</script>
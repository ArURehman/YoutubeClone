<template>
    <div class="flex px-10 gap-5 pt-4">
        <div>
            <PlayingVideo/>
            <Comments/>
        </div>
        <div class="w-[35rem]">
            <SHVideo :view-desc="false" :change-styles="true" :add-hover-effect="false"/>
        </div>
    </div>
</template>

<script>
import PlayingVideo from '../components/PlayingVideo.vue';
import Comments from '../components/Comments.vue';
import SHVideo from '../modals/SHVideo.vue';

export default{
    name: 'VideoPlay',
    components: {PlayingVideo, Comments, SHVideo},
    data(){
      return{
        
      }  
    }
}
</script>
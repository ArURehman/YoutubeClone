<template>
    <div class="w-[16rem] h-[14rem] m-0 p-2 hover:bg-searchBarGray px-3 py-2 rounded-xl ease-in-out duration-200">
        <router-link :to="{name : 'VideoPlay'}"><img class="rounded-lg" src="../images/thumbnail1.png" alt=""></router-link>
        <div class="flex justify-start gap-1">
            <router-link :to="{name : 'Channel'}"><img class="w-12 h-9 rounded-full object-cover p-1 my-1" src="../images/cameron.png" alt=""></router-link>
            <div class="text-white my-[6px] mr-5">
                <router-link :to="{name : 'VideoPlay'}"><h5 class="text-[11px] font-medium">This is the title of the video and it will be dynamic</h5></router-link>
                <router-link :to="{name : 'Channel'}"><p class="text-[10px] text-[#a5a5a5] mb-[2px] hover:text-white">Channel Name</p></router-link>
                <router-link :to="{name : 'VideoPlay'}"><p class="text-[9px] text-[#a5a5a5]">200M Views &bull; 12 months ago</p></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import VideoPlay from '../views/VideoPlay.vue';

export default{
    name: 'RcVideo',
    components: {VideoPlay},
    data(){
        return{

        }
    }
}
</script>
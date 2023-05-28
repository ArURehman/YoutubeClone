<template>
    <router-link :to="{name : 'VideoPlay'}">
        <div class="text-white flex gap-3 mb-5" :class="{'mt-3' : changeStyles},{'gap-1' : changeStyles}">
            <img class="w-[16rem] object-cover rounded-lg" :class="{'max-w-[10rem]' : changeStyles},{'h-[6rem]' : changeStyles}" src="../images/thumbnail1.png" alt="">
            <div>
                <p class="text-[0.9rem] mt-2 mb-1" :class="{'mt-[2px]' : !viewDesc},{'text-[9.9px]' : changeStyles}, {'mb-2' : changeStyles}, {'font-semibold' : changeStyles}">This is the title of the video and it will be dynamic</p>
                <p class="text-[0.55rem] text-textWhite mb-2" :class="{'mt-2' : changeStyles}">200M Views &bull; 12 months ago</p>
                <div class="flex gap-2 mb-2">
                    <img class="w-6 h-6 rounded-full" :class="{'w-5' : changeStyles}, {'h-5' : changeStyles}" src="../images/cameron.png" alt="">
                    <p class="text-[0.55rem] pt-2" :class="{'pt-[3px]' : changeStyles}">Channel Name</p>
                </div>
                <p v-if="viewDesc" class="text-[0.65rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi tempore porro ea error temporibus obcaecati sed facilis.</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default{
    props: ['viewDesc', 'changeStyles'],
    data(){
        return{
            
        }
    }
}
</script>
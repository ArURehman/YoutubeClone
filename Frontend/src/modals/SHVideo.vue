<template>
    <div ref="video" class="text-white flex gap-3 mb-5" :class="{'mt-3' : changeStyles},{'gap-1' : changeStyles}, {'hover:bg-searchBarGray px-3 py-2 rounded-xl ease-in-out duration-200' : addHoverEffect}" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <router-link :to="{name : 'VideoPlay'}"><img class="w-[16rem] object-cover rounded-lg" :class="{'max-w-[10rem]' : changeStyles},{'h-[6rem]' : changeStyles}" src="../images/thumbnail1.png" alt=""></router-link>
        <div class="w-36 flex-1">
            <div class="flex">
                <router-link :to="{name : 'VideoPlay'}"><p class="text-[0.9rem] mt-0 mb-1" :class="{'mt-[2px]' : !viewDesc},{'text-[9.9px]' : changeStyles}, {'mb-1' : changeStyles}, {'font-semibold' : changeStyles}">This is the title of the video and it will be dynamic</p></router-link>
                <button class="relative -right-32" :class="{ 'hidden': !isHovered }, {'hidden' : changeStyles}"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" size="xs" style="color: #ffffff;" /></button>
            </div>
            <p class="text-[0.55rem] text-textWhite mb-2" :class="{'mt-2' : changeStyles}">200M Views &bull; 12 months ago</p>
            <router-link :to="{name : 'Channel'}"><div class="flex gap-2 mb-2">
                <img class="w-6 h-6 rounded-full" :class="{'w-5' : changeStyles}, {'h-5' : changeStyles}" src="../images/cameron.png" alt="">
                <p class="text-[0.55rem] pt-2 text-textWhite hover:text-white" :class="{'pt-[3px]' : changeStyles}">Channel Name</p>
            </div></router-link>
            <router-link :to="{name : 'VideoPlay'}"><p v-if="viewDesc" class="text-[0.65rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At modi tempore porro ea error temporibus obcaecati sed facilis.</p></router-link>
        </div>
    </div>
</template>

<script>
export default{
    props: ['viewDesc', 'changeStyles', 'addHoverEffect'],
    data(){
        return{
            isHovered: false
        }
    }
}
</script>
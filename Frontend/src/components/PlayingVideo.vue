<template>
    <div class="text-white text-xs max-w-[70rem]">
        <video class="rounded-md w-[65rem] cursor-pointer" controls src="../images/video.mp4"></video>
        <div class="flex-col mt-2">
            <h4 class="text-sm font-medium">Vue is the title of the video and it will be changed dynamically</h4>
            <div class="flex justify-between mt-2 mb-4">
                <div class="flex gap-5">
                    <div class="flex gap-2">
                        <router-link :to="{name : 'Channel'}"><img class="w-9 h-9 rounded-full" src="../images/cameron.png" alt=""></router-link>
                        <div >
                            <router-link :to="{name : 'Channel'}"><p class="text-[12px] my-[2px]">Channel Name</p></router-link>
                            <p class="text-[9px] text-[#a5a5a5]">200M Subscribers</p>
                        </div>
                    </div>
                    <button class="relative bg-searchBarGray w-20 h-8 top-1 rounded-2xl">Subscribe</button>
                </div>
                <div class="flex justify-end gap-4">
                    <div class="flex gap-5 bg-searchBarGray px-3 py-[6px] h-8 rounded-2xl">
                        <button class="border-r-2 border-r-white pr-5"><font-awesome-icon icon="fa-solid fa-thumbs-up" size="md" style="color: #ffffff;" /></button>
                        <button><font-awesome-icon icon="fa-solid fa-thumbs-down" size="md" style="color: #ffffff;" /></button>
                    </div>
                    <button class="bg-searchBarGray px-3 py-[6px] h-8 rounded-2xl">Save</button>
                </div>
            </div>
        </div>
        <div class="bg-searchBarGray p-2 rounded-xl">
            <p class="text-[11px] text-[#a5a5a5]">200M Views &bull; 12 months ago</p>
            <p class="mb-2 pt-[2px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam pariatur consequuntur recusandae, esse doloribus nobis. Alias at soluta dolor itaque non in blanditiis? Adipisci cupiditate eaque dolor dolore incidunt nemo.</p>
            <button class="bg-almostBlack px-[10px] py-[2px] h-8 rounded-2xl"><font-awesome-icon class="mt-[1px] mr-1" icon="fa-solid fa-chevron-down" size="sm" style="color: #ffffff;" />Show More</button>
        </div>
    </div>
</template>

<script>

export default{
    
}
</script>
<template>
    <div class="w-56 h-[12.5rem] m-0 p-2">
        <img class="rounded-lg" src="../images/thumbnail1.png" alt="">
        <div class="flex justify-start gap-1">
            <img class="w-12 h-9 rounded-full object-cover p-1 my-1" src="../images/cameron.png" alt="">
            <div class="text-white my-[6px] mr-5">
                <h5 class="text-[11px] font-medium">This is the title of the video and it will be dynamic</h5>
                <p class="text-[10px] text-[#a5a5a5] mb-[2px]">Channel Name</p>
                <p class="text-[9px] text-[#a5a5a5]">200M Views &bull; 12 months ago</p>
            </div>
        </div>
    </div> 
</template>

<script>

export default{
    name: 'RcVideo',
    setup(){

    }
}
</script>
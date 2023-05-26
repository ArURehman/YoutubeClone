<template>
    <nav class="text-white bg-almostBlack w-40 h-screen p-2 overflow-y-auto text-[10px]">
        <div class="my-1 bg-almostBlack w-full h-8 px-3 py-2 hover:bg-gray hover:rounded-lg ease-in-out duration-200 cursor-pointer">
            <router-link :to="{ name : 'Home' }"><button class="my-auto">
                <font-awesome-icon icon="fa-solid fa-house" size="lg" style="color: #ffffff;" /><span class="mx-4">Home</span>
            </button></router-link>
        </div>
        <div class="my-1 bg-almostBlack w-full h-8 px-3 py-2 hover:bg-gray hover:rounded-lg cursor-pointer">
            <button class="my-auto">
                <router-link :to="{ name : 'History' }"><font-awesome-icon icon="fa-solid fa-clock-rotate-left" size="lg" style="color: #ffffff;" /><span class="mx-4">History</span></router-link>
            </button>
        </div>
        <hr class="border-none h-[2px] bg-gray my-2">
        <div class="my-1 w-full pt-1 pb-2">
            <h4 class="text-[11px]  pl-3  mb-2">Subscriptions</h4>
            <!-- The following will be wrapped in a router-link tag and will act as a way of navigating to the /Channels page -->
            <button class="flex justify-start gap-2 py-[6px] my-1 hover:bg-gray hover:rounded-lg cursor-pointer h-7 w-full  pl-3"><img class="w-4 h-4 rounded-full" src="../images/cameron.png" alt=""><span>Channel Name</span></button>
            <ShowMore/>
        </div>
        <hr class="border-none h-[2px] bg-gray my-1">
        <div class="my-1 w-full pt-1 pb-2">
            <h4 class="text-[11px]  pl-3  mb-2">Libraries</h4>
            <!-- The following will be wrapped in a router-link tag and will act as a way of navigating to the /libraries page -->
            <button class="flex justify-start gap-2 bg-almostBlack w-full h-7 py-[6px] hover:bg-gray hover:rounded-lg ease-in-out duration-200 cursor-pointer px-3 mt-2"><font-awesome-icon class="mt-[1px]"  icon="fa-solid fa-bookmark" size="lg" style="color: #ffffff;" /><span>Library Name</span></button>
            <ShowMore/>
        </div>
    </nav>
</template>

<script>
import ShowMore from '../modals/ShowMore.vue'

export default{
    name: 'Sidebar',
    components: {ShowMore},
    setup(){
        
    }
}
</script>
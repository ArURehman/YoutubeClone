<template>
    <div class="text-xs text-white absolute right-8 top-8 w-[12rem] h-[20rem] bg-searchBarGray rounded-xl z-10 px-[1px]">
        <div class="flex">
            <img class="w-8 h-8 rounded-full ml-3 mr-2 my-2" src="../images/cameron.png" alt="">
            <div class="mt-[0.4rem]">
                <p class="text-[0.8rem]">Username</p>
                <p class="text-[0.65rem] text-textWhite">example@email.com</p>
            </div>
        </div>
        <div class="bg-almostBlack w-full h-[79%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar-track-searchBarGray scrollbar-thumb-rounded">
            <button class=" my-1 bg-almostBlack w-full h-9 px-3 py-1 hover:bg-gray hover:rounded-sm cursor-pointer flex justify-start ease-in-out duration-200">
                <font-awesome-icon class="mt-2 ml-1" icon="fa-solid fa-user" size="xs" /><span class="mx-3 mt-[6px]">Your Channel</span>
            </button>
            <hr class="border-none h-[2px] bg-gray my-1">   
            <div class="">
                <p class="text-sm ml-1 font-medium">Notiifications & Preferences</p>
                <PrefCheck/>
            </div>
            <hr class="border-none h-[2px] bg-gray my-1">   
            <button class=" my-1 bg-almostBlack w-full h-9 px-3 py-1 hover:bg-gray hover:rounded-sm cursor-pointer flex justify-start ease-in-out duration-200">
                <font-awesome-icon class="mt-2 ml-1" icon="fa-solid fa-right-from-bracket" size="xs" style="color: #ffffff;" /><span class="mx-3 mt-[6px]">Logout</span>
            </button>
            <button class=" my-1 bg-almostBlack w-full h-9 px-3 py-1 hover:bg-gray hover:rounded-sm cursor-pointer flex justify-start ease-in-out duration-200">
                <font-awesome-icon class="mt-2 ml-1" icon="fa-solid fa-trash-can" size="xs" style="color: #ff0000;" /><span class="mx-3 mt-[6px] text-[#ff0000]">Delete Channel</span>
            </button>
        </div>
    </div>

</template>

<script>
import PrefCheck from '../modals/PrefCheck.vue';

export default{
    name: 'UserMenu',
    components: {PrefCheck}
}

</script>
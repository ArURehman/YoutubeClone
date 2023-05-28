<template>
    <div class="absolute bg-gradient-to-b from-searchBarGray from-20% to-almostBlack h-[34rem] w-[17rem] p-5 mr-7 ml-6 rounded-xl text-white flex-col">
        <img class="rounded-xl mb-1" src="../images/thumbnail1.png" alt="">
        <h4 class="text-[1rem] font-medium px-3 mt-3">Playlist Name</h4>
        <p class="text-[11px] text-textWhite px-3 mb-3">69 Videos</p>
        <div class="px-3 mt-5 text-[0.7rem] flex justify-around gap-2">
            <button class="text-almostBlack bg-white px-8 py-1 rounded-3xl hover:font-medium ease-out duration-200">Play all</button>
            <button class="text-white bg-almostBlack px-[2.1rem] py-1 rounded-3xl border-1 hover:font-medium border-almostBlack ease-in-out duration-200">Delete</button>
        </div>
    </div>
</template>

<script>

export default{
    name: 'LibInfo'
}
</script>
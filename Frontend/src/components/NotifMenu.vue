<template>
    <div class="absolute right-[4.5rem] top-7 w-[17rem] h-[20rem] bg-searchBarGray rounded-xl z-10 px-[1px]">
        <p class="my-2 mx-3 text-white text-xs">Notifications</p>
        <div class="bg-almostBlack w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray scrollbar-track-searchBarGray scrollbar-thumb-rounded">
            <ListViewVid/>
        </div>
    </div>
</template>

<script>
import ListViewVid from './ListViewVid.vue';
export default{
    name: 'NotifMenu',
    components: {ListViewVid}
}
</script>
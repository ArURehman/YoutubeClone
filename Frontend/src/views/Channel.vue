<template>
    <div class="">
        <ChannelNav/>
        <div class="px-[5.7rem]"><router-view/></div>
    </div>
</template>

<script>
import ChannelNav from '../components/ChannelNav.vue';
export default{
    name: 'Channel',
    components: {ChannelNav},
    setup(){

    }
}
</script>
<template>
    <div class="pt-2 flex flex-wrap">
        <div class="mb-2">
            <RcVideo :dec-size="true"/>
        </div>
    </div>
</template>

<script>
import RcVideo from '../modals/RcVideo.vue';

export default{
    name: 'ChannelHome',
    components: {RcVideo}
}
</script>
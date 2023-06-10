<template>
    <div class="mt-2">
        <div class=""><LibInfo/></div>
        <div class="mr-7 pl-3 pt-1 ml-[19rem]">
            <SHVideo :view-desc="true" :change-styles="false" :add-hover-effect="true" :is-library="true"/>
        </div>
    </div>
</template>

<script>
import LibInfo from '../modals/LibInfo.vue';
import SHVideo from '../modals/SHVideo.vue';

export default{
    name: 'Library',
    components: {LibInfo, SHVideo}
}

</script>
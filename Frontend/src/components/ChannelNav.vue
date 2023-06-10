<template>
    <div class="text-white">
        <img class="object-cover h-[15rem] w-full" src="../images/banner.png" alt="">
        <div class="flex justify-around w-full my-7 mx-auto px-10 mb-10">
            <div class="flex justify-start gap-5">
                <img class="w-24 h-24 rounded-full border-2 border-white object-cover" src="../images/cameron.png" alt="">
                <div class="mt-1">
                    <h4 class="text-[1.1rem] mb-1">Channel Name</h4>
                    <p class="text-[11px] text-textWhite">200M Subscribers &bull; 3K Videos</p>
                    <nav class="flex gap-4 mt-3">
                        <router-link :to="{ name : 'ChannelHome' }"><span class="text-xs text-textWhite bg-searchBarGray px-3 py-[2px] rounded-3xl hover:bg-gray ease-in-out duration-300">Home</span></router-link>
                        <router-link :to="{ name : 'ChannelAbout' }"><span class="text-xs text-textWhite bg-searchBarGray px-3 py-[2px] rounded-3xl hover:bg-gray ease-in-out duration-300">About</span></router-link>
                        <router-link  v-if="isChannelUser" :to="{ name : 'Upload' }"><span class="text-xs text-textWhite bg-searchBarGray px-3 py-[2px] rounded-3xl hover:bg-gray ease-in-out duration-300">Upload</span></router-link>
                        <button v-show="isChannelUser"><span class="text-xs text-textWhite bg-almostBlack px-3 py-[2px] rounded-3xl hover:bg-[#ff0000] ease-in-out duration-300 border-2 border-[#ff0000]">Delete</span></button>
                    </nav>
                </div>
            </div>
            <button @click="toggleSubscribe" ref="sub" class="text-xs bg-searchBarGray h-9 px-4 mt-6 rounded-2xl hover:bg-gray ease-in-out duration-300">Subscribe</button>
        </div>
        <div class="border-b-2 border-b-gray flex justify-around mb-2"></div>
    </div>
</template>

<script>

export default{
    name: 'ChannelNav',
    data(){
        return{
            isChannelUser: false,
            isSubscibed: false
        }
    },
    methods: {
        toggleSubscribe(){
            this.isSubscibed = !this.isSubscibed
            this.$refs.sub.innerText = this.isSubscibed ? 'Subscribed' : 'Subscribe'
        }
    }
}
</script>
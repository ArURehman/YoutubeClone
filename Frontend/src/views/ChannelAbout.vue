<template>
    <div class="text-white grid grid-cols-3 text-xs">
        <div class="col-span-3 sm:col-span-2 flex-col justify-start pr-24">
            <div class="flex justify-start gap-2 py-2">
                <h5 class="text-sm font-medium my-2">Description</h5>
                <button class="text-xs text-textWhite bg-searchBarGray px-3 rounded-3xl hover:bg-gray ease-in-out duration-300" @click="handleDescEdit">Edit</button>
            </div>
            <P class="text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis corrupti harum quisquam voluptatum quas perspiciatis rem, blanditiis est obcaecati, voluptate sed, provident hic eos doloremque illo nesciunt repellat cumque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem ex mollitia quas obcaecati, adipisci, in assumenda fuga sapiente blanditiis sed perspiciatis numquam necessitatibus dolorem temporibus dicta non consectetur molestiae? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis minus dolore iusto optio rem, dicta eaque perferendis voluptatum maiores eligendi omnis id dolor expedita nostrum dolores repellat quidem. Quis, ipsa.</P>
            <hr class="w-full bg-almostBlack my-7 border-1 border-gray">
            <div class="flex justify-start gap-2 py-2">
                <h5 class="text-sm font-medium my-2">Details</h5>
                <button class="text-xs text-textWhite bg-searchBarGray px-3 rounded-3xl hover:bg-gray ease-in-out duration-300">Edit</button>
            </div>
            <div class="text-xs flex gap-4 mt-2">
                <p class="text-[#a5a5a5]">For business inquiries: </p>
                <p>example@email.com</p>
            </div>
            <hr class="w-full bg-almostBlack my-7 border-1 border-gray">
            <div class="flex justify-start gap-1">
                <h5 class="text-sm font-medium my-2">Links</h5>
                <button class="hover:bg-blue-500 hover:bg-opacity-10 px-4 rounded-full"><font-awesome-icon icon="fa-solid fa-plus" size="xs" style="color: #377cb7;" /></button>
                <button class="hover:bg-blue-500 hover:bg-opacity-10 px-4 rounded-full"><font-awesome-icon icon="fa-solid fa-minus" size="xs" style="color: #377cb7;" /></button>
            </div>
            <div class="text-xs mt-2 text-blue-600 pr-48 flex justify-start flex-wrap gap-2">
                <a class="mr-10 hover:bg-blue-400 hover:bg-opacity-20 px-3 py-2 rounded-2xl" href="http://twitter.com" target="_blank">Twitter</a>
            </div>
        </div>
        <div class="col-span-3 sm:col-span-1">
            <h5 class="text-sm font-medium my-2">Stats</h5>
            <p><span class="mr-2">Joined</span>April 29, 2015</p>
        </div>
    </div>
</template>

<script>

export default{
    name: 'ChannelAbout',
    data(){
        return{
            channel_desc: "",
            edited_desc: "",
            editingDesc: false
        }
    },
    methods: {
        handleDescEdit(){
            this.edited_desc = this.channel_desc
            this.editingDesc = true
        },
        saveDescEdit(){
            this.channel_desc = this.edited_desc
            this.editingDesc = false
        },
        handleDescCancel(){
            this.edited_desc = ""
            this.editingDesc = false
        }
    }
}
</script>
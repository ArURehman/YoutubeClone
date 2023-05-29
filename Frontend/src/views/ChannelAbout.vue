<template>
    <div class="text-white grid grid-cols-3 text-xs">
        <div class="col-span-3 sm:col-span-2 flex-col justify-start pr-24">
            <div class="flex justify-start gap-2 py-2">
                <h5 class="text-sm font-medium my-2">Description</h5>
                <button v-if="!editingDesc" class="text-xs text-textWhite bg-searchBarGray px-3 rounded-3xl hover:bg-gray ease-in-out duration-300" @click="handleDescEdit">Edit</button>
            </div>
            <P v-if="!editingDesc" class="text-xs mt-1">{{ channel_desc }}</P>
            <div v-if="editingDesc" class="">
                <input v-model="edited_desc" class="h-auto w-full min-h-10 p-2 bg-searchBarGray rounded" ref="descInput" type="text">
                <div class="flex justify-end gap-2 mt-1">
                    <button @click="handleDescCancel" class="py-2 px-3 bg-searchBarGray hover:bg-gray ease-in-out duration-300 rounded-2xl">Cancel</button>
                    <button @click="handleDescSave" class="py-2 px-3 bg-highlightBlue hover:bg-[#478ac4] ease-in-out duration-300 rounded-2xl">Save</button>
                </div>
            </div>
            <hr class="w-full bg-almostBlack my-7 border-1 border-gray">
            <div class="flex justify-start gap-2 py-2">
                <h5 class="text-sm font-medium my-2">Details</h5>
                <button v-if="!editingEmail" @click="handleEmailEdit" class="text-xs text-textWhite bg-searchBarGray px-3 rounded-3xl hover:bg-gray ease-in-out duration-300">Edit</button>
            </div>
            <div class="text-xs flex gap-4 mt-2">
                <p class="text-[#a5a5a5]" :class="{'mt-2' : editingEmail}">For business inquiries: </p>
                <p v-if="!editingEmail">{{ channel_email }}</p>
                <div v-if="editingEmail" class="">
                    <input v-model="edited_email" class="h-auto w-full min-h-10 p-2 bg-searchBarGray rounded" ref="descInput" type="text">
                    <div class="flex justify-end gap-2 mt-1">
                        <button @click="handleEmailCancel" class="py-2 px-3 bg-searchBarGray hover:bg-gray ease-in-out duration-300 rounded-2xl">Cancel</button>
                        <button @click="handleEmailSave" class="py-2 px-3 bg-highlightBlue hover:bg-[#478ac4] ease-in-out duration-300 rounded-2xl">Save</button>
                </div>
            </div>
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
            editingDesc: false,
            channel_email: "",
            edited_email: "",
            editingEmail: false
        }
    },
    methods: {
        handleDescEdit(){
            this.edited_desc = this.channel_desc
            this.editingDesc = true
        },
        handleDescSave(){
            this.channel_desc = this.edited_desc
            this.editingDesc = false
        },
        handleDescCancel(){
            this.edited_desc = ""
            this.editingDesc = false
        },
        handleEmailEdit(){
            this.edited_email = this.channel_email
            this.editingEmail = true
        },
        handleEmailSave(){
            this.channel_email = this.edited_email
            this.editingEmail = false
        },
        handleEmailCancel(){
            this.edited_email = ""
            this.editingEmail = false
        }
    }
}
</script>
<template>
    <div class="flex justify-start gap-2 text-xs mt-4 font-medium" :class="{'pl-6' : isReply}, {'mt-3' : isReply}, {'pr-5' : isReply}">
        <img class="w-7 h-7 rounded-full" :class="{'w-4' : isReply}, {'h-4' : isReply}" src="../images/cameron.png" alt="">
        <div>
            <input ref="textInput" @click="() => commActive = true" :placeholder="type" class="bg-almostBlack border-b-2 border-b-gray w-[47.8rem] h-6 pb-[1px]" :class="{'w-[35rem]' : isReply}" required type="text">
            <div class="flex justify-end gap-3 my-3 mx-1" :class="{'hidden' : !commActive}">
                <button @click="toggleCommActive" class="hover:bg-searchBarGray px-3 py-2 rounded-2xl ease-in-out duration-300">Cancel</button>
                <button class="bg-[#2C8EBD] px-3 py-2 rounded-2xl text-black">{{ type }}</button>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'MakeComments',
    props: ['isReply', 'type'],
    data(){
        return{
            commActive: false
        }
    },
    methods: {
        toggleCommActive(){
            this.commActive = !this.commActive
            this.$refs.textInput.value = ''
            if(this.isReply) this.$emit('closeReply')
        }
    }

}
</script>
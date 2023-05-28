<template>
    <div class="mt-3 font-medium flex w-full justify-between gap-2">
            <div class="w-12"><img class="w-7 h-7 mt-2 rounded-full" src="../images/cameron.png" alt=""></div>
            <div>
                <p class="text-[0.7rem] text-[#a5a5a5]">Username &bull; 20 years ago</p>
                <p class="pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias accusamus voluptates dicta ex. Incidunt praesentium, voluptates quas earum consequatur atque laborum molestias, inventore fugiat ut eius tempore? Ad, eaque.</p>
                <div class="flex gap-3 mt-1">
                    <button><font-awesome-icon icon="fa-solid fa-thumbs-up" size="xs" style="color: #a5a5a5;" /></button>
                    <button><font-awesome-icon icon="fa-solid fa-thumbs-down" size="xs" style="color: #a5a5a5;" /></button>
                    <button @click="toggledReply" class="text-[#a5a5a5]">Reply</button>
                </div>
                <MakeComment @closeReply="toggledReply" v-if="reply" :is-reply="true" type="Reply"/>
                <button v-if="!reply" class="mt-2 text-highlightBlue rounded-2xl px-2 py-1 hover:bg-[#a9d1f5] hover:bg-opacity-20">Replies<font-awesome-icon class="ml-1" icon="fa-solid fa-chevron-down" size="xs" style="color: #377cb7;" /></button>
            </div>
        </div>
</template>

<script>
import MakeComment from './MakeComment.vue';

export default{
    name: 'CommentList',
    components: {MakeComment},
    data(){
        return{
            reply: false
        }
    },
    methods: {
        toggledReply(){
            this.reply = !this.reply
        }
    }
}
</script>
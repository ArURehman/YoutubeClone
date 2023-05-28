<template>
    <div class="text-white text-xs mt-6 font-semibold">
        <div>
            <h4>9999 Comments</h4>
            <MakeComment :is-reply="false" type="Comment"/>
        </div>
        <div class="mt-2">
            <CommentList :is-reply="false"/>
        </div>
    </div>
</template>

<script>
import MakeComment from '../modals/MakeComment.vue';
import CommentList from '../modals/CommentList.vue';

export default{
    name: 'Comments',
    components: {MakeComment, CommentList},
    data(){
        return{

        }
    }
}
</script>
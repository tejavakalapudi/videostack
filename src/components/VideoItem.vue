<template>
    <li class="list-group-item media" @click="itemClicked">
        <img class="mr-3" :src="thumbnailUrl"/>
        <div class="media-body">
            {{video.snippet.title}}
        </div>
    </li>
</template>

<script>
    export default {
        name: 'VideoItem',
        props: {
            video : Object
        },
        computed: {
            thumbnailUrl(){
                return this.video.snippet.thumbnails.default.url;
            }
        },
        methods:{
            itemClicked(){
                this.$emit('onItemClicked', this.video);
            }
        }
    }
</script>

<style scoped>
    li{
        display: flex;
        cursor: pointer;
    }

    li:hover {
        background-color: #eee;
    }
</style>



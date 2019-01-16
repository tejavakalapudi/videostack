<template>
    <li class="list-group-item media" @click="setSelectedVideo(video)">
        <img class="mr-3" :src="thumbnailUrl"/>
        <div class="media-body">
            {{video.snippet.title}}
        </div>
    </li>
</template>

<script>
    import { mapActions } from 'vuex';
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
        methods: mapActions( ['setSelectedVideo'] )
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



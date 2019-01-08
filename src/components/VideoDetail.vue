<template>
    <div v-if="video" class="col-md-8">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe
                class="embed-responsive-item" 
                :src="videoUrl" 
                allowfullscreen
            ></iframe>
        </div>
        <div class="details">
            <h3>{{video.snippet.title}}</h3>
            <p>{{video.snippet.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VideoDetail',
        props: {
            video: Object
        },
        computed:{
            videoUrl(){
                return `https://www.youtube.com/embed/${this.video.id.videoId}`;
            }
        }
    }
</script>

<style scoped>
    .details{
        margin-top: 10px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
</style>


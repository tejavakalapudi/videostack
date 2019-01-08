<template>
    <div class='container'>
        <SearchBar @onSearchTermChange="searchTermChanged"/>
        <div class="row">
            <VideoDetail :video="selectedVideo"/>
            <VideoList :videos="videos" @onVideoClicked="videoClicked"/>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';

    const API_KEY = 'AIzaSyAMGo6Poi_GIdZ3yl-7-p3MHnt0s0NdudA';

    export default {
        name: 'App',
        components: {
            SearchBar,
            VideoList,
            VideoDetail
        },
        data(){
            return {
                videos: [],
                selectedVideo: null
            };
        },
        methods:{
            searchTermChanged( value ){
                axios.get('https://www.googleapis.com/youtube/v3/search',{
                    params:{
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: value
                    }
                })
                .then((res) => {
                    this.videos = res.data.items;
                });
            },
            videoClicked(video){
                this.selectedVideo = video;
            }
        }
    }
</script>


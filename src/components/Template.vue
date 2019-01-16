<template>
    <div class="row">
        <VideoDetail :video="getSelectedVideo"/>
        <VideoList :videos="getVideoList" />
    </div>
</template>

<script>
    import VideoList from './VideoList';
    import VideoDetail from './VideoDetail';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Template',
        components: {
            VideoList,
            VideoDetail
        },
        computed: mapGetters([
                'getSelectedVideo',
                'getVideoList'
            ])
    }
</script>

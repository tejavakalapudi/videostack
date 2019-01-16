import axios from 'axios';

const state = {
    selectedVideo: null,
    videoList: []
}

const getters = {
    getSelectedVideo: (state) => {
        return state.selectedVideo;
    },
    getVideoList: (state) => {
        return state.videoList;
    }
}

const mutations = {
    setVideoList: (state, videos) => {
        state.videoList = videos;
    },
    setSelectedVideo: (state, video) => {
        state.selectedVideo = video;
    }
}

const API_KEY = 'AIzaSyAMGo6Poi_GIdZ3yl-7-p3MHnt0s0NdudA';

const actions = {
    fetchVideosBySearchTerm : ( { commit }, input) => {
        axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{
                key: API_KEY,
                type: 'video',
                part: 'snippet',
                q: input.target.value
            }
        })
        .then((res) => {
            commit('setVideoList', res.data.items);
        });
    },
    setSelectedVideo : ({ commit }, video) => {
        commit('setSelectedVideo', video);
    }
}


export default {
    state, 
    getters,
    mutations,
    actions
}
import Vue from 'vue';
import VueX from 'vuex';
import VideoStore from '../modules/videos';

Vue.use(VueX);

export default new VueX.Store({
   modules:{
       VideoStore
   }
});
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    loading: {
      state: false,
      title: '',
      color: ''
    }
  },
  mutations: {
    showLoading(state, payload){
      state.loading.title = payload.title;
      state.loading.color = payload.color;
      state.loading.state = true;
    },
    hiddenLoading(state, payload){
      state.loading.state = false;
      state.loading.title = '';
      state.loading.color = payload.color;
    }
  },
  actions: {
  },
  modules: {
  }       
})

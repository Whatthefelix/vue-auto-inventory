import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: localStorage.getItem('jwt')
  },

  mutations: {
    login (state, user) {
      state.user = user;
    },

    logout (state) {
      localStorage.removeItem('jwt');
      state.user = undefined;
    }
  }
});

export default store;

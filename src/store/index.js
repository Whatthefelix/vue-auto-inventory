import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: undefined
  },

  mutations: {
    login (state, user) {
      state.user = user;
    },

    logout (state, user) {
      state.user = undefined;
    }
  }
});

export default store;

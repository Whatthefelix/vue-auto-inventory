<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',

  methods: {
    checkUser () {
      // check JWT
      if (localStorage.getItem('jwt')) {
        // set state user
        this.$store.commit('login', localStorage.getItem('jwt'));
      } else {
        this.$router.push('/');
      }
    }
  },

  created () {
    if (localStorage.getItem('jwt')) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwt');
    }
    this.checkUser();
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

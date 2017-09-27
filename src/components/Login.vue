<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <cd-input type="text" name="username" placeholder="username"></cd-input>
    <cd-input type="password" name="password" placeholder="password"></cd-input>


    <cd-button
    @click="authenticate()"
    >
      Login
    </cd-button>
  </div>
</template>

<script>
import CdInput from '@/components/CdInput';
import CdButton from '@/components/CdButton';

import axios from 'axios';

export default {
  name: 'login',

  components: {
    CdInput,
    CdButton
  },

  data () {
    return {
      msg: 'Login',
      loading: false,
      username: undefined,
      password: undefined,
      message: undefined
    };
  },

  methods: {
    async authenticate () {
      console.log('pls');
      try {
        this.loading = true;
        const user = await axios.post('localhost:3000/signin', {
          username: this.username,
          password: this.password
        });
        console.log(user);
      } catch (error) {
        this.message = error.message;
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  },

  computed: {
    user () {
      return this.$store.user;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

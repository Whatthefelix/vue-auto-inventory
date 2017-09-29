<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <cd-input type="text" v-model="username" name="username" placeholder="username"></cd-input>
    <cd-input type="password" v-model="password" name="password" placeholder="password"></cd-input>


    <cd-button
    @click="authenticate()"
    >
      Login
    </cd-button>
    {{message}}
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
      try {
        this.loading = true;

        let authOptions = {
          method: 'POST',
          url: 'http://localhost:3000/signin',
          data: {
            username: this.username,
            password: this.password
          },
          headers: {
            'Content-Type': 'application/json'
          },
          json: true
        };

        const response = await axios(authOptions);
        const userResponse = response.data;

        if (userResponse.success === true) {
          localStorage.setItem('jwt', userResponse.token);
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwt');
          this.$store.commit('login', userResponse.token);
          this.$router.push({
            name: 'Inventory'
          });
        } else {
          this.message = userResponse.message;
        }

        // console.log(user);
      } catch (error) {
        this.message = error.message;
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    checkUser () {
      if (this.$store.state.user) {
        this.$router.push('/inventory');
      }
    }
  },

  mounted () {
    this.checkUser();
  },

  computed: {
    user () {
      return this.$store.state.user;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

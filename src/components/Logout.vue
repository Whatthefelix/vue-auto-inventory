<template>
	<cd-button
		@click="logout"
    name="logout"
	>
		logout
	</cd-button>
</template>

<script>
import CdButton from '@/components/CdButton';

export default {
  name: 'logout',

  components: {
    CdButton
  },

  data () {
    return {

    };
  },

  methods: {
    async logout () {
      localStorage.removeItem('jwt');
      this.$store.commit('logout');
      this.$router.push('/');
    }
  }
};
</script>

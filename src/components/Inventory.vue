<template>
  <div>
    {{ inventory }}
    <div class="logout">
      <button @click="logout()">
        logout
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'inventory',

  data () {
    return {
      inventory: undefined
    };
  },
  methods: {
    logout () {
      this.$store.commit('logout');
    },

    async getInventory () {
      try {
        let inventoryOptions = {
          method: 'GET',
          url: 'http://localhost:3000/api/cars'
        };

        this.inventory = await axios(inventoryOptions);
      } catch (error) {
        console.log(error);
      }
    }
  },

  mounted () {
    this.getInventory();
  }
};
</script>
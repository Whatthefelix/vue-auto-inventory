<template>
  <button
  class="button"
  v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'cd-button',

  data () {
    return {

    };
  }
};
</script>
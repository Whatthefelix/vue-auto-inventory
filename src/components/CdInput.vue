<template>
  <div class="">
    <input
      v-for="input in inputs"
      v-if="input.type === type"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :type="input.type"
      :name="name"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {

  name: 'cd-input',

  props: {
    placeholder: String,
    name: String,
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    value: String
  },

  data () {
    return {
      inputs: [{
        type: 'text'
      }, {
        type: 'number'
      }, {
        type: 'password'
      }]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

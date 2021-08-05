<template>
  <div>
    <input :value="value" @input="input" />
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    input() {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style>
</style>
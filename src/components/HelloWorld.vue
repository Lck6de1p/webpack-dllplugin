<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input :value="value" @input="input">
    <div v-show="show">看不见我看不见我</div>
    <button @click="handleClickInSon">{{btnName}}</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
   model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    msg: String,
    show: Boolean,
    value: String,
  }, 
  methods: {
    handleClickInSon() {
      this.$emit('handleClickInFather')
    },
    input() {
      console.log(event.target.value)
      this.$emit('input', event.target.value);
    }
  },
  computed: {
    btnName() {
      return this.show ? '隐藏' : '显示'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

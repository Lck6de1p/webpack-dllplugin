<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below123
      </p>
       <el-select v-model="value1" multiple  placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SelfInput v-model="msg" />
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SelfInput from './components/SelfInput.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SelfInput
  },
  data() {
    return {
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
        msg: '123'
    }
  },
  methods: {
    handleClick() {
      console.log(this.msg)
    }
  }
}
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

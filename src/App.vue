<template>
  <div id="app">
    <ThreeComponent/>
  </div>
</template>

<script>
import ThreeComponent from './components/ThreeComponent.vue'
export default {
  name: 'App',
  components: {
    ThreeComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

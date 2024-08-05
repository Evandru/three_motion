<template>
  <div id="app">
    <ThreeComponent/>
    <LoginComponent class="login" :style="{opacity: logged ? 0 : 1}" @confirm="logged=true;"/>
  </div>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'
import ThreeComponent from './components/ThreeComponent.vue'
export default {
  name: 'App',
  components: {
    LoginComponent,
    ThreeComponent,
  },
  data(){
    return {
      logged: false,
    }
  },
}
</script>

<style>
body{
  margin:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width:100vw;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login{
  transition: ease-out 1s;
}
</style>

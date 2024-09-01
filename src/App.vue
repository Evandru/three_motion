<template>
  <div id="app">
    <InitialPage/>
  </div>
</template>

<script>
import InitialPage from './Initial_page/InitialPage.vue'
export default {
  name: 'App',
  components: {
    InitialPage,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Grotesk:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

.font_montserrat{
  font-family: "Montserrat" !important;
}
.font_space{
  font-family: "Space Grotesk" !important;
}

body{
  margin:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width:100vw;
  min-height:100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-x: hidden !important;
}

.maximize{
  height:100vh; 
  width:100vw;
}

.login{
  transition: ease-out 1s;
}
</style>

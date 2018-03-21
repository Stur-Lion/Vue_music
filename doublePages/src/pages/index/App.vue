<template>
  <div id="app">
    <img src="./assets/logo.png">
    <heada></heada>
  </div>
</template>

<script>
  import heada from '@/components/head'
export default {
  name: 'App',
  created(){

  },
  components:{
    heada
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

<template>
  <div id="app">
    <mheader></mheader>
    <router-view/>
  </div>
</template>

<script>
import mheader from 'components/commonModel/mheader'
export default {
  name: 'App',
  components:{
    mheader
  }
}
</script>

<style lang="scss" scoped type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 24px;
}
</style>

<template>
  <div id="app">
    <mheader></mheader>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import mheader from 'components/commonModel/mheader'
import tab from 'components/commonModel/tab'
export default {
  name: 'App',
  components:{
    mheader,tab
  }
}
</script>

<style lang="scss" scoped type="text/scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 24px;
}
</style>

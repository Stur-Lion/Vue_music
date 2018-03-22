<template>
  <div id="app">
    <div class="topFloat">
      <mheader></mheader>
      <tab></tab>
    </div>
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
  font-family: '楷体', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 24px;
  height: 100%;
}
.topFloat{
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
#paddingBox{
  background-color: rgb(244, 244, 244);
  height: 100%;
  box-sizing: border-box;
  padding-top: 210px;
  display: block;
}
</style>

<template>
  <div class="header">
    <img src="/static/img/logo.jpg" alt="">
    <span>Lion Music</span>
  </div>
</template>

<script>
export default {
  name: 'mheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/scss">
  @import './../../common/conmmon';
  .header{
    text-align: center;
    background-color: #2f9dff;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      display: inline-block;
      width: 80px;
      border-radius: 40px;
      margin-right: 20px;
    }
    span{
      color: $mainFontColor;
      font-size: 40px;
      line-height: 120px;
      display: inline-block;
    }
  }
</style>

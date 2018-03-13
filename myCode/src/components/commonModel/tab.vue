<template>
  <div id="tab" class="tabBox">
    <router-link tag="div" to="/recommend" class="tab-item">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" to="/singer" class="tab-item">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" to="/rank" class="tab-item">
      <span>排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="tab-item">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'mheader',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
  @import './../../common/conmmon';
  .tabBox{
    width: 100%;
    height: 90px;
    font-size: 0;
    .tab-item{
      display: inline-block;
      width: 25%;
      text-align: center;
      font-size: 32px;
      line-height: 80px;
      &.router-link-active{
        color: $mainFontColor;
        box-sizing: border-box;
        height: 100px;
        span{
          display: inline-block;
          line-height: 60px;
          border-bottom: 5px solid $mainFontColor;
        }
      }
    }
  }
</style>

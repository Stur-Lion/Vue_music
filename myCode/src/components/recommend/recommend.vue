<template>
  <div class="mainBox">
    <div class="banner">
      <mt-swipe :auto="5000" v-if="recommendData !== ''">
        <mt-swipe-item v-for="(item,index) in recommendData.slider" :key="index" class="itemBaner">
          <img :src="item.picUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  import {getRecommendData} from '@/api/recommend'
export default {
  name: 'recommend',
  data () {
    return {
      recommendData:''
    }
  },
  created(){
    this._getRecommend()
  },
  methods:{
    _getRecommend(){
      var that = this
      getRecommendData().then(function (res) {
        console.log(res);
        if(res.code==0){
          that.recommendData = res.data
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/scss">
.banner{
  height: 300px;
  background-color: white;
  .itemBaner{
    width: 100%;
    height: 100%;
    img{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

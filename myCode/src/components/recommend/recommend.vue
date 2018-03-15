<template>
  <div class="mainBox">
    <!--轮播图-->
    <div class="banner">
      <mt-swipe :auto="5000" v-if="recommendData !== ''">
        <mt-swipe-item v-for="(item,index) in recommendData.slider" :key="index" class="itemBaner">
          <img :src="item.picUrl" @click="slideClick($event,item.linkUrl)">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--电台-->
    <div class="radioList">
      <p class="listTitle">电台</p>
      <div class="listBox">
        <ul v-if="recommendData !== ''">
          <li v-for="(item,index) in recommendData.radioList" :key="index">
            <img :src="item.picUrl" alt="">
            <p>
              {{item.Ftitle}}
            </p>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
    <!--热门歌单-->
    <div class="songList">
      <p class="listTitle">热门歌单</p>
      <div class="listBox">
        <ul v-if="recommendData !== ''">
          <li v-for="(item,index) in recommendData.songList" :key="index">
            <img :src="item.picUrl" alt="">
            <p>
              {{item.songListDesc}}
            </p>
            <p>
              {{item.songListAuthor}}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!--说明-->
    <div class="someSay">
      <a href="#" class="textLink">去客户端发现更多好音乐 ></a>
      <a href="#" class="textLink">查看电脑版网页</a>
      <div>
        <span></span>
        Lion Muisc
      </div>
      <p>联系电话：15623544530</p>
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
    },
    slideClick(e,url){
      /*this.$router.push({'path':url})*/
      window.location.href = url
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
  .listTitle{
    padding: 35px 20px;
    font-size: 32px;
  }
  .listBox{
    padding: 0 10px;
    ul{
      width: 100%;
      font-size: 0;
      li{
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
        padding: 0 10px;
        margin-bottom: 20px;
        img{
          display: block;
          width: 100%;
        }
        p{
          line-height: 45px;
          background-color: white;
          font-size: 28px;
          padding: 5px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
  .someSay{
    padding: 30px 0;
    font-size: 28px;
    .textLink{
      display: block;
      text-align: center;
      margin-bottom: 20px;
    }
  }
</style>

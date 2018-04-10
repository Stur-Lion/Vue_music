<template>
  <div id="paddingBox">
    <div class="mainBox" ref="singerList">
      <ul class="content singerList">
        <li v-for="(item,index) in singerList" :key="index">
          <dl>
            <dt class="Dtitle everyList">
              {{item.title}}
            </dt>
            <dd v-for="(ditem , dindex) in item.item" :key="dindex" class="ddItem everyList">
              <img :src="ditem.avtor" alt="">
              <span>
                {{ditem.name}}
              </span>
            </dd>
          </dl>
        </li>
      </ul>
      <!--shortList-->
      <div id="shortListBox" @touchstart="onShortTouch($event)">
        <ul>
          <li
            v-for="(item ,index) in shortList"
            :key="index"
            :index="index">
            {{item.title.substr(0,1)}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {getSingerData} from '@/api/singer';
  import BScroll from 'better-scroll'
  import Singer from '@/common/js/singer'
  import {attrDom} from "@/common/js/common";

  export default {
  name: 'singer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singerList:''
    }
  },
  computed: {
    shortList:function () {
      return this.singerList
    }
  },
  methods: {
    _singerData:function () {
      var that = this;
      getSingerData().then(function (res) {
        that.singerList = that._dataSort(res.data.list);
        console.log(that.singerList);
      }).catch(function (res) {
        console.log(res);
      })
    },
    _initScroll: function () {
      this.singerListScroll = new BScroll(this.$refs.singerList, {
        click: true
      });
    },
    _dataSort: function (list) {
      var newList = {
        hot:{
          title:'热门',
          item:[]
        }
      };
      list.forEach((item,index) => {
        if(index < 10){
          newList.hot.item.push(
            new Singer({
              name:item.Fsinger_name,
              id:item.Fsinger_mid
            })
          )
        }

        if(!newList[item.Findex]){
          newList[item.Findex] = {
            title:item.Findex,
            item:[]
          }
        }
        newList[item.Findex].item.push(
          new Singer({
            name:item.Fsinger_name,
            id:item.Fsinger_mid
          })
        )
      })

      var hot = [],ret = [];
      for(let key in newList){
        if(newList[key].title.match(/[a-zA-z]/)){
          ret.push(newList[key])
        }else if(newList[key].title == '热门'){
          hot.push(newList[key])
        }
      }
      ret.sort((a,b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      return hot.concat(ret)
    },
    onShortTouch: function (e) {
      console.log(attrDom(e.target,'index'));
    }
  },
  created() {
    this._singerData();
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/scss">
  .singerList{
  li{
    width: 100%;
    display: block;
    line-height: 60px;
    background-color: #ffffff;
    .everyList{
      height: 120px;
      line-height: 120px;
      padding-left: 30px;
    }
    .Dtitle{
      background: #e6e6e6;
      height: 50px;
      line-height: 50px;
    }
    .ddItem{
      img{
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 100px;
      }
      span{
        padding-left: 20px;
        font-size: 28px;
      }
    }
  }
}
  #shortListBox{
    position: fixed;
    right: 0;
    top: 250px;
    background: #97cbf5;
    width: 30px;
    padding: 15px 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    li{
      color: white;
      text-align: center;
      line-height: 40px;
    }
  }
</style>

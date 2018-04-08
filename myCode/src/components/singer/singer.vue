<template>
  <div id="paddingBox">
    <div class="mainBox" ref="singerList">
      <ul class="content singerList">
        <li v-for="(item,index) in singerList" :key="index">
          {{item.Fsinger_name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getSingerData} from '@/api/singer';
  import BScroll from 'better-scroll'
export default {
  name: 'singer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singerList:''
    }
  },
  methods: {
    _singerData:function () {
      var that = this;
      getSingerData().then(function (res) {
        console.log(res);
        var singerList = []
        res.data.list.forEach(function (item,index) {
          singerList.push(item)
        })
        that.singerList = singerList;
        /*that.singerList = singerData.sort((a, b) => a.Fsinger_name.localeCompare(b.Fsinger_name, 'zh-Hans-CN', {sensitivity: 'accent'}))*/
      }).catch(function (res) {
        console.log(res);
      })
    },
    _initScroll: function () {
      this.singerListScroll = new BScroll(this.$refs.singerList, {
        click: true
      });
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
    padding-left: 30px;
    line-height: 60px;
    background-color: #ffffff;
  }
}
</style>

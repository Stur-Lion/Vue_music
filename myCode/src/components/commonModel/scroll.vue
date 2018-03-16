<template>
  <iscroll-view class="scroll-view" :options="{preventDefault: false}"
  @pullUp="pullUp" @pullDown="pullDown">
    <slot></slot>
  </iscroll-view>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      scroll:''
    }
  },
  methods:{
    pullUp(iscroll) {
      console.log(iscroll);
    },
    pullDown(iscroll){
      console.log(iscroll);
    }
  },
  mounted(){

  },
  props:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
  .scroll-view {
    touch-action: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>

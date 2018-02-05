<template>
  <mt-tabbar v-model="$store.state.selected">
    <mt-tab-item id="waimai">
        <i class="iconfont icon-home"></i>
        <p>外卖</p>
    </mt-tab-item>
    <mt-tab-item id="order" >
        <i class="iconfont icon-message"></i>
        <p>订单</p>
    </mt-tab-item>
    <mt-tab-item id="faxian">
        <i class="iconfont icon-money"></i>
        <p>发现</p>
    </mt-tab-item>
    <mt-tab-item id="me">
        <i class="iconfont icon-me"></i>
        <p>我的</p>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import '../../../static/css/iconfont.css'
export default {
  data () {
    return {
      
    }
  },
  components:{
  //注册组件

  },
  mounted:function(){
  //生命周期
      
  },
  computed:{
  //计算属性
    gopage:function(){
        return this.$store.state.selected
    }
  },
  methods:{
  //函数
      
  },
  watch:{
      gopage(newval,oldval){
          this.$router.push(newval);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .iconfont{ display: block; }
  .mint-tabbar{     color: #bebebe; background-size: 100% 0px; }
  .mint-tabbar > .mint-tab-item.is-selected {
      color: #f74747;
  }
  .mint-tabbar p{ margin: 0; }
  .icon-home{ font-size: 1rem;}
  .icon-message{ font-size: 1.2rem;}
  .icon-money{ font-size: 1.4rem;}
  .icon-me{ font-size: 1.2rem;}
</style>

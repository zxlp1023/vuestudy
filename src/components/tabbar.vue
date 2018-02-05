<template>
<div>
  <mt-navbar v-model="xuanzhong">
  <mt-tab-item id="1">option A</mt-tab-item>
  <mt-tab-item id="2">option B</mt-tab-item>
  <mt-tab-item id="3">option C</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="xuanzhong">
    <mt-tab-container-item id="1">
      <mt-cell v-for="n in 3" :title="'content ' + n" :key="n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
      <mt-cell v-for="n in 4" :title="'content ' + n"  :key="n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">
      <mt-cell v-for="n in 6" :title="'content ' + n"  :key="n"/>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
export default {
  name:'test',
  data(){
    return{      
      xuanzhong:this.$route.query.id,
      msg:'这是一个测试内容',
    }
  },
  mounted:function(){
    console.log(this.xuanzhong)
  },
  computed: {
    
  }
}
</script>

<style>


</style>

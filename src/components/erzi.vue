<template>
  <div>
    <div @click="dian" class="erzi">{{msg + 1111}}</div>
  </div>
</template>

<script>
export default {
  name:'erzi',
  props:['msg'],
  data(){
    return{
      count:0,
    }
  },
  methods:{
    dian: function() {
      alert(1)
    }
  }
}
</script>

<style>
/* 父组件的数据通过prop下发到子组件中 */

</style>

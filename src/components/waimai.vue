<template>
  <div>
    {{msg}}
    {{$store.state.xuanzhong}}
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
  name:'test',
  data(){
    return{
      msg:'这是外卖'
    }
  },
  components: {navbar}
  
}
</script>

<style>


</style>

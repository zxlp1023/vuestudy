<template>
  <div>
    {{msg}}
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
  name:'test',
  data(){
    return{
      msg:'这是订单'
    }
  },
  components: {navbar}
  
}
</script>

<style>


</style>

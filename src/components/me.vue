<template>
  <div>
    {{msg}}
    <ul>
       <router-link :to="{ path: 'tabbar', query: { id: '1' }}">进行中</router-link>
       <router-link :to="{ path: 'tabbar', query: { id: '2' }}">已完成</router-link>
       <router-link :to="{ path: 'tabbar', query: { id: '3' }}">待评价</router-link>
    </ul>
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
  name:'test',
  data(){
    return{
      msg:'这是我的'
    }
  },
  components: {navbar}
  
}
</script>

<style scoped>
a{ text-decoration: none;}

</style>

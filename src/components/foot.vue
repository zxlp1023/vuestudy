<template>
  <ul>
    <slot name="item" v-for="item in items" :text="item.text"></slot>
  </ul>
</template>

<script>
export default {
  name:'foot',
  data(){
    return{
      
    }
  },
}
</script>

<style>


</style>

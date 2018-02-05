<template>
  <div>

    <li>{{todo.text}}</li>
  </div>
</template>

<script>
export default {
  data(){
    return{
      childMsg:'这是儿子传过来的信息'
    }
  },
  props:['todo',]
}
</script>

<style>

</style>

<template>
  <div>
    {{msg}}
    <p>全局变量:{{$store.state.count}}</p>
    <button @click="addNum">++++++++++++</button>
    <button @click="minusNum">------------</button>
    <br>
    <br>
    <br>
    <br>
    <p v-html="msg2"></p>
    <p>{{ok ? 'yes' : 'no'}}</p>  <!-- ok的值为true则显示yes, 否则, 为空, 为null, 为undefined都显示no -->
    <p>{{p1}}</p>
    <p>{{reverseMsg}}</p>
    <p class="goodJob" :class="{active:isActive,isOn:on}">是否绑定class</p>
    <p v-if="key == 2" v-for="(key,index) in loop">{{key}}{{index}}</p>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App111111',
      msg2: '<span style="color:red">html解析</span>',
      ok:'',
      p1:'今天天气真好',
      p2:null,
      fName: 'H5 Develop',
      lName:'Designer',
      fullName:'H5 Develop Designer',
      isActive: 0,
      on:1,
      loop:[1,2,3] 
    }
  },
  mounted: function () {
    // this.$store.state.count = 5
  //  this.p2 = this.p1.split('').reverse().join('')
  },
  methods:mapMutations(['addNum','minusNum']),
  computed: {
    reverseMsg: function () {
      return this.p1.split('').reverse().join('')
    }
  },
  // watch: {
  //   firstName: function (val) {
  //     this.fName = val + ' ' + this.lName
  //   },
  //   lName1: function (val) {
  //     this.lName = val + ' ' + this.fName
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .active{ color: red}
</style>

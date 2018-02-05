<template>
  <div id="demo">
    <button @click="plus">{{count}}</button>
    <button @click="plus">{{count}}</button>
    <button @click="plus">{{count}}</button>
    <input type="text" v-model="msg">
    <br>
    <div>
      <h4>下面是来自slot的信息</h4>
      <div class="parent">
        <foot>
          <template slot-scope="props">
            <span>hello from parent</span>
            <span>{{props.text}}</span>
          </template>
        </foot>
      </div>
    </div>
    <div>
      1111
      <foot :items="items">
        <li slot="item" slot-scope="props">{{props.text}}</li>
      </foot>
    </div>
    <div>
      <h5>过度&动画</h5>
      <transition name="fade">
        <p v-if="show">Toggle切换</p>
      </transition>
      <button @click=" show = !show">Click</button>
    </div>
  </div>
</template>

<script>
import foot from '@/components/foot'
export default {
  name:'zujian',
  el:'#demo',
  data(){
    return{
      count:0,
      msg:'听妈妈的话',
      show:1,
      items:[
        {id:1,text:111111},
        {id:2,text:222222}, 
      ]
    }
  },
  computed: {

  },
  methods:{
    plus: function () {
      this.count++
    }
  },
  components:{foot}
}
</script>

<style>
  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity:0;
  }

</style>

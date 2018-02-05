<template>
  <div>
    <input type="text" v-model="inputValue" v-on:keyup.enter="add" placeholder="添加信息">
    <ol v-if="todos.length">
      <li v-for="(item,index) in todos" :key="item.id"> 
        {{item.title}} 
        <button @click="dlt(index)">删除</button>
      </li>
    </ol>

    <div>
      <button @click="say('Hi')">Say Hi</button>
      <button @click="say('Hello World')">Say Hi</button>
    </div>
    <div>
      <input type="checkbox" id="a1" v-model="checked">
      <label for="a1">{{checked}}</label>
    </div>
    <h4>按钮组</h4>
    <div>
      <li>
        <input type="checkbox" id="luhai" value="luhai" v-model="checkenGrop">
        <label for="luhai">鲁海</label>
      </li>
      <li>
        <input type="checkbox" id="huge" value="huge" v-model="checkenGrop">
        <label for="huge">虎哥</label>
      </li>
      <li>
        <input type="checkbox" id="liye" value="liye" v-model="checkenGrop">
        <label for="liye">李爷</label>
      </li>
      <li>{{checkenGrop}}</li>
    </div>
    <div>
      <h5>单选按钮</h5>
      <input type="radio" id="man" value="0" v-model="isOn">
      <label for="man">男</label>
      <input type="radio" id="girl" value="1" v-model="isOn">
      <label for="girl">女</label>
      <p>{{isOn}}</p>
    </div>
    <div>
      <h5>下拉菜单</h5>
      <select name="fruits" id="fruits" v-model="fruits">
        <option disabled value="">选择你要的水果</option>
        <option value="apple">苹果</option>
        <option value="banana">香蕉</option>
        <option value="pear">梨子</option>
      </select>
      <p>{{fruits}}</p>
    </div>
    <div>
      <h5>循环输出下拉菜单</h5>
      <select name="fruits2" id="fruits2" v-model="slt">
        <option v-for="item in selectgRoup" :value="item.value">{{item.text}}</option>
      </select>
      <p>{{slt}}</p>
    </div>
    <div>
      <h5>表单修饰符</h5>
      <input type="text" v-model.lazy="msg2" placeholder="change事件时进行同步,意思是值改变过后, v-model是改变时">
      {{msg2}}
      <input type="text" v-model.number="inputNum" placeholder="num类型" data-notice="数字开头的时候可以转换为数字, 否则就是string">
      <button @click="inputType">Click</button>
      <div>
        <input type="text" v-model.trim="msg3" data-notice="trim自动过滤首尾的空格"><span>{{msg3}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'todoList',
  data(){
    return{
      id:4,
      inputValue:'',
      todos:[
        {id:1,title:'这是第一个标题'},
        {id:2,title:'这是第二个标题'},
        {id:3,title:'这是第三个标题'},
      ],
      checked:false,
      checkenGrop:[],
      isOn:0,
      fruits:'',
      selectgRoup:[
        {text:'苹果',value:'apple'},
        {text:'柚子',value:'orange'},
        {text:'冰糖橙',value:'orange2'},
      ],
      slt:'apple',
      msg2:'',
      inputNum:'',
      msg3:null
    }
  },
  computed: {

  },
  methods:{
    add:function(){
      this.todos.push(
        {id:this.id++,title:this.inputValue}
      )
      this.inputValue = ''
    },
    dlt:function(index){
      this.todos.splice(index,1)
    },
    say: function(msg){
      alert(msg)
    },
    inputType:function(){
      console.log(typeof(this.inputNum))
    }
  }
}
</script>

<style>

</style>

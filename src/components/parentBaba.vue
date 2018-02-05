<template>
  <div>
      <ol>
        <todoItem v-for="item in grocerList" :todo="item" :key="item.id"></todoItem>
      </ol>

      <!-- <ol>  
        <li v-for="item in evenNumbers"> {{item}} </li>
      </ol> 
        计算属性
      -->
    <ul>
      <li v-for="item in filtersNum(numbers)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import todoItem from '@/components/todoItem'
export default {
  name:'baba',
  data(){
    return{
      grocerList: [
        {id:0,text:'大雁'},
        {id:1,text:'海豚'},
        {id:2,text:'猎豹'},
      ],
      numbers:[1,2,3,4,5,6]
    }
  },
  mounted: function () {
  //  const result = this.numbers.filter( num => {
  //     return num % 2 ==0
  //   })
    // console.log(result)
  },
  computed:{
    evenNumbers: function() {
      return this.numbers.filter( num => {
        return num % 2 === 0 
      })
    }
  },
  methods:{
    filtersNum: function (numbers){
      return numbers.filter( num => {
        return num % 2 === 0
      })
    }
  },
  components:{todoItem}
}
</script>

<style>

</style>

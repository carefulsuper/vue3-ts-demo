<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>名称</th>
        <th>数量</th>
        <th>单价</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data">
        <td align="center">{{item.name}}</td>
        <td align="center"><button @click="addAndSub(item,false)">-</button>{{item.num}}<button  @click="addAndSub(item,true)">+</button></td>
        <td align="center">{{item.price}}</td>
        <td align="center"><button @click="del">删除</button></td>
      </tr>
      </tbody>
      <tfoot>
      <td></td>
      <td></td>
      <td></td>
      <td align="center">总价:{{ $total }}</td>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,computed } from 'vue'
type Shop={
  name:string,
  num:number,
  price:number
}
const data = reactive<Shop[]>([
  {
    name:"美味蟹宝",
    num:20,
    price:20
  },
  {
    name:"海之霸",
    num:20,
    price:20
  },
  {
    name:"蟹堡王",
    num:10,
    price:200
  }
  ])
const addAndSub=(item:Shop,type:boolean):void=>{
  if(item.num>1&& !type){
    item.num--
  }if(item.num<99 &&type){
    item.num++
  }

}
const del=(index:number) =>{
  data.splice(index,1)
}
let $total=ref(0)
// const total=()=>{
//   $total.value=data.reduce((prev,next)=>{
//     return prev+(next.num*next.price)
//   },0)
// }

  $total = computed<number>(()=>{
    return data.reduce((prev,next)=>{
      return prev+(next.num*next.price)
    },0)
  })

</script>

<style scoped>

</style>

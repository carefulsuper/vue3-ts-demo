<script setup lang="ts">
import { ref,reactive } from 'vue'
let form = reactive({
  name:"海绵宝宝",
  friend:"派大星"
})
//修改ref的值需要加.value,但是reactive的值可以直接修改
form.friend = "蟹老板"
const submit=()=>{
  console.log(form)
}
let list =reactive<string[]>([])
const add=()=>{
  // list.push('喜羊羊')
  setTimeout(()=>{
    let res=['喜羊羊','懒羊羊','美羊羊','沸羊羊']
    list.push(...res)
    console.log(list)
  },2000)
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
    <button @click="add" >添加</button>
    <form>
      <input type="text" v-model="form.name" />
      <br>
      <input type="text" v-model="form.friend"/>
      <br>
      <button @click.prevent="submit" >提交</button>
    </form>
  </div>
</template>

<style scoped>
</style>

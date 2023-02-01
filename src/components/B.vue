<template>
  <div>
    <h1>我是B</h1>
  </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance() as any
// instance?.proxy?.$Bus.on('on-num', (num:any
// ) => {
//   console.log(num,'===========>B')
// })
const Bus=(str:any)=>{
  console.log(str,'===>')
}
// instance?.proxy?.$Bus.on('on-num',Bus)
// instance?.proxy?.$Bus.off('on-num',Bus)
// instance?.proxy?.$Bus.all.clear
</script>

<style>
</style>

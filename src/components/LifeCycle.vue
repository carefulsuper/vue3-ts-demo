<template>
  <div ref="div">
    {{str}}
  </div>
  <button @click="change">修改</button>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount,onUnmounted } from 'vue'
const str=ref<string>('海绵宝宝')
const div=ref<HTMLDivElement>()
const change=()=>{
  str.value='改了'
}
console.log('setup')
//创建
onBeforeMount(()=>{
  console.log('1',div.value)
})
onMounted(()=>{
  console.log('2',div.value)
})
//更新
onBeforeUpdate(()=>{
  console.log('3',div.value?.innerText)
})
onUpdated(()=>{
  console.log('4',div.value?.innerText)
})
//销毁
onBeforeUnmount(()=>{
  console.log('5')
})
onUnmounted(()=>{
  console.log('6')
})
const data = reactive({})
</script>

<style scoped>

</style>

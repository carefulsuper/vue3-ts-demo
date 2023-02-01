<template>
  <div>
    <h1>我是A</h1>
    <button @click="emit1">emit1</button>
    <button @click="emit2">emit2</button>
  </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance();
const emit1 = () => {
  instance?.proxy?.$Bus.emit('on-num', 100)
}
const emit2 = () => {
  instance?.proxy?.$Bus.emit('*****', 500)
}
</script>

<style>
</style>

<template>
  <div>子</div>
  <div>值:{{title}}</div>
  <div>值:{{arr}}</div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
const emit=defineEmits(['on-click'])
withDefaults(defineProps<{
  title:string,
  arr:number[]
}>(),{
  arr:()=>[111]
})
// console.log(props.title)
const data = reactive({})
</script>

<style scoped>

</style>

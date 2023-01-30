<template>
  <div>
    case1:<input v-model="message.foo.bar.name" type="text">
    <hr>
    case2:<input v-model="message.foo.bar.age" type="text">
  </div>
</template>

<script setup lang="ts">
import { ref,reactive,watch } from 'vue'
// let message = ref<string>('海绵宝宝')
let message = reactive({
  foo:{
    bar:{
      name:'海绵宝宝',
      age:12
    }
  }
})
let message2=ref<string>('pdx')
watch(message,(newVal,oldVal)=>{
  console.log(newVal,oldVal)
})
// const data = reactive({})
</script>

<style scoped>

</style>

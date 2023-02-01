<template>
  <div>
    <A>111</A>
    <B>222</B>
    <xiaoman></xiaoman>
    <button @click="show = !show">开关{{show}}</button>
    <VModel v-model="show"></VModel>
       </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue'
import xiaoman from './App'

const show = ref(false)

import 'animate.css'
let Flag=ref(false)
import A from "./components/A.vue"
import B from './components/B.vue'
import VModel from './components/VModel.vue'
const getFlag = (params:boolean)=>{
  Flag.value=params
}
const isShow = ref<boolean>(true)
const text=ref<string>('小满')
// instance?.proxy?.$Bus.on('*',(type,num)=>{
//   console.log(type,num,'===========>B')
// })
// const Fn = (num: any) => {
//   console.log(num, '===========>B')
// }
// instance?.proxy?.$Bus.on('on-num',Fn)//listen
// instance?.proxy?.$Bus.off('on-num',Fn)//unListen
// instance?.proxy?.$Bus.all.clear()
</script>
<style lang="sass" scoped>
</style>

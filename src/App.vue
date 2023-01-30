<template>

  <div>
  <div v-for="item in arr" :style="style">{{ item }}</div>
  <div>{{Me}}</div>
    <button @click="change">修改</button>
    <router-view></router-view>
    <router-link replace to="/hello"><button>login</button></router-link>
    <router-link replace to="/computed"><button>计算</button></router-link>
    <router-link replace to="/shop"><button>购买</button></router-link>
    <router-link replace to="/listen"><button>侦听</button></router-link>
  </div>
</template>

<script setup lang="ts">
import { ref ,isRef,shallowRef } from 'vue'
import type { Ref } from 'vue'
//shallowRef 浅层次的相应
//ref 深层次的相应
//不能一起写，一起写造成视图更新
const Me=ref({name:"123"})

const change = () =>{
  Me.value.name="234"
  console.log(Me)
}
const arr:string[]=['1','2','3']

// const good:string="haohaohao"
const style={
  color:'red',
  border:'1px solid #ccc'
}
</script>
<style lang="sass">

</style>

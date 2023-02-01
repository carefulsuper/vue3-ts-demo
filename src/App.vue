<template>
  <div class="content">
    <button @click="flag=!flag">switch</button>
    <transition name="fade">
      <div v-if="flag" class="box"></div>
    </transition>
    <router-view></router-view>
    <router-link replace to="/hello"><button>login</button></router-link>
    <A></A>
    <B></B>
   </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue'
import 'animate.css'
//shallowRef 浅层次的相应
const flag=ref<boolean>(true)
</script>
<style lang="sass" scoped>
.box
  width: 200px
  height: 200px
  background-color: yellowgreen
.fade-enter-from
  width: 0
  height: 0
.fade-enter-active
  transition: all 1.5s ease
.fade-enter-to
  width: 200px
  height: 200px
  background-color: gray
.fade-leave-active
  transition: all 5s ease
.fade-leave-to
  width: 0
  height: 0
</style>

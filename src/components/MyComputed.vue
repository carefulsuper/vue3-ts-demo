<template>
  <div>
    <input type="text" v-model="firstName" />
    <br>
    <input type="text" v-model="lastName"/>
    <br>
    <div>
      {{firstName}}-{{lastName}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
const firstName=ref('')
const lastName=ref('')
const name=computed({
  // return firstName.value+'--'+lastName
  get(){
    return firstName.value+'--'+lastName.value
  },
  set(){
    firstName.value+lastName.value
  }
})
const data = reactive({})
</script>

<style scoped>

</style>

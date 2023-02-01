<template>
  <div v-if='propData.modelValue ' class="dialog">
    <div class="dialog-header">
      <div>标题</div><div @click="close">x</div>
    </div>
    <div class="dialog-content">
      内容
    </div>

  </div>
</template>

<script setup lang='ts'>

type Props = {
  modelValue:boolean
}

const propData = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue',false)
}

</script>

<style lang='less'>
.dialog{
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  &-header{
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  &-content{
    padding: 10px;
  }
}
</style>

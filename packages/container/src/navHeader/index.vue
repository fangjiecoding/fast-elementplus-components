<template>
  <div class="header">
    <span @click="toggle">
      <Expand v-if="collapse"></Expand>
      <Fold v-else></Fold>
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean
}>()
let emits = defineEmits(['update:collapse'])
let toggle = () => {
  // 需要修改父组件的数据
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
svg {
  width: 1em;
  height: 1em;
}
</style>

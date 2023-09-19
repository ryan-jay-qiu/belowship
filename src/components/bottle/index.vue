<template>
  <div class="bottle">
    <item :num="process" class="item2"></item>
    <item :num="process" class="item2"></item>
    <item :num="process" class="item2"></item>
  </div>
</template>

<script setup>
import item from './item.vue'
const process = ref(1)
setInterval(() => {
  process.value >= 9 ? (process.value = 9) : process.value++
}, 300)
</script>

<style lang="scss" scoped>
.bottle {
  position: absolute;
  top: 850px;
  left: 120px;
  .item2 {
    margin-top: 13px;
  }
}
</style>

<template>
  <div class="process">
    <div v-for="(item,idx) in 9" :key="idx" :style="{'opacity':props.num <= idx ? 1-(item*0.1) : 0}" class="info">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
const props = defineProps(['num'])

</script>

<style lang="scss" scoped>
.info {
  width: 30px;
  height: 6.91px;
  opacity: 0.9;
  /* 荧光蓝绿 */
  background: #73dcff;
  border: 1px solid #73dcff;
  box-shadow: 0px 0px 10px 0px #00b9ff;
  margin: 10px 0;
  transition: opacity 0.3s ease-in-out;
}
</style>

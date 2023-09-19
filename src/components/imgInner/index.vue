<template>
  <div class="container2">
    <img
      class="first"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB5SURBVCiR3dDBEYJADIXhP08twJ7YChi2RltYB0pwb3CjBioQvTG4wOzq0dySyZdJAv8f9rq5JtuluTffDevSmYtGnnMLXI/HywMfUFaHyEkVMH2zqgB+wVq2qUMEc6VY68T8/VGKlRZK8QYuOHPzLoT8ww5hgjfxBuu/IppfkxdaAAAAAElFTkSuQmCC
"
      alt=""
    />
    <img
      class="last"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB5SURBVCiR3dDBEYJADIXhP08twJ7YChi2RltYB0pwb3CjBioQvTG4wOzq0dySyZdJAv8f9rq5JtuluTffDevSmYtGnnMLXI/HywMfUFaHyEkVMH2zqgB+wVq2qUMEc6VY68T8/VGKlRZK8QYuOHPzLoT8ww5hgjfxBuu/IppfkxdaAAAAAElFTkSuQmCC
"
      alt=""
    />
  </div>
</template>

<script setup>
import { mapRange } from '@/utils/index'
import { useCounterStore } from '@/stores/counter.js'
const store = useCounterStore()
const rangeNum = computed(() => {
  return mapRange(store.currentHight)
})
</script>

<style lang="scss" scoped>
.container2 {
  width: 1115px;
  height: 360px;
  margin: 350px auto;
  display: flex;
  position: relative;
  justify-content: space-between;
  img {
    width: 14px;
    height: 14px;
    // filter: drop-shadow(5px 5px 10px black);
    position: absolute;
    bottom: v-bind(rangeNum);
    transition: bottom 0.1s ease;
  }
}
.first {
  left: 0;
}
.last {
  transform: rotate(270deg);
  right: 0;
}
</style>

<template>
  <div class="ec">
    <echartsInit :data="data2" :option="homeChartOption"></echartsInit>
    <div class="num">{{ store.currentHight }}</div>
  </div>
</template>

<script setup>
import { homeChartOption } from '@/utils/data.js'
import { nextTick } from 'vue'
import { useCounterStore } from '@/stores/counter.js'
const store = useCounterStore()
const data2 = ref(homeChartOption)
const num = ref(23)
ue.interface.changeHight = (data) => {
  let { value } = JSON.parse(data)
  store.changeHeight(~~value)
  value = ~~-value
  if (num.value == value) return
  num.value = value

  data2.value.series[0].data.shift()
  data2.value.series[0].data.push(value)
}
// let a = -20
// setInterval(() => {
//   ue.interface.changeHight(JSON.stringify({ value: a }))
//   a--
// }, 1000)
</script>

<style lang="scss" scoped>
.ec {
  // width: 304px;
  // height: 165px;
  // position: absolute;
  // right: 71px;
  // bottom: 150px;
  width: 204px;
  height: 165px;
  position: absolute;
  right: 171px;
  bottom: 150px;
  .num {
    position: absolute;
    font-family: MyFont;
    bottom: 55px;
    left: -48%;
    font-size: 48px;

    line-height: 14px;

    color: #3bffa7;
  }
}
</style>

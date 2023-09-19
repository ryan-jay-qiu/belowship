!<template>
  <div class="header">
    <div class="day">{{ `${year}/${month}/${day}` }} &nbsp;<span class="time">{{ `${hours}:${minutes}` }}</span></div>
  </div>
</template>

<script setup>
import useTime from '@/hooks/useTime'
const { year, month, day, week, hours, minutes, second, nowTime } = useTime()
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  right: 100px;
  top: 68px;
  .day {
    font-family: MyFont;
    font-weight: 800;
    font-size: 18px;
    color: rgb(115, 220, 255);
    letter-spacing: 2px;
  }
  .time {
    font-family: MyFont;
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 2px;
    color: #73dcff;
  }
}
</style>

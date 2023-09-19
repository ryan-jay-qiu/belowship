<template>
  <div class="container">
    <div class="bc">
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
      <img src="./bg2.png" alt="" />
    </div>
    <div class="over">
      <!-- <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" />
      <img src="./bg1.png" alt="" /> -->
      <img
        src="./bg1.png"
        v-for="(item, idx) in 12"
        :key="idx"
        :style="{ opacity: props.num > idx ? 1 : 0 }"
      />
    </div>
    <span class="num">{{ props.num }}/12</span>
  </div>
</template>

<script setup>
const props = defineProps(['num'])
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
img {
  margin: 0 3px;
}

.over {
  position: absolute;
  top: 0;
  z-index: 2;
  left: 0;
  img {
    transition: opacity 0.3s ease-in-out;
  }
}
.num {
  position: absolute;
  right: -40%;
  top: 6px;
  font-family: MyFont;
  font-size: 14px;
  line-height: 14px;

  /* 点缀绿 */
  color: #3bffa7;
}
</style>

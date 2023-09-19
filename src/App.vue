<template>
  <div class="root" ref="screenRef">
    <footerMenu></footerMenu>
    <headerTime></headerTime>
    <infoMessage></infoMessage>
    <myChart></myChart>
    <bottle></bottle>
    <imgInner></imgInner>
  </div>
</template>
<script setup>
import footerMenu from '@/layout/index.vue'
import resizeScale from '@/utils/resizeScale.js'
import { useResize } from '@/hooks/useResize'
import headerTime from '@/layout/headerTitle.vue'

const show = ref(false)
// const screenRef = ref(null)
const { screenRef } = useResize({ fullScreen: false })
onMounted(() => {
  show.value = true
  // resizeScale(screenRef.value)
  // useResize(rootRef.value)
})
</script>
<style scoped lang="scss">
.root {
  width: 1920px;
  height: 1080px;
  position: relative;
  overflow: hidden;
  background:
    url('./assets/images/bg.png') no-repeat,
    url('./assets/images/bg3.png') no-repeat;
  background-size: contain, cover;
  // &:root {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
}
</style>
<style lang="scss">
[v-cloak] {
  display: none;
}

.fade-in-down-right-enter-active,
.fade-in-down-right-leave-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
  /*1s后从初始状态，过渡到显示状态*/
}

.fade-in-down-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.fade-in-down-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-in-down-enter-active,
.fade-in-down-leave-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
}
.fade-in-down-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-in-down-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

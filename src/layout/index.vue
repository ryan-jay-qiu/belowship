<template>
  <span class="title">{{ text }}</span>
  <div @click="() => next()" class="click"></div>

  <div class="footer">
    <div :class="{ active: 1 == store.currentMenu }">巡航</div>
    <div :class="{ active: 2 == store.currentMenu }">上浮</div>
    <div :class="{ active: 3 == store.currentMenu }">加压</div>
    <div :class="{ active: 4 == store.currentMenu }">发射</div>
    <div :class="{ active: 5 == store.currentMenu }" style="padding-top: 3px">
      <svg fill="none" width="30.494873046875" height="20" viewBox="0 0 30.494873046875 20">
        <g>
          <g style="opacity: 0.30000001192092896">
            <path
              d="M0,16.5L7.50517,10L0,3L0,0L10.4949,10L0.0000388622,20L0,16.5Z"
              fill-rule="evenodd"
              fill="#73DCFF"
              fill-opacity="1"
            />
          </g>
          <g style="opacity: 0.6000000238418579">
            <path
              d="M10,16.5L17.50517,10L10,3L10,0L20.4949,10L10.0000388622,20L10,16.5Z"
              fill-rule="evenodd"
              fill="#73DCFF"
              fill-opacity="1"
            />
          </g>
          <g style="opacity: 0.8999999761581421">
            <path
              d="M20,16.5L27.50517,10L20,3L20,0L30.4949,10L20.0000388622,20L20,16.5Z"
              fill-rule="evenodd"
              fill="#73DCFF"
              fill-opacity="1"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
  <div class="process">
    <div class="bc"></div>
    <div class="info"></div>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/counter.js'
const store = useCounterStore()
// const current = ref(store.currentMenu)
const text = ref('潜艇巡航')
let flag = false
// let finish = false
ue.interface.clickEnable = (data) => {
  const { value } = JSON.parse(data)
  flag = value
}
ue.interface.finish = (data) => {
  const { value } = JSON.parse(data)
  // finish = value
  if (value) {
    next(true)
  }
}
const next = (auto = false) => {
  if (!flag && !auto) return false
  flag = false
  if (store.currentMenu == 5) {
    store.changeCurrent(1)
  } else {
    store.changeCurrent(store.currentMenu + 1)
  }
  if (store.currentMenu == 2) {
    store.changeSpeed(0)
  }
  if (store.currentMenu == 1) {
    store.changeSpeed(12)
  }
  ue4('nextStep', JSON.stringify({ value: store.currentMenu }))
}
const map = {
  1: '潜艇巡航',
  2: '潜艇上浮',
  3: '潜艇加压',
  4: '潜艇发射',
  5: '下潜'
}
watch(
  () => store.currentMenu,
  (newV) => {
    text.value = map[newV]
  }
)

const computedNum = computed(() => store.currentMenu * 20 + '%')
</script>
<style lang="scss" scoped>
.title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 125px;

  font-family: Microsoft YaHei;
  font-weight: 700;
  font-size: 32px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.12em;

  /* 荧光蓝绿 */
  color: #73dcff;
}
.click {
  position: absolute;
  left: 630px;
  bottom: 62px;
  height: 34px;
  width: 87px;
  cursor: pointer;
}
.footer {
  position: absolute;
  left: 752px;
  bottom: 62px;
  width: 350px;
  height: 37px;
  display: flex;
  background-color: transparent;
  white-space: nowrap;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  div {
    font-family: Microsoft YaHei;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.12em;
    height: 34px;
    line-height: 34px;
    /* 荧光蓝绿 */
    color: #73dcff;
    width: 67px;
    /* 荧光蓝绿 */
    background: rgba(115, 220, 255, 0.2);
  }
  div.active {
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
    background: rgba($color: #3bffa7, $alpha: 0.8);
    svg {
      path {
        fill: #ffffff;
      }
    }
  }
}
.process {
  position: absolute;
  right: 90px;
  bottom: 45px;
  height: 37px;
  width: 520px;
  overflow-y: visible;
  overflow-x: clip;
}

.bc {
  height: 4px;
  width: 100%;
  opacity: 0.2;

  /* 荧光蓝绿 */
  background: #73dcff;
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  // width: 10%;
  width: v-bind(computedNum);
  transition: width 0.3s ease-in;
  height: 4px;
  opacity: 1;
  /* 荧光蓝绿 */
  background: #73dcff;
}

.info::after {
  position: absolute;
  content: '';
  top: 50%;
  right: 0;
  width: 12px;
  height: 12px;
  transform: translateY(-50%);
  background: #3bffa7;
}
</style>

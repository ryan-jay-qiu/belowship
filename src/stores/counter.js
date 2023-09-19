import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const currentMenu = ref(1)
  const currentHight = ref(-50)
  const currentSpeed = ref(12)
  const changeCurrent = (val) => {
    console.log(val, currentMenu)
    currentMenu.value = val
  }
  const changeHeight = (val) => {
    currentHight.value = val
  }
  const changeSpeed = (val) => {
    console.log(11212121)
    currentSpeed.value = val
  }

  return { currentMenu, changeCurrent, currentHight, changeHeight, currentSpeed, changeSpeed }
})

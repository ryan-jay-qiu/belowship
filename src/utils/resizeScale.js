import { onMounted, onUnmounted } from 'vue'
export default function resizeScale(el, width = 1920, height = 1080, transformOrigin = 'top left') {
  const main = () => {
    const windowWidth = document.body.clientWidth
    const windowHeight = document.body.clientHeight
    const scaleX = windowWidth / width
    console.log('X', windowWidth, width, windowWidth / width, scaleX)
    const scaleY = windowHeight / height // Keep the same aspect ratio by using the same scaleX for scaleY
    console.log('X', windowWidth / width, scaleX)
    console.log('Y', windowHeight, height, windowHeight / height, scaleY)
    el.style.width = width + 'px'
    el.style.height = height + 'px'
    el.style.transform = `scale(${scaleX}, ${scaleY})`
    el.style.transformOrigin = transformOrigin
  }
  main()
  window.addEventListener('resize', main)
  onUnmounted(() => {
    window.removeEventListener('resize', main)
  })
}

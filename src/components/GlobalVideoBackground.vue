<template>
  <video
    class="background-video"
    autoplay
    loop
    muted
    playsinline
  >
    <source src="/video.mp4" type="video/mp4" />
  </video>
</template>

<script>
export default {
  name: 'GlobalVideoBackground'
}
</script>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  pointer-events: none;
}
</style> 
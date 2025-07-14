<template>
  <div id="app">
    <GlobalVideoBackground />
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import GlobalVideoBackground from '@/components/GlobalVideoBackground.vue'

export default {
  name: 'App',
  components: {
    GlobalVideoBackground
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-white;
  background: $color-black;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  position: relative;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: $color-black;
}

.page-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  /* 允许内容滚动，但背景视频保持固定 */
}
</style> 
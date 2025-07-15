<template>
  <div id="app">
    <GlobalFluidBackground />
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import GlobalFluidBackground from '@/components/GlobalFluidBackground.vue'

export default {
  name: 'App',
  components: {
    GlobalFluidBackground
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-white;
  background: transparent;
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
  background: transparent;
}

.page-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
  /* 允许内容滚动，但背景视频保持固定 */
}
</style> 
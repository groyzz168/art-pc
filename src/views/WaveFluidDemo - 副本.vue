<template>
  <div class="wave-fluid-demo">
    <!-- 水波纹背景 -->
    <WaveFluidBackground />
    
    <!-- 页面内容层 -->
    <div class="content-layer">
      <div class="demo-info">
        <h1 class="demo-title">水波纹流体动画</h1>
        <p class="demo-description">
          4条水波纹从右向左持续移动，缓慢变化形态
        </p>
        <div class="wave-info">
          <div class="wave-item">
            <div class="wave-color black"></div>
            <span>纯黑色波纹 × 2</span>
          </div>
          <div class="wave-item">
            <div class="wave-color cyan"></div>
            <span>青色波纹</span>
          </div>
          <div class="wave-item">
            <div class="wave-color yellow"></div>
            <span>黄色波纹</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WaveFluidBackground from '@/components/WaveFluidBackground.vue'

export default {
  name: 'WaveFluidDemo',
  components: {
    WaveFluidBackground
  }
}
</script>

<style scoped lang="scss">
.wave-fluid-demo {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-layer {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.demo-info {
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  max-width: 500px;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.demo-description {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 30px;
  line-height: 1.6;
}

.wave-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.wave-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  color: #ffffff;
}

.wave-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &.black {
    background: #000000;
  }
  
  &.cyan {
    background: #00c8c8;
  }
  
  &.yellow {
    background: #ffd700;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .demo-info {
    padding: 30px 20px;
    max-width: 90%;
  }
  
  .demo-title {
    font-size: 2rem;
  }
  
  .demo-description {
    font-size: 1rem;
  }
}
</style> 
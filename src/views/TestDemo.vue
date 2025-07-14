<template>
  <div class="test-demo-page">
    <!-- 背景动画组件 -->
    <Test />
    
    <!-- 前景内容 -->
    <div class="content-overlay">
      <div class="demo-info">
        <h1 class="demo-title">Masaigon 背景动画测试</h1>
        <p class="demo-description">
          基于 masaigon.space 网站的纯背景动画效果
        </p>
        
        <div class="animation-features">
          <div class="feature-item">
            <span class="feature-icon">🎭</span>
            <span>动态 clip-path 多边形遮罩</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">✨</span>
            <span>80个动态粒子系统</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🔷</span>
            <span>15个几何形状动画</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🌊</span>
            <span>8个波纹扩散效果</span>
          </div>
        </div>
        
        <div class="demo-actions">
          <button @click="goBack" class="action-btn">
            返回首页
          </button>
          <button @click="viewSource" class="action-btn secondary">
            查看源码
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Test from '@/views/Test.vue'

export default {
  name: 'TestDemo',
  components: {
    Test
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    
    viewSource() {
      console.log('查看源码功能')
      // 这里可以添加查看源码的逻辑
    }
  }
}
</script>

<style scoped lang="scss">
.test-demo-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-overlay {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.demo-info {
  text-align: center;
  color: white;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.demo-title {
  font-family: 'BioRhyme', serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #8B3A9C, #2E86AB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(139, 58, 156, 0.5);
}

.demo-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.animation-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  
  .feature-icon {
    font-size: 1.2rem;
  }
}

.demo-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.action-btn {
  padding: 12px 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  color: white;
  font-family: 'BioRhyme', serif;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  
  &.secondary {
    background: rgba(139, 58, 156, 0.3);
    border-color: rgba(139, 58, 156, 0.5);
    
    &:hover {
      background: rgba(139, 58, 156, 0.5);
      border-color: rgba(139, 58, 156, 0.7);
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .demo-title {
    font-size: 2rem;
  }
  
  .demo-info {
    margin: 20px;
    padding: 30px 20px;
  }
  
  .animation-features {
    grid-template-columns: 1fr;
  }
  
  .demo-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .action-btn {
    width: 200px;
  }
}
</style> 
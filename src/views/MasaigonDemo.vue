<template>
  <div class="masaigon-demo">
    <MasaigonBackground />
    
    <!-- 内容覆盖层 -->
    <div class="content-overlay">
      <div class="hero-section">
        <h1 class="hero-title">泼墨流体动画背景</h1>
        <p class="hero-subtitle">
          基于 masaigon.space 网站的泼墨风格流体动画效果
        </p>
        <div class="hero-description">
          <p>🎨 泼墨风格不规则流体</p>
          <p>💧 多层次流体渲染</p>
          <p>✨ 200个动态粒子系统</p>
          <p>🌊 从右向左自然流动</p>
          <p>🎭 10种五彩配色方案</p>
          <p>🖥️ PC端专用优化</p>
        </div>
      </div>
    </div>
    
    <!-- 技术说明 -->
    <div class="tech-info">
      <button @click="showTechInfo = !showTechInfo" class="tech-toggle">
        {{ showTechInfo ? '隐藏' : '显示' }} 技术详情
      </button>
      
      <div v-if="showTechInfo" class="tech-details">
        <h3>技术实现</h3>
        <ul>
          <li><strong>多层Canvas:</strong> 流体Canvas + 粒子Canvas + 泼墨Canvas</li>
          <li><strong>不规则形状:</strong> 8-14个动态控制点 + 贝塞尔曲线</li>
          <li><strong>泼墨效果:</strong> 主体泼墨 + 溅射粒子 + 湍流效果</li>
          <li><strong>流体物理:</strong> 实时变形 + 衰减动画</li>
          <li><strong>粒子系统:</strong> 200个粒子 + 轨迹渲染 + 闪烁效果</li>
          <li><strong>高级配色:</strong> 10种masaigon风格RGB精确控制</li>
        </ul>
        
        <h3>视觉层级</h3>
        <ul>
          <li><strong>背景层:</strong> 纯黑背景(#000000) + 径向渐变</li>
          <li><strong>流体层:</strong> 不规则形状流体 + 发光阴影</li>
          <li><strong>泼墨层:</strong> 泼墨效果 + 溅射粒子系统</li>
          <li><strong>粒子层:</strong> 动态粒子 + 轨迹拖尾</li>
          <li><strong>装饰层:</strong> CSS流体装饰 + 混合模式</li>
        </ul>
        
        <h3>性能优化</h3>
        <ul>
          <li><strong>PC专用:</strong> 高分辨率支持 + 响应式设计</li>
          <li><strong>渲染优化:</strong> will-change + transform3d硬件加速</li>
          <li><strong>动画优化:</strong> requestAnimationFrame + 帧率控制</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MasaigonBackground from '@/components/MasaigonBackground.vue'

export default {
  name: 'MasaigonDemo',
  components: {
    MasaigonBackground
  },
  data() {
    return {
      showTechInfo: false
    }
  }
}
</script>

<style scoped lang="scss">
.masaigon-demo {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10; // 确保内容在背景之上
}

.hero-section {
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: auto;
}

.hero-title {
  font-family: 'BioRhyme', serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #8B3A9C, #2E86AB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(139, 58, 156, 0.5);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-weight: 300;
}

.hero-description {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 2rem;
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.tech-info {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 20; // 确保技术信息在最上层
  max-width: 400px;
}

.tech-toggle {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: white;
  font-family: 'BioRhyme', serif;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
}

.tech-details {
  margin-top: 15px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  color: white;
  font-size: 14px;
  line-height: 1.6;
  
  h3 {
    font-family: 'BioRhyme', serif;
    font-size: 16px;
    margin-bottom: 10px;
    color: #8B3A9C;
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  li {
    margin-bottom: 8px;
    
    strong {
      color: #2E86AB;
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-section {
    margin: 20px;
    padding: 30px 20px;
  }
  
  .hero-description {
    grid-template-columns: 1fr;
  }
  
  .tech-info {
    position: static;
    margin: 20px;
    max-width: none;
  }
  
  .content-overlay {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-section {
    margin: 10px;
    padding: 20px 15px;
  }
}
</style> 
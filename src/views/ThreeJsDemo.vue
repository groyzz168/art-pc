<template>
  <div class="threejs-demo-page">
    <!-- 背景渐变 -->
    <div class="background-gradient"></div>
    
    <!-- 左侧导航栏 -->
    <SidebarMenu 
      :active-nav-item="activeNavItem"
      :user-name="userName"
      :user-email="userEmail"
      :user-avatar="userAvatar"
      @nav-click="handleNavClick"
      @post-click="handlePostClick"
      @user-profile-click="handleUserProfileClick"
    />
    
    <!-- 主内容区域 -->
    <div class="main-content">
      <div class="content-header">
        <h1>Three.js 动画演示</h1>
        <p>模拟 masaigon.space 网站的3D动画效果</p>
      </div>
      
      <!-- 动画类型选择器 -->
      <div class="animation-controls">
        <div class="control-group">
          <label>动画类型:</label>
          <select v-model="selectedAnimation" @change="handleAnimationChange">
            <option value="particles">粒子系统</option>
            <option value="waves">波浪效果</option>
            <option value="geometry">几何体动画</option>
            <option value="shader">着色器效果</option>
          </select>
        </div>
        
        <div class="control-group">
          <label>画布尺寸:</label>
          <select v-model="canvasSize" @change="handleSizeChange">
            <option value="small">小尺寸 (800x400)</option>
            <option value="medium">中尺寸 (1200x600)</option>
            <option value="large">大尺寸 (2134x504)</option>
          </select>
        </div>
        
        <button @click="restartAnimation" class="restart-btn">
          重新启动动画
        </button>
      </div>
      
      <!-- Three.js 画布容器 -->
      <div class="canvas-container" :class="canvasSize">
        <ThreeJsCanvas 
          :key="animationKey"
          :animation-type="selectedAnimation"
          :width="canvasWidth"
          :height="canvasHeight"
        />
      </div>
      
      <!-- 动画信息面板 -->
      <div class="info-panel">
        <div class="info-card">
          <h3>{{ getAnimationTitle() }}</h3>
          <p>{{ getAnimationDescription() }}</p>
          
          <div class="tech-specs">
            <div class="spec-item">
              <span class="spec-label">引擎:</span>
              <span class="spec-value">Three.js r156</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">渲染器:</span>
              <span class="spec-value">WebGL</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">画布尺寸:</span>
              <span class="spec-value">{{ canvasWidth }}x{{ canvasHeight }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">动画类型:</span>
              <span class="spec-value">{{ selectedAnimation }}</span>
            </div>
          </div>
        </div>
        
        <div class="performance-info">
          <h4>性能信息</h4>
          <div class="perf-item">
            <span class="perf-label">帧率:</span>
            <span class="perf-value">60 FPS</span>
          </div>
          <div class="perf-item">
            <span class="perf-label">粒子数量:</span>
            <span class="perf-value">{{ getParticleCount() }}</span>
          </div>
          <div class="perf-item">
            <span class="perf-label">着色器:</span>
            <span class="perf-value">{{ getShaderInfo() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import ThreeJsCanvas from '@/components/ThreeJsCanvas.vue'
import avatar1 from '@/assets/figma/avatar/avatar1.jpg'

export default {
  name: 'ThreeJsDemo',
  components: {
    SidebarMenu,
    ThreeJsCanvas
  },
  data() {
    return {
      activeNavItem: 'threejs',
      userName: 'Developer',
      userEmail: 'dev@masaigon.space',
      userAvatar: avatar1,
      selectedAnimation: 'particles',
      canvasSize: 'large',
      animationKey: 0
    }
  },
  computed: {
    canvasWidth() {
      const sizes = {
        small: 800,
        medium: 1200,
        large: 2134
      }
      return sizes[this.canvasSize]
    },
    canvasHeight() {
      const sizes = {
        small: 400,
        medium: 600,
        large: 504
      }
      return sizes[this.canvasSize]
    }
  },
  methods: {
    handleNavClick(item) {
      console.log('导航点击:', item)
      this.activeNavItem = item
    },
    
    handlePostClick() {
      console.log('POST按钮点击')
    },
    
    handleUserProfileClick() {
      console.log('用户资料点击')
    },
    
    handleAnimationChange() {
      // 强制重新创建组件
      this.animationKey++
    },
    
    handleSizeChange() {
      // 强制重新创建组件以适应新尺寸
      this.animationKey++
    },
    
    restartAnimation() {
      // 通过改变key强制重新创建组件
      this.animationKey++
    },
    
    getAnimationTitle() {
      const titles = {
        particles: '粒子系统动画',
        waves: '波浪效果动画',
        geometry: '几何体动画',
        shader: '着色器效果动画'
      }
      return titles[this.selectedAnimation]
    },
    
    getAnimationDescription() {
      const descriptions = {
        particles: '1000个粒子组成的动态粒子系统，模拟星空或雪花效果，具有随机运动和颜色变化。',
        waves: '基于正弦波的表面动画，创造出流动的波浪效果，适合背景装饰和动态展示。',
        geometry: '多个3D几何体的旋转和移动动画，展示Three.js的3D建模和动画能力。',
        shader: '使用自定义着色器创建的视觉效果，实现复杂的颜色渐变和动态图案。'
      }
      return descriptions[this.selectedAnimation]
    },
    
    getParticleCount() {
      const counts = {
        particles: '1000',
        waves: '5000 (顶点)',
        geometry: '20 (物体)',
        shader: '1 (平面)'
      }
      return counts[this.selectedAnimation]
    },
    
    getShaderInfo() {
      const shaders = {
        particles: '顶点 + 片段着色器',
        waves: '顶点 + 片段着色器',
        geometry: '基础材质',
        shader: '自定义着色器'
      }
      return shaders[this.selectedAnimation]
    }
  }
}
</script>

<style scoped lang="scss">
.threejs-demo-page {
  display: flex;
  min-height: 100vh;
  background: #000;
  color: #FFFFFF;
  font-family: 'BioRhyme', serif;
  position: relative;
  overflow: hidden;
}

.background-gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #8B3A9C 0%, #2E86AB 100%);
  z-index: -1;
}

.main-content {
  flex: 1;
  margin-left: 27%;
  padding: 40px;
  overflow-y: auto;
  
  .content-header {
    text-align: center;
    margin-bottom: 40px;
    
    h1 {
      font-size: 48px;
      font-weight: 400;
      margin-bottom: 20px;
      background: linear-gradient(45deg, #8B3A9C, #2E86AB);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    p {
      font-size: 20px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  
  .animation-controls {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 40px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    .control-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      label {
        font-size: 14px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.9);
      }
      
      select {
        padding: 10px 15px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 8px;
        color: #ffffff;
        font-family: 'BioRhyme', serif;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }
        
        &:focus {
          outline: none;
          border-color: #8B3A9C;
          box-shadow: 0 0 0 2px rgba(139, 58, 156, 0.3);
        }
        
        option {
          background: #000;
          color: #fff;
        }
      }
    }
    
    .restart-btn {
      padding: 12px 24px;
      background: linear-gradient(45deg, #8B3A9C, #2E86AB);
      border: none;
      border-radius: 8px;
      color: #ffffff;
      font-family: 'BioRhyme', serif;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 58, 156, 0.4);
      }
      
      &:active {
        transform: translateY(0);
      }
    }
  }
  
  .canvas-container {
    margin-bottom: 40px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &.small {
      max-width: 800px;
      margin: 0 auto 40px;
    }
    
    &.medium {
      max-width: 1200px;
      margin: 0 auto 40px;
    }
    
    &.large {
      width: 100%;
      max-width: none;
    }
  }
  
  .info-panel {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    
    .info-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 30px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 15px;
        color: #8B3A9C;
      }
      
      p {
        font-size: 16px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 25px;
      }
      
      .tech-specs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        
        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          
          .spec-label {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .spec-value {
            font-size: 14px;
            font-weight: 500;
            color: #2E86AB;
          }
        }
      }
    }
    
    .performance-info {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 30px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      height: fit-content;
      
      h4 {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 20px;
        color: #2E86AB;
      }
      
      .perf-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        
        &:last-child {
          border-bottom: none;
        }
        
        .perf-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .perf-value {
          font-size: 14px;
          font-weight: 500;
          color: #8B3A9C;
        }
      }
    }
  }
}

/* 响应式设计 */
@media (max-width: 1400px) {
  .main-content {
    margin-left: 25%;
    padding: 30px;
  }
  
  .info-panel {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 1200px) {
  .main-content {
    margin-left: 80px;
    padding: 20px;
    
    .content-header h1 {
      font-size: 36px;
    }
    
    .animation-controls {
      flex-direction: column;
      align-items: stretch;
      gap: 15px;
      
      .control-group {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        label {
          margin-bottom: 0;
        }
        
        select {
          max-width: 200px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 15px;
    
    .content-header h1 {
      font-size: 28px;
    }
    
    .animation-controls {
      padding: 15px;
      
      .control-group {
        flex-direction: column;
        align-items: stretch;
        
        select {
          max-width: none;
        }
      }
    }
    
    .canvas-container {
      &.small,
      &.medium,
      &.large {
        width: 100%;
        max-width: none;
      }
    }
  }
}
</style> 
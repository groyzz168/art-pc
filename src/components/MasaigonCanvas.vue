<template>
  <div class="masaigon-canvas-container">
    <!-- 背景动画层 -->
    <div 
      class="app-canvas" 
      :class="{ '-intro-active': isIntroActive }"
      :style="canvasStyle"
    >
      <!-- 粒子动画层 -->
      <div class="particles-layer">
        <div 
          v-for="(particle, index) in particles" 
          :key="index"
          class="particle"
          :style="particle.style"
        ></div>
      </div>
      
      <!-- 几何形状动画层 -->
      <div class="geometry-layer">
        <div 
          v-for="(shape, index) in shapes" 
          :key="index"
          class="shape"
          :class="shape.type"
          :style="shape.style"
        ></div>
      </div>
      
      <!-- 波纹效果层 -->
      <div class="ripple-layer">
        <div 
          v-for="(ripple, index) in ripples" 
          :key="index"
          class="ripple"
          :style="ripple.style"
        ></div>
      </div>
    </div>
    
    <!-- 控制按钮 -->
    <div class="controls">
      <button @click="toggleIntro" class="control-btn">
        {{ isIntroActive ? '停止动画' : '开始动画' }}
      </button>
      <button @click="changeTheme" class="control-btn">
        切换主题
      </button>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'

export default {
  name: 'MasaigonCanvas',
  data() {
    return {
      isIntroActive: false,
      currentTheme: 'purple',
      animationId: null,
      time: 0,
      
      // 动画点位置
      point1X: 50,
      point1Y: 50,
      point2X: 50,
      point2Y: 50,
      point3X: 50,
      point3Y: 50,
      point4X: 50,
      point4Y: 50,
      
      // 粒子系统
      particles: [],
      particleCount: 50,
      
      // 几何形状
      shapes: [],
      shapeCount: 20,
      
      // 波纹效果
      ripples: [],
      rippleCount: 10,
      
      themes: {
        purple: {
          background: 'linear-gradient(45deg, #1a1a2e, #16213e, #0f3460)',
          accent: '#8B3A9C',
          secondary: '#2E86AB'
        },
        blue: {
          background: 'linear-gradient(45deg, #0f0f23, #1a1a3e, #2d2d5f)',
          accent: '#3A8BC8',
          secondary: '#86AB2E'
        },
        green: {
          background: 'linear-gradient(45deg, #0f1a0f, #1e3e16, #2d5f2d)',
          accent: '#3AC88B',
          secondary: '#AB2E86'
        }
      }
    }
  },
  
  computed: {
    canvasStyle() {
      const theme = this.themes[this.currentTheme]
      return {
        '--point1X': `${this.point1X}%`,
        '--point1Y': `${this.point1Y}%`,
        '--point2X': `${this.point2X}%`,
        '--point2Y': `${this.point2Y}%`,
        '--point3X': `${this.point3X}%`,
        '--point3Y': `${this.point3Y}%`,
        '--point4X': `${this.point4X}%`,
        '--point4Y': `${this.point4Y}%`,
        background: theme.background,
        '--accent-color': theme.accent,
        '--secondary-color': theme.secondary
      }
    }
  },
  
  mounted() {
    this.initParticles()
    this.initShapes()
    this.initRipples()
    this.startAnimation()
  },
  
  beforeUnmount() {
    this.stopAnimation()
  },
  
  methods: {
    initParticles() {
      this.particles = []
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push(markRaw({
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          hue: Math.random() * 60 + 250, // 紫色到蓝色范围
          style: {
            left: '0%',
            top: '0%',
            width: '2px',
            height: '2px',
            opacity: 0.5
          }
        }))
      }
    },
    
    initShapes() {
      this.shapes = []
      const shapeTypes = ['circle', 'triangle', 'square', 'hexagon']
      
      for (let i = 0; i < this.shapeCount; i++) {
        this.shapes.push(markRaw({
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.5 + 0.2,
          style: {
            left: '0%',
            top: '0%',
            transform: 'rotate(0deg) scale(1)',
            opacity: 0.3
          }
        }))
      }
    },
    
    initRipples() {
      this.ripples = []
      for (let i = 0; i < this.rippleCount; i++) {
        this.ripples.push(markRaw({
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0,
          maxScale: Math.random() * 2 + 1,
          speed: Math.random() * 0.02 + 0.01,
          opacity: 0,
          style: {
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: 0
          }
        }))
      }
    },
    
    startAnimation() {
      const animate = () => {
        this.time += 0.016 // 60fps
        
        this.updateClipPath()
        this.updateParticles()
        this.updateShapes()
        this.updateRipples()
        
        this.animationId = requestAnimationFrame(animate)
      }
      
      animate()
    },
    
    stopAnimation() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }
    },
    
    updateClipPath() {
      if (this.isIntroActive) {
        // 创建动态的多边形动画
        const speed = 0.5
        const amplitude = 30
        
        this.point1X = 50 + Math.sin(this.time * speed) * amplitude
        this.point1Y = 50 + Math.cos(this.time * speed * 0.7) * amplitude
        
        this.point2X = 50 + Math.sin(this.time * speed + Math.PI / 2) * amplitude
        this.point2Y = 50 + Math.cos(this.time * speed * 0.7 + Math.PI / 2) * amplitude
        
        this.point3X = 50 + Math.sin(this.time * speed + Math.PI) * amplitude
        this.point3Y = 50 + Math.cos(this.time * speed * 0.7 + Math.PI) * amplitude
        
        this.point4X = 50 + Math.sin(this.time * speed + Math.PI * 1.5) * amplitude
        this.point4Y = 50 + Math.cos(this.time * speed * 0.7 + Math.PI * 1.5) * amplitude
      } else {
        // 回到中心位置
        this.point1X = 50
        this.point1Y = 50
        this.point2X = 50
        this.point2Y = 50
        this.point3X = 50
        this.point3Y = 50
        this.point4X = 50
        this.point4Y = 50
      }
    },
    
    updateParticles() {
      this.particles.forEach(particle => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy
        
        // 边界检测
        if (particle.x < 0 || particle.x > 100) particle.vx *= -1
        if (particle.y < 0 || particle.y > 100) particle.vy *= -1
        
        // 限制边界
        particle.x = Math.max(0, Math.min(100, particle.x))
        particle.y = Math.max(0, Math.min(100, particle.y))
        
        // 更新透明度
        particle.opacity = 0.3 + Math.sin(this.time * 2 + particle.x * 0.1) * 0.3
        
        // 更新样式
        particle.style.left = `${particle.x}%`
        particle.style.top = `${particle.y}%`
        particle.style.width = `${particle.size}px`
        particle.style.height = `${particle.size}px`
        particle.style.opacity = particle.opacity
        particle.style.background = `hsl(${particle.hue}, 70%, 60%)`
      })
    },
    
    updateShapes() {
      this.shapes.forEach(shape => {
        // 更新旋转
        shape.rotation += shape.speed
        
        // 更新缩放
        const pulseScale = 1 + Math.sin(this.time * 2 + shape.x * 0.1) * 0.2
        
        // 更新位置（缓慢移动）
        shape.x += Math.sin(this.time * 0.1 + shape.y * 0.1) * 0.1
        shape.y += Math.cos(this.time * 0.1 + shape.x * 0.1) * 0.1
        
        // 边界检测
        if (shape.x < 0) shape.x = 100
        if (shape.x > 100) shape.x = 0
        if (shape.y < 0) shape.y = 100
        if (shape.y > 100) shape.y = 0
        
        // 更新样式
        shape.style.left = `${shape.x}%`
        shape.style.top = `${shape.y}%`
        shape.style.transform = `translate(-50%, -50%) rotate(${shape.rotation}deg) scale(${shape.scale * pulseScale})`
        shape.style.opacity = 0.2 + Math.sin(this.time + shape.x * 0.1) * 0.2
      })
    },
    
    updateRipples() {
      this.ripples.forEach(ripple => {
        // 更新缩放
        ripple.scale += ripple.speed
        
        // 更新透明度
        const progress = ripple.scale / ripple.maxScale
        ripple.opacity = progress < 0.5 ? progress * 2 : (1 - progress) * 2
        
        // 重置波纹
        if (ripple.scale >= ripple.maxScale) {
          ripple.scale = 0
          ripple.x = Math.random() * 100
          ripple.y = Math.random() * 100
        }
        
        // 更新样式
        ripple.style.left = `${ripple.x}%`
        ripple.style.top = `${ripple.y}%`
        ripple.style.transform = `translate(-50%, -50%) scale(${ripple.scale})`
        ripple.style.opacity = ripple.opacity * 0.3
      })
    },
    
    toggleIntro() {
      this.isIntroActive = !this.isIntroActive
    },
    
    changeTheme() {
      const themes = Object.keys(this.themes)
      const currentIndex = themes.indexOf(this.currentTheme)
      const nextIndex = (currentIndex + 1) % themes.length
      this.currentTheme = themes[nextIndex]
    }
  }
}
</script>

<style scoped lang="scss">
.masaigon-canvas-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.app-canvas {
  --point1X: 50%;
  --point1Y: 50%;
  --point2X: 50%;
  --point2Y: 50%;
  --point3X: 50%;
  --point3Y: 50%;
  --point4X: 50%;
  --point4Y: 50%;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1a1a2e, #16213e, #0f3460);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  
  &.-intro-active {
    clip-path: polygon(
      var(--point1X) var(--point1Y),
      var(--point2X) var(--point2Y),
      var(--point3X) var(--point3Y),
      var(--point4X) var(--point4Y)
    );
  }
}

.particles-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: var(--accent-color, #8B3A9C);
  filter: blur(0.5px);
  box-shadow: 0 0 10px currentColor;
}

.geometry-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.shape {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent-color, #8B3A9C);
  
  &.circle {
    border-radius: 50%;
  }
  
  &.triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--accent-color, #8B3A9C);
    border-top: none;
  }
  
  &.square {
    border-radius: 2px;
  }
  
  &.hexagon {
    width: 20px;
    height: 11px;
    background: var(--accent-color, #8B3A9C);
    position: relative;
    
    &:before {
      content: "";
      position: absolute;
      top: -5px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 5px solid var(--accent-color, #8B3A9C);
    }
    
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 5px solid var(--accent-color, #8B3A9C);
    }
  }
}

.ripple-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ripple {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid var(--secondary-color, #2E86AB);
  border-radius: 50%;
  pointer-events: none;
}

.controls {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 1000;
}

.control-btn {
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  color: white;
  font-family: 'BioRhyme', serif;
  font-size: 14px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .controls {
    bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
  
  .control-btn {
    width: 150px;
    text-align: center;
  }
}
</style> 
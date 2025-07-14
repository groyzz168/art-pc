<template>
  <div class="fluid-background">
    <!-- 基础水波纹背景 -->
    <div class="wave-container">
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
    </div>
    
    <!-- 粒子流体系统 -->
    <canvas 
      ref="particleCanvas"
      class="particle-canvas"
      :width="canvasWidth"
      :height="canvasHeight"
    ></canvas>
    
    <!-- 光晕效果 -->
    <div class="glow-effects">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasaigonBackground',
  props: {
    animated: {
      type: Boolean,
      default: true
    },
    intensity: {
      type: Number,
      default: 1,
      validator: value => value >= 0 && value <= 2
    }
  },
  
  data() {
    return {
      canvas: null,
      ctx: null,
      canvasWidth: 0,
      canvasHeight: 0,
      animationId: null,
      
      // 粒子系统
      particles: [],
      particleCount: 200,
      
      // 流体物理参数
      flowField: [],
      flowResolution: 20,
      time: 0,
      
      // 五彩颜色配置
      colors: [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
      ],
      
      // 水波纹参数
      waveAmplitude: 30,
      waveFrequency: 0.02,
      waveSpeed: 0.03
    }
  },
  
  mounted() {
    this.initCanvas()
    this.initParticles()
    this.initFlowField()
    this.handleResize()
    
    window.addEventListener('resize', this.handleResize)
    
    if (this.animated) {
      this.startAnimation()
    }
  },
  
  beforeUnmount() {
    this.stopAnimation()
    window.removeEventListener('resize', this.handleResize)
  },
  
  watch: {
    animated(newVal) {
      if (newVal) {
        this.startAnimation()
      } else {
        this.stopAnimation()
      }
    }
  },
  
  methods: {
    initCanvas() {
      this.canvas = this.$refs.particleCanvas
      this.ctx = this.canvas.getContext('2d')
      this.handleResize()
    },
    
    handleResize() {
      this.canvasWidth = window.innerWidth
      this.canvasHeight = window.innerHeight
      
      if (this.canvas) {
        this.canvas.width = this.canvasWidth
        this.canvas.height = this.canvasHeight
      }
      
      this.initFlowField()
    },
    
    initFlowField() {
      this.flowField = []
      const cols = Math.floor(this.canvasWidth / this.flowResolution)
      const rows = Math.floor(this.canvasHeight / this.flowResolution)
      
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const angle = (x * 0.1 + y * 0.1) * Math.PI
          this.flowField.push({
            x: x * this.flowResolution,
            y: y * this.flowResolution,
            angle: angle,
            magnitude: 0.5
          })
        }
      }
    },
    
    initParticles() {
      this.particles = []
      
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          alpha: Math.random() * 0.4 + 0.2,
          life: Math.random() * 800 + 400,
          maxLife: Math.random() * 800 + 400
        })
      }
    },
    
    startAnimation() {
      if (this.animationId) return
      
      const animate = () => {
        this.time += 0.016 * this.intensity
        
        this.updateFlowField()
        this.updateParticles()
        this.render()
        
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
    
    updateFlowField() {
      this.flowField.forEach((field, index) => {
        const x = field.x / this.flowResolution
        const y = field.y / this.flowResolution
        
        // 创建复杂的流场模式 - 降低频率使流动更缓慢
        const angle1 = Math.sin(x * 0.05 + this.time * 0.2) * Math.PI
        const angle2 = Math.cos(y * 0.05 + this.time * 0.15) * Math.PI
        const angle3 = Math.sin((x + y) * 0.03 + this.time * 0.3) * Math.PI
        
        field.angle = (angle1 + angle2 + angle3) / 3
        field.magnitude = 0.15 + Math.sin(this.time * 0.2 + index * 0.1) * 0.1
      })
    },
    
    updateParticles() {
      this.particles.forEach(particle => {
        // 应用流场力 - 减小力度
        const fieldIndex = Math.floor(particle.y / this.flowResolution) * Math.floor(this.canvasWidth / this.flowResolution) + Math.floor(particle.x / this.flowResolution)
        const field = this.flowField[fieldIndex]
        
        if (field) {
          const force = field.magnitude * this.intensity
          particle.vx += Math.cos(field.angle) * force * 0.03
          particle.vy += Math.sin(field.angle) * force * 0.03
        }
        
        // 添加水流效果 - 减小强度
        particle.vx += Math.sin(this.time * 0.2 + particle.y * 0.005) * 0.03
        particle.vy += Math.cos(this.time * 0.15 + particle.x * 0.005) * 0.03
        
        // 限制速度 - 降低最大速度
        const maxSpeed = 0.8
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed
          particle.vy = (particle.vy / speed) * maxSpeed
        }
        
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy
        
        // 边界处理 - 循环
        if (particle.x < 0) particle.x = this.canvasWidth
        if (particle.x > this.canvasWidth) particle.x = 0
        if (particle.y < 0) particle.y = this.canvasHeight
        if (particle.y > this.canvasHeight) particle.y = 0
        
        // 生命周期
        particle.life--
        if (particle.life <= 0) {
          particle.x = Math.random() * this.canvasWidth
          particle.y = Math.random() * this.canvasHeight
          particle.vx = (Math.random() - 0.5) * 0.8
          particle.vy = (Math.random() - 0.5) * 0.8
          particle.color = this.colors[Math.floor(Math.random() * this.colors.length)]
          particle.life = particle.maxLife
        }
        
        // 动态透明度 - 降低变化频率
        particle.alpha = 0.3 + Math.sin(this.time * 1 + particle.x * 0.005) * 0.2
      })
    },
    
    render() {
      if (!this.ctx) return
      
      // 清空画布，创建更长的拖尾效果
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      
      // 绘制粒子
      this.particles.forEach(particle => {
        // 绘制多层发光效果创造拖尾
        for (let i = 0; i < 3; i++) {
          const glowAlpha = particle.alpha * (0.3 - i * 0.1)
          const glowSize = particle.size * (1 + i * 0.8)
          
          this.ctx.globalAlpha = glowAlpha
          this.ctx.fillStyle = particle.color
          
          // 创建渐变发光效果
          const gradient = this.ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, glowSize * 2
          )
          gradient.addColorStop(0, particle.color)
          gradient.addColorStop(0.5, particle.color + '80')
          gradient.addColorStop(1, particle.color + '00')
          
          this.ctx.fillStyle = gradient
          this.ctx.shadowColor = particle.color
          this.ctx.shadowBlur = 15 + i * 5
          
          this.ctx.beginPath()
          this.ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
          this.ctx.fill()
        }
        
        // 绘制核心粒子
        this.ctx.globalAlpha = particle.alpha * 0.8
        this.ctx.fillStyle = particle.color
        this.ctx.shadowColor = particle.color
        this.ctx.shadowBlur = 8
        
        this.ctx.beginPath()
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        this.ctx.fill()
        
        // 重置阴影
        this.ctx.shadowBlur = 0
      })
      
      this.ctx.globalAlpha = 1
    }
  }
}
</script>

<style scoped lang="scss">
.fluid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0f23 0%, #1a1f3a 30%, #2a2f5a 70%, #3a3f7a 100%);
  z-index: 1;
  pointer-events: none;
}

.wave-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 10%;
  opacity: 0.3;
}

.wave {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse at center, rgba(78, 205, 196, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: wave-flow 20s ease-in-out infinite;
  
  &.wave-1 {
    top: -50%;
    left: -50%;
    animation-delay: 0s;
    animation-duration: 25s;
  }
  
  &.wave-2 {
    top: -30%;
    left: -30%;
    animation-delay: -8s;
    animation-duration: 30s;
    background: radial-gradient(ellipse at center, rgba(69, 183, 209, 0.2) 0%, transparent 70%);
  }
  
  &.wave-3 {
    top: -70%;
    left: -70%;
    animation-delay: -15s;
    animation-duration: 35s;
    background: radial-gradient(ellipse at center, rgba(150, 206, 180, 0.25) 0%, transparent 70%);
  }
}

@keyframes wave-flow {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(10%, 5%) rotate(90deg) scale(1.1);
  }
  50% {
    transform: translate(5%, 10%) rotate(180deg) scale(0.9);
  }
  75% {
    transform: translate(-5%, 5%) rotate(270deg) scale(1.05);
  }
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 1000%;
  height: 1000%;
  z-index: 2;
}

.glow-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  animation: glow-pulse 8s ease-in-out infinite;
  
  &.glow-1 {
    width: 300px;
    height: 300px;
    top: 20%;
    left: 10%;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%);
    animation-delay: 0s;
  }
  
  &.glow-2 {
    width: 400px;
    height: 400px;
    top: 60%;
    right: 20%;
    background: radial-gradient(circle, rgba(78, 205, 196, 0.25) 0%, transparent 70%);
    animation-delay: -3s;
  }
  
  &.glow-3 {
    width: 250px;
    height: 250px;
    bottom: 20%;
    left: 50%;
    background: radial-gradient(circle, rgba(69, 183, 209, 0.2) 0%, transparent 70%);
    animation-delay: -6s;
  }
}

@keyframes glow-pulse {
  0%, 100% {
    transform: scale(1) translateY(0);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2) translateY(-20px);
    opacity: 0.6;
  }
}

// PC端专用样式优化
@media (min-width: 1024px) {
  .fluid-background {
    background: linear-gradient(135deg, #0a0f23 0%, #1a1f3a 20%, #2a2f5a 60%, #3a3f7a 100%);
  }
  
  .wave {
    animation-duration: 30s;
  }
  
  .glow {
    filter: blur(60px);
  }
}

// 高分辨率显示器优化
@media (min-resolution: 2dppx) {
  .particle-canvas {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
}
</style>
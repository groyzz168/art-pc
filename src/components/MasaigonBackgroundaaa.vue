<template>
  <div class="fluid-background">
    <!-- 纯黑底色 -->
    <div class="black-background"></div>
    
    <!-- 大片流体层 -->
    <canvas 
      ref="fluidCanvas"
      class="fluid-canvas"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'MasaigonBackground',
  data() {
    return {
      canvasWidth: 0,
      canvasHeight: 0,
      fluidCanvas: null,
      fluidCtx: null,
      animationId: null,
      time: 0,
      
      // 大片流体对象
      fluidBlobs: [],
      maxBlobs: 10,
      
      // 流体颜色 - 深色调，适合黑背景（增加透明度）
      fluidColors: [
        { r: 30, g: 60, b: 120, a: 0.25 },    // 深蓝
        { r: 60, g: 30, b: 120, a: 0.22 },    // 深紫
        { r: 20, g: 80, b: 100, a: 0.28 },    // 青色
        { r: 80, g: 40, b: 90, a: 0.24 },     // 紫红
        { r: 40, g: 90, b: 60, a: 0.26 },     // 深绿
        { r: 100, g: 60, b: 30, a: 0.23 },    // 暖橙
        { r: 90, g: 20, b: 80, a: 0.25 },     // 深紫红
        { r: 30, g: 100, b: 80, a: 0.27 }     // 青绿
      ]
    }
  },
  
  mounted() {
    this.$nextTick(() => {
      this.initCanvas()
      this.handleResize()
      this.initFluidBlobs()
      this.startAnimation()
      window.addEventListener('resize', this.handleResize)
    })
  },
  
  beforeUnmount() {
    this.stopAnimation()
    window.removeEventListener('resize', this.handleResize)
  },
  
  methods: {
    initCanvas() {
      this.fluidCanvas = this.$refs.fluidCanvas
      if (!this.fluidCanvas) return
      
      this.fluidCtx = this.fluidCanvas.getContext('2d')
      this.fluidCtx.imageSmoothingEnabled = true
      this.fluidCtx.imageSmoothingQuality = 'high'
    },
    
    handleResize() {
      this.canvasWidth = window.innerWidth
      this.canvasHeight = window.innerHeight
      
      if (this.fluidCanvas) {
        const dpr = window.devicePixelRatio || 1
        
        this.fluidCanvas.width = this.canvasWidth * dpr
        this.fluidCanvas.height = this.canvasHeight * dpr
        this.fluidCanvas.style.width = this.canvasWidth + 'px'
        this.fluidCanvas.style.height = this.canvasHeight + 'px'
        
        this.fluidCtx.scale(dpr, dpr)
        this.initFluidBlobs()
      }
    },
    
    initFluidBlobs() {
      this.fluidBlobs = []
      
      for (let i = 0; i < this.maxBlobs; i++) {
        this.createFluidBlob()
      }
    },
    
    createFluidBlob() {
      const color = this.fluidColors[Math.floor(Math.random() * this.fluidColors.length)]
      
      // 创建大片不规则流体
      const blob = {
        // 中心点
        centerX: Math.random() * this.canvasWidth,
        centerY: Math.random() * this.canvasHeight,
        
        // 移动速度（增加速度，更明显的流动）
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        
        // 颜色
        color: { ...color },
        
        // 大小范围（增加大小，更明显）
        baseSize: Math.random() * 300 + 200,  // 200-500像素
        currentSize: 0,
        targetSize: 0,
        
        // 形状控制点（创建不规则形状）
        controlPoints: [],
        
        // 动画参数（增加变化频率）
        phase: Math.random() * Math.PI * 2,
        frequency: Math.random() * 0.04 + 0.02,
        amplitude: Math.random() * 50 + 30,
        
        // 生命周期（延长生命周期）
        life: Math.random() * 2000 + 1500,
        maxLife: Math.random() * 2000 + 1500,
        
        // 形变参数（增加形变速度）
        morphSpeed: Math.random() * 0.025 + 0.015,
        morphPhase: Math.random() * Math.PI * 2,
        
        // 流动方向（添加整体流动趋势）
        flowDirection: Math.random() * Math.PI * 2,
        flowStrength: Math.random() * 0.5 + 0.3
      }
      
      // 生成8-12个控制点创建不规则形状
      const pointCount = Math.floor(Math.random() * 5) + 8
      for (let i = 0; i < pointCount; i++) {
        const angle = (i / pointCount) * Math.PI * 2
        const distance = blob.baseSize * (0.6 + Math.random() * 0.4)
        
        blob.controlPoints.push({
          angle: angle,
          distance: distance,
          baseDistance: distance,
          frequency: Math.random() * 0.05 + 0.02,
          amplitude: Math.random() * 60 + 40,
          phase: Math.random() * Math.PI * 2
        })
      }
      
      blob.currentSize = blob.baseSize
      blob.targetSize = blob.baseSize
      
      this.fluidBlobs.push(blob)
    },
    
    startAnimation() {
      if (this.animationId) return
      this.animate()
    },
    
    stopAnimation() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }
    },
    
    animate() {
      this.time += 0.016
      this.updateFluidBlobs()
      this.render()
      this.animationId = requestAnimationFrame(() => this.animate())
    },
    
    updateFluidBlobs() {
      this.fluidBlobs.forEach((blob, index) => {
        // 添加整体流动趋势
        const flowX = Math.cos(blob.flowDirection) * blob.flowStrength
        const flowY = Math.sin(blob.flowDirection) * blob.flowStrength
        
        // 缓慢移动（增加流动感）
        blob.centerX += blob.vx + flowX
        blob.centerY += blob.vy + flowY
        
        // 边界处理（更自然的循环）
        if (blob.centerX < -blob.baseSize) {
          blob.centerX = this.canvasWidth + blob.baseSize
        } else if (blob.centerX > this.canvasWidth + blob.baseSize) {
          blob.centerX = -blob.baseSize
        }
        
        if (blob.centerY < -blob.baseSize) {
          blob.centerY = this.canvasHeight + blob.baseSize
        } else if (blob.centerY > this.canvasHeight + blob.baseSize) {
          blob.centerY = -blob.baseSize
        }
        
        // 随机改变目标大小（更频繁）
        if (Math.random() < 0.01) {
          blob.targetSize = blob.baseSize * (0.6 + Math.random() * 0.8)
        }
        
        // 平滑过渡到目标大小（更快响应）
        blob.currentSize += (blob.targetSize - blob.currentSize) * 0.05
        
        // 更新控制点（创建形变效果）
        blob.controlPoints.forEach(point => {
          const distanceVariation = Math.sin(this.time * point.frequency + point.phase) * point.amplitude
          point.distance = point.baseDistance + distanceVariation
        })
        
        // 整体形变
        blob.morphPhase += blob.morphSpeed
        
        // 随机改变速度方向（更频繁的变化）
        if (Math.random() < 0.02) {
          blob.vx += (Math.random() - 0.5) * 0.3
          blob.vy += (Math.random() - 0.5) * 0.3
          
          // 限制最大速度
          const maxSpeed = 1.5
          const speed = Math.sqrt(blob.vx * blob.vx + blob.vy * blob.vy)
          if (speed > maxSpeed) {
            blob.vx = (blob.vx / speed) * maxSpeed
            blob.vy = (blob.vy / speed) * maxSpeed
          }
        }
        
        // 随机改变流动方向
        if (Math.random() < 0.005) {
          blob.flowDirection += (Math.random() - 0.5) * 0.5
          blob.flowStrength = Math.random() * 0.5 + 0.3
        }
        
        // 生命周期
        blob.life--
        if (blob.life <= 0) {
          // 重新生成流体
          this.fluidBlobs[index] = null
          this.createFluidBlob()
          this.fluidBlobs[index] = this.fluidBlobs[this.fluidBlobs.length - 1]
          this.fluidBlobs.pop()
          this.fluidBlobs.push(this.fluidBlobs[index])
        }
      })
    },
    
    render() {
      if (!this.fluidCtx) return
      
      // 清除画布
      this.fluidCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      
      // 渲染每个流体团
      this.fluidBlobs.forEach(blob => {
        this.renderFluidBlob(blob)
      })
    },
    
    renderFluidBlob(blob) {
      const ctx = this.fluidCtx
      
      // 计算生命周期透明度
      const lifeRatio = blob.life / blob.maxLife
      const alpha = blob.color.a * Math.min(lifeRatio, 1)
      
      // 创建流体形状路径
      ctx.beginPath()
      
      // 使用控制点创建平滑的不规则形状
      const firstPoint = blob.controlPoints[0]
      const startX = blob.centerX + Math.cos(firstPoint.angle) * firstPoint.distance * (blob.currentSize / blob.baseSize)
      const startY = blob.centerY + Math.sin(firstPoint.angle) * firstPoint.distance * (blob.currentSize / blob.baseSize)
      
      ctx.moveTo(startX, startY)
      
      // 使用贝塞尔曲线连接所有控制点
      for (let i = 0; i < blob.controlPoints.length; i++) {
        const current = blob.controlPoints[i]
        const next = blob.controlPoints[(i + 1) % blob.controlPoints.length]
        
        const currentX = blob.centerX + Math.cos(current.angle) * current.distance * (blob.currentSize / blob.baseSize)
        const currentY = blob.centerY + Math.sin(current.angle) * current.distance * (blob.currentSize / blob.baseSize)
        
        const nextX = blob.centerX + Math.cos(next.angle) * next.distance * (blob.currentSize / blob.baseSize)
        const nextY = blob.centerY + Math.sin(next.angle) * next.distance * (blob.currentSize / blob.baseSize)
        
        // 计算控制点
        const cp1X = currentX + Math.cos(current.angle + Math.PI / 2) * 30
        const cp1Y = currentY + Math.sin(current.angle + Math.PI / 2) * 30
        const cp2X = nextX + Math.cos(next.angle - Math.PI / 2) * 30
        const cp2Y = nextY + Math.sin(next.angle - Math.PI / 2) * 30
        
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, nextX, nextY)
      }
      
      ctx.closePath()
      
      // 创建径向渐变填充
      const gradient = ctx.createRadialGradient(
        blob.centerX, blob.centerY, 0,
        blob.centerX, blob.centerY, blob.currentSize * 1.2
      )
      
      gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.8})`)
      gradient.addColorStop(0.4, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.5})`)
      gradient.addColorStop(0.7, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.2})`)
      gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`)
      
      ctx.fillStyle = gradient
      ctx.fill()
      
      // 添加柔和的发光效果
      ctx.shadowColor = `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.3})`
      ctx.shadowBlur = 20
      ctx.fill()
      ctx.shadowBlur = 0
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
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.black-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1;
}

.fluid-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  mix-blend-mode: screen;
  will-change: transform;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimizeQuality;
}

// PC端专用优化
@media (min-width: 1024px) {
  .fluid-canvas {
    filter: blur(1px);
    opacity: 0.9;
  }
}
</style> 
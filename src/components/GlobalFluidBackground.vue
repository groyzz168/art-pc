<template>
  <div class="global-fluid-background">
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
  name: 'GlobalFluidBackground',
  data() {
    return {
      canvasWidth: 0,
      canvasHeight: 0,
      fluidCanvas: null,
      fluidCtx: null,
      animationId: null,
      time: 0,
      frameCount: 0,
      
      // 性能优化参数
      targetFPS: 60, // 保持60fps但通过其他方式优化
      frameInterval: 1000 / 60,
      lastFrameTime: 0,
      
      // 减少流体数量以提高性能
      fluidBlobs: [],
      maxBlobs: 4, // 从8减少到4
      
      // 预计算的数学值缓存
      mathCache: {
        sin: new Array(360),
        cos: new Array(360),
        random: new Array(500), // 减少随机数缓存
        randomIndex: 0
      },
      
      // 流体颜色 - 保持透明度
      fluidColors: [
        { r: 70, g: 130, b: 220, a: 0.35 },    // 明亮蓝色
        { r: 150, g: 80, b: 200, a: 0.32 },    // 明亮紫色
        { r: 50, g: 180, b: 160, a: 0.38 },    // 明亮青色
        { r: 180, g: 90, b: 150, a: 0.33 },    // 明亮紫红
        { r: 100, g: 200, b: 120, a: 0.36 },   // 明亮绿色
        { r: 200, g: 60, b: 140, a: 0.34 }     // 明亮玫红
      ],
      
      // 视野裁剪优化
      viewportMargin: 100,
      lastResizeTime: 0,
      resizeThrottle: 250
    }
  },
  
  mounted() {
    this.$nextTick(() => {
      this.initMathCache()
      this.initCanvas()
      this.handleResize()
      this.initFluidBlobs()
      this.startAnimation()
      window.addEventListener('resize', this.throttledResize)
    })
  },
  
  beforeUnmount() {
    this.stopAnimation()
    window.removeEventListener('resize', this.throttledResize)
  },
  
  methods: {
    // 预计算数学函数缓存
    initMathCache() {
      // 预计算sin和cos值
      for (let i = 0; i < 360; i++) {
        const rad = (i * Math.PI) / 180
        this.mathCache.sin[i] = Math.sin(rad)
        this.mathCache.cos[i] = Math.cos(rad)
      }
      
      // 预生成随机数
      for (let i = 0; i < 500; i++) {
        this.mathCache.random[i] = Math.random()
      }
    },
    
    // 优化的三角函数
    fastSin(angle) {
      const deg = Math.floor((angle * 180 / Math.PI) % 360)
      if (deg < 0) return this.mathCache.sin[deg + 360] || Math.sin(angle)
      return this.mathCache.sin[deg] || Math.sin(angle)
    },
    
    fastCos(angle) {
      const deg = Math.floor((angle * 180 / Math.PI) % 360)
      if (deg < 0) return this.mathCache.cos[deg + 360] || Math.cos(angle)
      return this.mathCache.cos[deg] || Math.cos(angle)
    },
    
    // 优化的随机数生成
    fastRandom() {
      const value = this.mathCache.random[this.mathCache.randomIndex]
      this.mathCache.randomIndex = (this.mathCache.randomIndex + 1) % 500
      return value
    },
    
    initCanvas() {
      this.fluidCanvas = this.$refs.fluidCanvas
      if (!this.fluidCanvas) return
      
      this.fluidCtx = this.fluidCanvas.getContext('2d', {
        alpha: true,
        desynchronized: true,
        willReadFrequently: false
      })
      
      // 优化canvas设置
      this.fluidCtx.imageSmoothingEnabled = true
      this.fluidCtx.imageSmoothingQuality = 'medium' // 平衡质量和性能
    },
    
    // 节流的resize处理
    throttledResize() {
      const now = Date.now()
      if (now - this.lastResizeTime > this.resizeThrottle) {
        this.handleResize()
        this.lastResizeTime = now
      }
    },
    
    handleResize() {
      this.canvasWidth = window.innerWidth
      this.canvasHeight = window.innerHeight
      
      if (this.fluidCanvas) {
        // 使用适中的DPI以平衡性能和质量
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
        
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
      const color = this.fluidColors[Math.floor(this.fastRandom() * this.fluidColors.length)]
      
      const blob = {
        // 中心点
        centerX: this.fastRandom() * this.canvasWidth,
        centerY: this.fastRandom() * this.canvasHeight,
        
        // 移动速度
        vx: (this.fastRandom() - 0.5) * 1.5, // 减少速度
        vy: (this.fastRandom() - 0.5) * 1.5,
        
        // 颜色
        color: { ...color },
        
        // 大小范围 - 稍微增大以补偿数量减少
        baseSize: this.fastRandom() * 400 + 300,
        currentSize: 0,
        targetSize: 0,
        
        // 简化的脉动效果
        pulsePhase: this.fastRandom() * Math.PI * 2,
        pulseSpeed: this.fastRandom() * 0.03 + 0.015, // 减慢脉动
        pulseAmplitude: this.fastRandom() * 0.2 + 0.1,
        
        // 旋转效果
        rotation: 0,
        rotationSpeed: (this.fastRandom() - 0.5) * 0.015, // 减慢旋转
        
        // 减少控制点数量
        controlPoints: [],
        
        // 动画参数
        phase: this.fastRandom() * Math.PI * 2,
        frequency: this.fastRandom() * 0.02 + 0.01, // 减慢频率
        amplitude: this.fastRandom() * 40 + 25,
        
        // 生命周期
        life: this.fastRandom() * 6000 + 4000, // 增加生命周期
        maxLife: this.fastRandom() * 6000 + 4000,
        
        // 形变参数
        morphSpeed: this.fastRandom() * 0.015 + 0.01, // 减慢形变
        morphPhase: this.fastRandom() * Math.PI * 2,
        
        // 流动方向
        flowDirection: this.fastRandom() * Math.PI * 2,
        flowStrength: this.fastRandom() * 0.3 + 0.2, // 减少流动强度
        
        // 简化的震荡效果
        jitterStrength: this.fastRandom() * 1.5 + 0.5,
        
        // 性能优化：减少随机更新频率
        updateCounter: 0,
        
        // 视野裁剪
        isVisible: true,
        lastVisibilityCheck: 0
      }
      
      // 减少控制点数量：4-6个
      const pointCount = Math.floor(this.fastRandom() * 3) + 4
      for (let i = 0; i < pointCount; i++) {
        const angle = (i / pointCount) * Math.PI * 2
        const distance = blob.baseSize * (0.7 + this.fastRandom() * 0.3)
        
        blob.controlPoints.push({
          angle: angle,
          distance: distance,
          baseDistance: distance,
          frequency: this.fastRandom() * 0.03 + 0.015,
          amplitude: this.fastRandom() * 30 + 20,
          phase: this.fastRandom() * Math.PI * 2
        })
      }
      
      blob.currentSize = blob.baseSize
      blob.targetSize = blob.baseSize
      
      this.fluidBlobs.push(blob)
    },
    
    startAnimation() {
      if (this.animationId) return
      this.lastFrameTime = performance.now()
      this.animate()
    },
    
    stopAnimation() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
        this.animationId = null
      }
    },
    
    animate(currentTime) {
      this.animationId = requestAnimationFrame((time) => this.animate(time))
      
      // 帧率控制
      if (currentTime - this.lastFrameTime < this.frameInterval) {
        return
      }
      
      this.time += 0.03 // 稍微减慢时间步长
      this.frameCount++
      
      // 每3帧更新一次以提高性能
      if (this.frameCount % 2 === 0) {
        this.updateFluidBlobs()
      }
      
      this.render()
      this.lastFrameTime = currentTime
    },
    
    updateFluidBlobs() {
      this.fluidBlobs.forEach((blob, index) => {
        blob.updateCounter++
        
        // 视野裁剪检查（每30帧检查一次）
        if (blob.updateCounter % 30 === 0) {
          blob.isVisible = this.isInViewport(blob)
          blob.lastVisibilityCheck = blob.updateCounter
        }
        
        // 如果不在视野内，跳过大部分计算
        if (!blob.isVisible) {
          // 只更新位置，跳过复杂计算
          blob.centerX += blob.vx
          blob.centerY += blob.vy
          this.handleBoundary(blob)
          return
        }
        
        // 减少随机变化频率
        if (blob.updateCounter % 60 === 0) { // 每60帧更新一次
          blob.vx += (this.fastRandom() - 0.5) * 0.1
          blob.vy += (this.fastRandom() - 0.5) * 0.1
          
          // 限制最大速度
          const maxSpeed = 2.0
          const speed = Math.sqrt(blob.vx * blob.vx + blob.vy * blob.vy)
          if (speed > maxSpeed) {
            blob.vx = (blob.vx / speed) * maxSpeed
            blob.vy = (blob.vy / speed) * maxSpeed
          }
        }
        
        // 简化的震荡计算
        const jitterX = this.fastSin(this.time * 0.08 + blob.phase) * blob.jitterStrength
        const jitterY = this.fastCos(this.time * 0.12 + blob.phase + 1) * blob.jitterStrength
        
        // 流动效果
        const flowX = this.fastCos(blob.flowDirection) * blob.flowStrength
        const flowY = this.fastSin(blob.flowDirection) * blob.flowStrength
        
        // 更新旋转
        blob.rotation += blob.rotationSpeed
        
        // 脉动效果
        blob.pulsePhase += blob.pulseSpeed
        const pulseScale = 1 + this.fastSin(blob.pulsePhase) * blob.pulseAmplitude
        
        // 更新位置
        blob.centerX += blob.vx + flowX + jitterX * 0.5
        blob.centerY += blob.vy + flowY + jitterY * 0.5
        
        // 边界处理
        this.handleBoundary(blob)
        
        // 减少大小变化频率
        if (blob.updateCounter % 120 === 0) { // 每120帧更新一次
          blob.targetSize = blob.baseSize * (0.7 + this.fastRandom() * 0.6) * pulseScale
        }
        
        // 平滑过渡到目标大小
        blob.currentSize += (blob.targetSize - blob.currentSize) * 0.03
        
        // 更新控制点（减少频率）
        if (blob.updateCounter % 3 === 0) {
          blob.controlPoints.forEach(point => {
            const distanceVariation = this.fastSin(this.time * point.frequency + point.phase) * point.amplitude
            point.distance = point.baseDistance + distanceVariation
          })
        }
        
        // 形变更新
        blob.morphPhase += blob.morphSpeed
        
        // 生命周期
        blob.life--
        if (blob.life <= 0) {
          this.fluidBlobs[index] = null
          this.createFluidBlob()
          this.fluidBlobs[index] = this.fluidBlobs[this.fluidBlobs.length - 1]
          this.fluidBlobs.pop()
          this.fluidBlobs.push(this.fluidBlobs[index])
        }
      })
    },
    
    // 视野裁剪检查
    isInViewport(blob) {
      const margin = this.viewportMargin + blob.currentSize
      return (
        blob.centerX > -margin &&
        blob.centerX < this.canvasWidth + margin &&
        blob.centerY > -margin &&
        blob.centerY < this.canvasHeight + margin
      )
    },
    
    // 边界处理
    handleBoundary(blob) {
      const margin = blob.baseSize
      
      if (blob.centerX < -margin) {
        blob.centerX = this.canvasWidth + margin
        blob.vx = Math.abs(blob.vx) * 0.8
      } else if (blob.centerX > this.canvasWidth + margin) {
        blob.centerX = -margin
        blob.vx = -Math.abs(blob.vx) * 0.8
      }
      
      if (blob.centerY < -margin) {
        blob.centerY = this.canvasHeight + margin
        blob.vy = Math.abs(blob.vy) * 0.8
      } else if (blob.centerY > this.canvasHeight + margin) {
        blob.centerY = -margin
        blob.vy = -Math.abs(blob.vy) * 0.8
      }
    },
    
    render() {
      if (!this.fluidCtx) return
      
      // 清除画布
      this.fluidCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      
      // 只渲染可见的流体团
      this.fluidBlobs.forEach(blob => {
        if (blob.isVisible) {
          this.renderFluidBlob(blob)
        }
      })
    },
    
    renderFluidBlob(blob) {
      const ctx = this.fluidCtx
      
      // 计算生命周期透明度
      const lifeRatio = blob.life / blob.maxLife
      const alpha = blob.color.a * Math.min(lifeRatio, 1)
      
      // 如果透明度太低，跳过渲染
      if (alpha < 0.01) return
      
      // 保存当前变换状态
      ctx.save()
      
      // 应用旋转变换
      ctx.translate(blob.centerX, blob.centerY)
      ctx.rotate(blob.rotation)
      ctx.translate(-blob.centerX, -blob.centerY)
      
      // 创建流体形状路径
      ctx.beginPath()
      
      // 使用控制点创建平滑的不规则形状
      const firstPoint = blob.controlPoints[0]
      const startX = blob.centerX + this.fastCos(firstPoint.angle) * firstPoint.distance * (blob.currentSize / blob.baseSize)
      const startY = blob.centerY + this.fastSin(firstPoint.angle) * firstPoint.distance * (blob.currentSize / blob.baseSize)
      
      ctx.moveTo(startX, startY)
      
      // 使用贝塞尔曲线连接控制点
      for (let i = 0; i < blob.controlPoints.length; i++) {
        const current = blob.controlPoints[i]
        const next = blob.controlPoints[(i + 1) % blob.controlPoints.length]
        
        const currentX = blob.centerX + this.fastCos(current.angle) * current.distance * (blob.currentSize / blob.baseSize)
        const currentY = blob.centerY + this.fastSin(current.angle) * current.distance * (blob.currentSize / blob.baseSize)
        
        const nextX = blob.centerX + this.fastCos(next.angle) * next.distance * (blob.currentSize / blob.baseSize)
        const nextY = blob.centerY + this.fastSin(next.angle) * next.distance * (blob.currentSize / blob.baseSize)
        
        // 计算控制点
        const cp1X = currentX + (nextX - currentX) * 0.3
        const cp1Y = currentY + (nextY - currentY) * 0.3
        const cp2X = nextX - (nextX - currentX) * 0.3
        const cp2Y = nextY - (nextY - currentY) * 0.3
        
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, nextX, nextY)
      }
      
      ctx.closePath()
      
      // 创建径向渐变
      const gradient = ctx.createRadialGradient(
        blob.centerX, blob.centerY, 0,
        blob.centerX, blob.centerY, blob.currentSize
      )
      
      gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha})`)
      gradient.addColorStop(0.7, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.6})`)
      gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`)
      
      ctx.fillStyle = gradient
      ctx.fill()
      
      // 恢复变换状态
      ctx.restore()
    }
  }
}
</script>

<style scoped lang="scss">
.global-fluid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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
  will-change: transform;
  image-rendering: optimizeQuality;
  opacity: 1;
}

// 性能优化：减少重绘
@media (prefers-reduced-motion: reduce) {
  .fluid-canvas {
    animation: none;
  }
}

// 高性能设备优化
@media (min-width: 1024px) and (min-height: 768px) {
  .fluid-canvas {
    image-rendering: -webkit-optimize-contrast;
  }
}
</style> 
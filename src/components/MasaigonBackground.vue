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
      lastFrameTime: 0,
      
      // 大片流体对象
      fluidBlobs: [],
      maxBlobs: 3, // 减少数量到3个，避免叠层
      
      // 流体颜色 - masaigon.space 网站精确颜色（RGB格式）
      fluidColors: [
        { r: 9, g: 130, b: 137, a: 0.7 },      // masaigon主渐变起点 #02D8E5
        { r: 165, g: 98, b: 154, a: 0.65 },    // masaigon主渐变终点 #A5629A
        { r: 47, g: 185, b: 197, a: 0.75 },    // masaigon强调色 #2FB9C5
        { r: 9, g: 130, b: 137, a: 0.6 },     // masaigon主色 #098289
        { r: 1, g: 120, b: 127, a: 0.65 },     // masaigon向量渐变起点 #01787F
        { r: 63, g: 37, b: 59, a: 0.6 },      // masaigon深色调 #3F253B
        { r: 82, g: 46, b: 76, a: 0.62 },      // masaigon次要色 #522E4C
        { r: 139, g: 139, b: 139, a: 0.55 }     // masaigon灰色 #8B8B8B
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
      
      // 从右侧屏幕外开始，确保不与现有流体团重叠
      let startX, startY, attempts = 0
      do {
        startX = this.canvasWidth + 150
        startY = Math.random() * this.canvasHeight
        attempts++
      } while (this.checkCollisionAtPosition(startX, startY, 300) && attempts < 10) // 调整检测尺寸
      
      // 计算向左流动的角度，在-45度到+45度之间（相对于正左方向）
      const baseAngle = Math.PI // 180度，正左方向
      const randomAngle = (Math.random() - 0.5) * (Math.PI / 4) // ±45度
      const flowAngle = baseAngle + randomAngle
      
      // 基于角度计算速度
      const speed = Math.random() * 1.5 + 1.0 // 1.0-2.5的速度
      const vx = Math.cos(flowAngle) * speed
      const vy = Math.sin(flowAngle) * speed
      
      // 创建大片不规则流体 - 增大两倍尺寸
      const blob = {
        // 中心点（从右侧开始）
        centerX: startX,
        centerY: startY,
        
        // 移动速度（向左流动，有上下45度随机方向）
        vx: vx,
        vy: vy,
        
        // 颜色
        color: { ...color },
        
        // 大小范围 - 缩小流体团尺寸
        baseSize: Math.random() * 400 + 250,  // 250-650像素 (从400-1100缩小)
        currentSize: 0,
        targetSize: 0,
        
        // 形状控制点（创建不规则形状）
        controlPoints: [],
        
        // 椭圆拉伸参数 - 让流体团变长
        horizontalStretch: 1.8 + Math.random() * 0.6, // 1.8-2.4倍水平拉伸
        verticalCompress: 0.6 + Math.random() * 0.2,   // 0.6-0.8倍垂直压缩
        
        // 动画参数
        phase: Math.random() * Math.PI * 2,
        frequency: Math.random() * 0.03 + 0.015,
        amplitude: Math.random() * 40 + 25,
        
        // 生命周期（根据屏幕宽度调整）- 设置为无限，只通过位置判断
        life: Infinity, // 不再基于时间消失
        maxLife: Infinity,
        
        // 形变参数 - 减慢变化速度
        morphSpeed: Math.random() * 0.01 + 0.005, // 减慢一半
        morphPhase: Math.random() * Math.PI * 2,
        
        // 流动方向（主要向左，轻微波动）
        flowDirection: flowAngle,
        flowStrength: Math.random() * 0.3 + 0.2,
        baseFlowAngle: flowAngle,
        
        // 缩放变化速度 - 更缓慢
        sizeChangeSpeed: 0.01, // 非常缓慢的尺寸变化
        lastSizeChangeTime: 0,
        
        // 自然出现效果
        birthTime: this.time,
        fadeInDuration: 60, // 60帧淡入时间
        isFullyVisible: false,
        
        // 自然流动参数
        turbulenceStrength: Math.random() * 0.5 + 0.3, // 湍流强度
        turbulenceFrequency: Math.random() * 0.02 + 0.01, // 湍流频率
        flowVariation: Math.random() * 0.3 + 0.2, // 流动变化
        
        // 形状自然变化
        naturalMorphing: {
          basePhase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.005 + 0.002,
          intensity: Math.random() * 0.4 + 0.3
        }
      }
      
      // 生成8-12个控制点创建不规则形状，并应用椭圆拉伸
      const pointCount = Math.floor(Math.random() * 5) + 8
      for (let i = 0; i < pointCount; i++) {
        const angle = (i / pointCount) * Math.PI * 2
        
        // 基础距离
        let distance = blob.baseSize * (0.6 + Math.random() * 0.4)
        
        // 应用椭圆拉伸 - 水平方向拉长，垂直方向压缩
        const cosAngle = Math.cos(angle)
        const sinAngle = Math.sin(angle)
        
        // 根据角度调整距离，创造椭圆效果
        const horizontalFactor = Math.abs(cosAngle) * blob.horizontalStretch
        const verticalFactor = Math.abs(sinAngle) * blob.verticalCompress
        const stretchFactor = horizontalFactor + verticalFactor
        
        distance *= (0.8 + stretchFactor * 0.4) // 调整拉伸强度
        
        blob.controlPoints.push({
          angle: angle,
          distance: distance,
          baseDistance: distance,
          frequency: Math.random() * 0.03 + 0.015, // 更自然的频率
          amplitude: Math.random() * 25 + 15, // 更自然的振幅
          phase: Math.random() * Math.PI * 2,
          naturalOffset: Math.random() * 0.2 - 0.1 // 自然偏移
        })
      }
      
      // 初始状态：从很小开始淡入
      blob.currentSize = blob.baseSize * 0.1 // 从10%大小开始
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
    
    animate() {
      const currentTime = performance.now()
      const deltaTime = (currentTime - this.lastFrameTime) / 1000 // 转换为秒
      this.lastFrameTime = currentTime
      this.time += deltaTime
      this.updateFluidBlobs()
      this.render()
      this.animationId = requestAnimationFrame(() => this.animate())
    },
    
    updateFluidBlobs() {
      this.fluidBlobs.forEach((blob, index) => {
        // 自然淡入效果
        if (!blob.isFullyVisible) {
          const fadeProgress = (this.time - blob.birthTime) / blob.fadeInDuration
          if (fadeProgress >= 1) {
            blob.isFullyVisible = true
            blob.currentSize = blob.baseSize
          } else {
            // 平滑的淡入曲线
            const easedProgress = 1 - Math.pow(1 - fadeProgress, 3) // easeOut cubic
            blob.currentSize = blob.baseSize * (0.1 + 0.9 * easedProgress)
          }
        }
        
        // 更自然的波动效果 - 多层次湍流
        const primaryWave = Math.sin(this.time * blob.turbulenceFrequency + blob.phase) * blob.turbulenceStrength
        const secondaryWave = Math.cos(this.time * blob.turbulenceFrequency * 1.7 + blob.phase * 1.3) * blob.turbulenceStrength * 0.6
        const tertiaryWave = Math.sin(this.time * blob.turbulenceFrequency * 2.3 + blob.phase * 0.7) * blob.turbulenceStrength * 0.3
        
        const waveX = (primaryWave + secondaryWave + tertiaryWave) * 0.8
        const waveY = (Math.cos(this.time * blob.turbulenceFrequency * 0.8 + blob.phase) + 
                      Math.sin(this.time * blob.turbulenceFrequency * 1.4 + blob.phase * 1.1) * 0.7) * blob.turbulenceStrength * 0.6
        
        // 主要流动（向左）+ 自然湍流
        blob.centerX += blob.vx + waveX
        blob.centerY += blob.vy + waveY
        
        // 碰撞检测和避让
        this.fluidBlobs.forEach((otherBlob, otherIndex) => {
          if (index !== otherIndex) {
            const dx = blob.centerX - otherBlob.centerX
            const dy = blob.centerY - otherBlob.centerY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const minDistance = (blob.currentSize + otherBlob.currentSize) / 2 + 40
            
            if (distance < minDistance && distance > 0) {
              // 更自然的推开力
              const pushForce = (minDistance - distance) / minDistance * 0.3
              const pushX = (dx / distance) * pushForce
              const pushY = (dy / distance) * pushForce
              
              blob.centerX += pushX
              blob.centerY += pushY
              // 减小对速度的影响，让流动更自然
              blob.vx += pushX * 0.05
              blob.vy += pushY * 0.05
            }
          }
        })
        
        // 边界处理：从左侧出屏幕后重新生成
        if (blob.centerX < -blob.baseSize - 150) {
          this.regenerateFluidBlob(blob)
        }
        
        // 更自然的上下边界处理
        const edgeBuffer = blob.baseSize / 3
        if (blob.centerY < edgeBuffer) {
          const penetration = edgeBuffer - blob.centerY
          blob.vy += penetration * 0.02 // 柔和的恢复力
          blob.centerY = edgeBuffer
        } else if (blob.centerY > this.canvasHeight - edgeBuffer) {
          const penetration = blob.centerY - (this.canvasHeight - edgeBuffer)
          blob.vy -= penetration * 0.02 // 柔和的恢复力
          blob.centerY = this.canvasHeight - edgeBuffer
        }
        
        // 只有完全可见后才进行尺寸变化
        if (blob.isFullyVisible) {
          // 非常缓慢的随机改变目标大小
          if (this.time - blob.lastSizeChangeTime > 300) { // 增加到300帧
            if (Math.random() < 0.002) { // 降低概率
              blob.targetSize = blob.baseSize * (0.85 + Math.random() * 0.3) // 更小的变化范围
              blob.lastSizeChangeTime = this.time
            }
          }
          
          // 非常平滑缓慢的过渡到目标大小
          blob.currentSize += (blob.targetSize - blob.currentSize) * (blob.sizeChangeSpeed * 0.5)
        }
        
        // 更自然的控制点变化
        blob.controlPoints.forEach(point => {
          // 多层次的自然变化
          const primaryVariation = Math.sin(this.time * point.frequency + point.phase) * point.amplitude
          const secondaryVariation = Math.cos(this.time * point.frequency * 1.6 + point.phase * 0.8) * point.amplitude * 0.4
          const naturalDrift = Math.sin(this.time * 0.003 + point.phase) * point.amplitude * 0.2
          
          point.distance = point.baseDistance + primaryVariation + secondaryVariation + naturalDrift + point.naturalOffset * 10
        })
        
        // 更自然的整体形变
        blob.naturalMorphing.basePhase += blob.naturalMorphing.phaseSpeed
        const morphInfluence = Math.sin(blob.naturalMorphing.basePhase) * blob.naturalMorphing.intensity
        
        // 应用形变到控制点
        blob.controlPoints.forEach((point, i) => {
          const pointMorph = Math.sin(blob.naturalMorphing.basePhase + i * 0.5) * morphInfluence * 15
          point.distance += pointMorph
        })
        
        // 更自然的流动方向调整
        if (Math.random() < 0.003) { // 降低频率
          const maxDeviation = Math.PI / 8 // 减小到22.5度
          const currentDeviation = blob.flowDirection - blob.baseFlowAngle
          
          if (Math.abs(currentDeviation) < maxDeviation) {
            // 更自然的方向变化
            const naturalChange = (Math.random() - 0.5) * 0.02 * blob.flowVariation
            blob.flowDirection += naturalChange
          } else {
            // 更柔和地拉回到基础角度
            blob.flowDirection += (blob.baseFlowAngle - blob.flowDirection) * 0.02
          }
          
          // 保持速度稳定
          const currentSpeed = Math.sqrt(blob.vx * blob.vx + blob.vy * blob.vy)
          blob.vx = Math.cos(blob.flowDirection) * currentSpeed
          blob.vy = Math.sin(blob.flowDirection) * currentSpeed
        }
        
        // 速度阻尼，让流动更自然
        blob.vx *= 0.999
        blob.vy *= 0.999
      })
    },
    
    regenerateFluidBlob(blob) {
      // 重新从右侧生成流体团，确保不重叠
      let startX, startY, attempts = 0
      do {
        startX = this.canvasWidth + 150
        startY = Math.random() * this.canvasHeight
        attempts++
      } while (this.checkCollisionAtPosition(startX, startY, 300) && attempts < 10)
      
      // 计算新的流动角度
      const baseAngle = Math.PI
      const randomAngle = (Math.random() - 0.5) * (Math.PI / 4)
      const flowAngle = baseAngle + randomAngle
      
      // 新的速度
      const speed = Math.random() * 1.5 + 1.0
      const vx = Math.cos(flowAngle) * speed
      const vy = Math.sin(flowAngle) * speed
      
      // 重置属性
      Object.assign(blob, {
        centerX: startX,
        centerY: startY,
        vx: vx,
        vy: vy,
        baseSize: Math.random() * 400 + 250,
        life: Infinity, // 不再基于时间消失
        maxLife: Infinity,
        flowDirection: flowAngle,
        baseFlowAngle: flowAngle,
        flowStrength: Math.random() * 0.3 + 0.2,
        color: this.fluidColors[Math.floor(Math.random() * this.fluidColors.length)],
        sizeChangeSpeed: 0.01,
        lastSizeChangeTime: 0,
        morphSpeed: Math.random() * 0.01 + 0.005,
        horizontalStretch: 1.8 + Math.random() * 0.6,
        verticalCompress: 0.6 + Math.random() * 0.2,
        
        // 重置自然效果参数
        birthTime: this.time,
        fadeInDuration: 60,
        isFullyVisible: false,
        turbulenceStrength: Math.random() * 0.5 + 0.3,
        turbulenceFrequency: Math.random() * 0.02 + 0.01,
        flowVariation: Math.random() * 0.3 + 0.2,
        naturalMorphing: {
          basePhase: Math.random() * Math.PI * 2,
          phaseSpeed: Math.random() * 0.005 + 0.002,
          intensity: Math.random() * 0.4 + 0.3
        }
      })
      
      // 重新生成控制点
      blob.controlPoints = []
      const pointCount = Math.floor(Math.random() * 5) + 8
      for (let i = 0; i < pointCount; i++) {
        const angle = (i / pointCount) * Math.PI * 2
        let distance = blob.baseSize * (0.6 + Math.random() * 0.4)
        
        const cosAngle = Math.cos(angle)
        const sinAngle = Math.sin(angle)
        const horizontalFactor = Math.abs(cosAngle) * blob.horizontalStretch
        const verticalFactor = Math.abs(sinAngle) * blob.verticalCompress
        const stretchFactor = horizontalFactor + verticalFactor
        
        distance *= (0.8 + stretchFactor * 0.4)
        
        blob.controlPoints.push({
          angle: angle,
          distance: distance,
          baseDistance: distance,
          frequency: Math.random() * 0.03 + 0.015,
          amplitude: Math.random() * 25 + 15,
          phase: Math.random() * Math.PI * 2,
          naturalOffset: Math.random() * 0.2 - 0.1
        })
      }
      
      // 从小尺寸开始淡入
      blob.currentSize = blob.baseSize * 0.1
      blob.targetSize = blob.baseSize
    },
    
    render() {
      if (!this.fluidCtx || !this.canvasWidth || !this.canvasHeight) return
      
      // 清除画布
      this.fluidCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      
      // 渲染每个流体团
      this.fluidBlobs.forEach(blob => {
        // 简单的视野裁剪优化
        if (blob.centerX < -blob.baseSize * 2 || blob.centerX > this.canvasWidth + blob.baseSize * 2) {
          return
        }
        this.renderFluidBlob(blob)
      })
    },
    
    renderFluidBlob(blob) {
      const ctx = this.fluidCtx
      
      // 计算透明度 - 不再基于生命周期，保持稳定
      let alpha = Math.min(blob.color.a, 1.0) // 确保透明度不超过1
      
      // 淡入效果的透明度调整
      if (!blob.isFullyVisible) {
        const fadeProgress = Math.min((this.time - blob.birthTime) / blob.fadeInDuration, 1.0)
        const easedFade = 1 - Math.pow(1 - fadeProgress, 2) // easeOut quad
        alpha *= easedFade
      }
      
      // 如果透明度太低，跳过渲染
      if (alpha < 0.01) return
      
      // 创建流体形状路径
      ctx.beginPath()
      
      // 使用控制点创建平滑的不规则形状
      const firstPoint = blob.controlPoints[0]
      const startX = blob.centerX + Math.cos(firstPoint.angle) * firstPoint.distance * (blob.currentSize / blob.baseSize)
      const startY = blob.centerY + Math.sin(firstPoint.angle) * firstPoint.distance * (blob.currentSize / blob.baseSize)
      
      ctx.moveTo(startX, startY)
      
      // 使用贝塞尔曲线连接所有控制点，创造更平滑的形状
      for (let i = 0; i < blob.controlPoints.length; i++) {
        const current = blob.controlPoints[i]
        const next = blob.controlPoints[(i + 1) % blob.controlPoints.length]
        
        const currentX = blob.centerX + Math.cos(current.angle) * current.distance * (blob.currentSize / blob.baseSize)
        const currentY = blob.centerY + Math.sin(current.angle) * current.distance * (blob.currentSize / blob.baseSize)
        
        const nextX = blob.centerX + Math.cos(next.angle) * next.distance * (blob.currentSize / blob.baseSize)
        const nextY = blob.centerY + Math.sin(next.angle) * next.distance * (blob.currentSize / blob.baseSize)
        
        // 更自然的控制点计算
        const smoothness = 25 + (blob.currentSize / blob.baseSize) * 15 // 根据尺寸调整平滑度
        const cp1X = currentX + Math.cos(current.angle + Math.PI / 2) * smoothness
        const cp1Y = currentY + Math.sin(current.angle + Math.PI / 2) * smoothness
        const cp2X = nextX + Math.cos(next.angle - Math.PI / 2) * smoothness
        const cp2Y = nextY + Math.sin(next.angle - Math.PI / 2) * smoothness
        
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, nextX, nextY)
      }
      
      ctx.closePath()
      
      // 创建更自然的径向渐变填充
      const gradientRadius = blob.currentSize * 1.3 + (blob.isFullyVisible ? 0 : blob.currentSize * 0.2)
      const gradient = ctx.createRadialGradient(
        blob.centerX, blob.centerY, 0,
        blob.centerX, blob.centerY, gradientRadius
      )
      
      // 更自然的渐变效果
      gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha})`)
      gradient.addColorStop(0.25, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.85})`)
      gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.6})`)
      gradient.addColorStop(0.75, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.3})`)
      gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`)
      
      ctx.fillStyle = gradient
      ctx.fill()
      
      // 更自然的发光效果
      const glowIntensity = blob.isFullyVisible ? 1 : (this.time - blob.birthTime) / blob.fadeInDuration
      ctx.shadowColor = `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.5 * glowIntensity})` // 稍微增强发光
      ctx.shadowBlur = 30 + glowIntensity * 20 // 稍微增大发光范围
      ctx.fill()
      
      // 添加内部高亮层 - 只在完全可见后显示
      if (blob.isFullyVisible) {
        ctx.shadowBlur = 0
        const innerGradient = ctx.createRadialGradient(
          blob.centerX, blob.centerY, 0,
          blob.centerX, blob.centerY, blob.currentSize * 0.5
        )
        
        // 确保颜色值在有效范围内
        const highlightR = Math.min(blob.color.r + 40, 255)
        const highlightG = Math.min(blob.color.g + 40, 255)
        const highlightB = Math.min(blob.color.b + 40, 255)
        
        innerGradient.addColorStop(0, `rgba(${highlightR}, ${highlightG}, ${highlightB}, ${alpha * 0.35})`)
        innerGradient.addColorStop(0.6, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.18})`)
        innerGradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`)
        
        ctx.fillStyle = innerGradient
        ctx.fill()
      }
      
      // 重置阴影
      ctx.shadowBlur = 0
    },

    // 碰撞检测方法
    checkCollisionAtPosition(x, y, size) {
      return this.fluidBlobs.some(blob => {
        // 快速边界检查
        const roughDistance = Math.abs(x - blob.centerX) + Math.abs(y - blob.centerY)
        const maxDistance = (size + blob.currentSize) / 2 + 80
        if (roughDistance > maxDistance * 1.5) return false
        
        // 精确距离计算
        const dx = x - blob.centerX
        const dy = y - blob.centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        return distance < maxDistance
      })
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
  opacity: 1;
}

// PC端专用优化
@media (min-width: 1024px) {
  .fluid-canvas {
    // 增强对比度和亮度让流体团更清晰
    filter: contrast(1.15) brightness(1.08);
  }
}
</style> 
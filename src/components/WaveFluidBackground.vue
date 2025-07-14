<template>
  <div class="wave-fluid-background">
    <!-- 背景层 -->
    <div class="background-layer"></div>
    
    <!-- 水波纹动画层 -->
    <canvas 
      ref="waveCanvas"
      class="wave-canvas"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'WaveFluidBackground',
  data() {
    return {
      canvasWidth: 0,
      canvasHeight: 0,
      waveCanvas: null,
      waveCtx: null,
      animationId: null,
      time: 0,
      
      // 4条水波纹数据 - 严格分离，无重叠
      waves: [],
      maxWaves: 4,
      
      // 水波纹颜色配置
      waveColors: [
        { r: 30, g: 30, b: 30, a: 0.9 },      // 深灰色
        { r: 0, g: 120, b: 180, a: 0.8 },     // 深蓝色
        { r: 200, g: 150, b: 0, a: 0.8 },     // 金黄色
        { r: 80, g: 0, b: 120, a: 0.8 }       // 深紫色
      ]
    }
  },
  
  mounted() {
    this.$nextTick(() => {
      this.initCanvas()
      this.handleResize()
      this.initWaves()
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
      this.waveCanvas = this.$refs.waveCanvas
      if (!this.waveCanvas) return
      
      this.waveCtx = this.waveCanvas.getContext('2d')
      
      // 启用最佳的抗锯齿和平滑效果
      this.waveCtx.imageSmoothingEnabled = true
      this.waveCtx.imageSmoothingQuality = 'high'
      this.waveCtx.lineCap = 'round'
      this.waveCtx.lineJoin = 'round'
      this.waveCtx.globalCompositeOperation = 'source-over'
      
      // 启用抗锯齿
      this.waveCtx.antialias = true
      this.waveCtx.textRenderingOptimization = 'optimizeQuality'
    },
    
    handleResize() {
      this.canvasWidth = window.innerWidth
      this.canvasHeight = window.innerHeight
      
      if (this.waveCanvas) {
        const dpr = window.devicePixelRatio || 1
        
        this.waveCanvas.width = this.canvasWidth * dpr
        this.waveCanvas.height = this.canvasHeight * dpr
        this.waveCanvas.style.width = this.canvasWidth + 'px'
        this.waveCanvas.style.height = this.canvasHeight + 'px'
        
        this.waveCtx.scale(dpr, dpr)
        this.initWaves()
      }
    },
    
    initWaves() {
      this.waves = []
      
      // 创建4条完全分离的水波纹
      for (let i = 0; i < this.maxWaves; i++) {
        this.createWave(i)
      }
    },
    
    createWave(waveIndex) {
      const color = this.waveColors[waveIndex]
      
      // 严格分离的垂直区域 - 增加间隔，每条波纹占据更少的空间
      const waveHeight = this.canvasHeight / this.maxWaves
      const baseY = waveHeight * waveIndex + waveHeight / 2
      
      // 波纹的最大高度限制 - 减少高度使用率，增加间隔
      const maxWaveHeight = waveHeight * 0.5 // 从70%减少到50%，增加间隔
      
      const wave = {
        // 基础位置 - 初始就在屏幕内显示完整形状
        startX: this.canvasWidth * 0.3 + Math.random() * this.canvasWidth * 0.4, // 在屏幕30%-70%位置随机开始
        baseY: baseY,
        originalBaseY: baseY, // 保存原始Y位置
        waveIndex: waveIndex,
        
        // 严格的垂直边界 - 增加边界间隔
        topBoundary: waveHeight * waveIndex + waveHeight * 0.15, // 从5%增加到15%
        bottomBoundary: waveHeight * (waveIndex + 1) - waveHeight * 0.15, // 从5%增加到15%
        
        // 当前位置
        currentX: 0,
        
        // 移动速度 - 减慢移动速度
        speedX: -(0.2 + Math.random() * 0.2), // 从0.4-0.7减慢到0.2-0.4
        
        // 波纹尺寸 - 增加宽度，减少高度
        baseWidth: this.canvasWidth * (2.5 + Math.random() * 0.8), // 增加宽度
        baseHeight: maxWaveHeight,
        currentWidth: 0,
        currentHeight: 0,
        
        // 形态变化参数 - 大幅减慢变化频率，增加弧度
        widthPhase: Math.random() * Math.PI * 2,
        heightPhase: Math.random() * Math.PI * 2,
        widthFrequency: 0.0002 + Math.random() * 0.0002, // 从0.0008-0.0014减慢到0.0002-0.0004
        heightFrequency: 0.0001 + Math.random() * 0.0002, // 从0.0006-0.0011减慢到0.0001-0.0003
        widthAmplitude: this.canvasWidth * 0.2, // 增加宽度变化幅度
        heightAmplitude: maxWaveHeight * 0.4, // 增加高度变化幅度
        
        // 真正的流体效果：8条不规则形状的流体流从右向左流动，每条流体都有不同的宽度、高度和形状变化，使用12-20个控制点创建复杂的不规则形状
        dynamicHeightWave: {
          amplitude: maxWaveHeight * 0.3, // 增加动态高度变化幅度
          frequency: 0.0001 + Math.random() * 0.0001, // 从0.0004-0.0007减慢到0.0001-0.0002
          phase: Math.random() * Math.PI * 2,
          speed: 0.0003 + Math.random() * 0.0002 // 从0.001-0.0018减慢到0.0003-0.0005
        },
        
        // 水波的起伏变化 - 减慢频率，增加弧度
        waveUndulation: {
          amplitude: maxWaveHeight * 0.5, // 从40%增加到50%，增加弧度
          frequency: 0.0001 + Math.random() * 0.0001, // 从0.0005-0.0009减慢到0.0001-0.0002
          phase: Math.random() * Math.PI * 2,
          complexity: 3 + Math.random() * 2 // 从2-3.5增加到3-5，增加复杂度和弧度
        },
        
        // 波浪形状控制点 - 减少控制点数量，增加弧度
        wavePoints: [],
        pointCount: 50 + Math.floor(Math.random() * 40), // 从80-140减少到50-90，增加弧度
        
        // 颜色
        color: { ...color },
        
        // 垂直漂移 - 减慢频率
        verticalDrift: {
          amplitude: waveHeight * 0.04, // 稍微增加幅度
          frequency: 0.0001 + Math.random() * 0.0001, // 从0.0003-0.0005减慢到0.0001-0.0002
          phase: Math.random() * Math.PI * 2,
          baseY: baseY
        },
        
        // 透明度变化 - 减慢频率
        alphaVariation: {
          base: color.a,
          amplitude: 0.1 + Math.random() * 0.06, // 增加透明度变化
          frequency: 0.0001 + Math.random() * 0.0001, // 从0.0005-0.0008减慢到0.0001-0.0002
          phase: Math.random() * Math.PI * 2
        },
        
        // 有机形状参数 - 减慢变化速度，增加弧度
        organicShape: {
          complexity: 3.5 + Math.random() * 2, // 从2.5-4增加到3.5-5.5，增加复杂度
          asymmetry: 0.2 + Math.random() * 0.25, // 从0.15-0.35增加到0.2-0.45，增加不对称性
          curvature: 0.4 + Math.random() * 0.3, // 从0.3-0.5增加到0.4-0.7，增加曲率
          morphSpeed: 0.0001 + Math.random() * 0.0001 // 从0.0004-0.0007减慢到0.0001-0.0002
        }
      }
      
      // 初始化波浪控制点
      this.generateWavePoints(wave)
      
      // 设置初始尺寸和位置
      wave.currentWidth = wave.baseWidth
      wave.currentHeight = wave.baseHeight
      wave.currentX = wave.startX
      
      this.waves.push(wave)
    },
    
    generateWavePoints(wave) {
      wave.wavePoints = []
      
      for (let i = 0; i < wave.pointCount; i++) {
        const progress = i / (wave.pointCount - 1)
        
        // 创建大幅度的有机形状变化 - 增加弧度和复杂度
        const organic1 = Math.sin(progress * Math.PI * wave.organicShape.complexity) * wave.organicShape.asymmetry
        const organic2 = Math.sin(progress * Math.PI * wave.organicShape.complexity * 1.7) * (wave.organicShape.asymmetry * 0.8)
        const organic3 = Math.cos(progress * Math.PI * wave.organicShape.complexity * 2.3) * (wave.organicShape.asymmetry * 0.6)
        const organic4 = Math.sin(progress * Math.PI * wave.organicShape.complexity * 3.1) * (wave.organicShape.asymmetry * 0.4)
        
        // 增加不对称偏移 - 增加弧度
        const asymmetricOffset = Math.sin(progress * Math.PI * 0.5) * wave.organicShape.asymmetry * 30 // 从0.7和20增加到0.5和30
        
        // 大幅度的边缘变化 - 增加弧度
        const edgeVariation = Math.sin(progress * Math.PI * 4) * 0.12 + // 从6减少到4，增加弧度
                             Math.sin(progress * Math.PI * 8) * 0.08 + // 从12减少到8
                             Math.sin(progress * Math.PI * 12) * 0.05 // 从18减少到12
        
        // 真实水波的波峰波谷效果 - 增加弧度
        const waveRipple = Math.sin(progress * Math.PI * 5) * 0.15 + // 从8减少到5，增加弧度
                          Math.cos(progress * Math.PI * 10) * 0.10 + // 从16减少到10
                          Math.sin(progress * Math.PI * 15) * 0.08 // 从24减少到15
        
        wave.wavePoints.push({
          relativeX: progress,
          baseY: (organic1 + organic2 + organic3 + organic4) * 30 + asymmetricOffset + edgeVariation * 18 + waveRipple * 25, // 增加所有幅度
          detailAmplitude: 8 + Math.random() * 12, // 大幅增加细节幅度
          detailFrequency: 0.003 + Math.random() * 0.002, // 从0.012-0.02减慢到0.003-0.005
          detailPhase: Math.random() * Math.PI * 2,
          organicAmplitude: 12 + Math.random() * 8, // 增加有机变化
          organicFrequency: 0.0005 + Math.random() * 0.0003, // 从0.002-0.0035减慢到0.0005-0.0008
          organicPhase: Math.random() * Math.PI * 2,
          edgeDistortion: 6 + Math.random() * 8, // 增加边缘扭曲
          edgeFrequency: 0.0008 + Math.random() * 0.0005, // 从0.003-0.005减慢到0.0008-0.0013
          edgePhase: Math.random() * Math.PI * 2,
          // 添加水波特有的波纹效果
          rippleAmplitude: 4 + Math.random() * 6,
          rippleFrequency: 0.001 + Math.random() * 0.0008, // 从0.005-0.009减慢到0.001-0.0018
          ripplePhase: Math.random() * Math.PI * 2
        })
      }
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
      this.time += 1
      this.updateWaves()
      this.render()
      this.animationId = requestAnimationFrame(() => this.animate())
    },
    
    updateWaves() {
      this.waves.forEach((wave, index) => {
        // 水平移动
        wave.currentX += wave.speedX
        
        // 垂直漂移 - 只是细微的上下摆动，不是持续的向上移动
        const verticalOffset = Math.sin(this.time * wave.verticalDrift.frequency + wave.verticalDrift.phase) * wave.verticalDrift.amplitude
        const driftedY = wave.originalBaseY + verticalOffset
        
        // 确保波纹中心不会超出边界
        const halfHeight = wave.currentHeight / 2
        wave.baseY = Math.max(
          wave.topBoundary + halfHeight,
          Math.min(wave.bottomBoundary - halfHeight, driftedY)
        )
        
        // 形态变化 - 宽度（大幅增加变化）
        const widthVariation = Math.sin(this.time * wave.widthFrequency + wave.widthPhase) * wave.widthAmplitude
        wave.currentWidth = wave.baseWidth + widthVariation
        
        // 真实水波的动态高度变化 - 多层叠加效果
        const baseHeightVariation = Math.cos(this.time * wave.heightFrequency + wave.heightPhase) * wave.heightAmplitude
        
        // 动态高度波浪效果
        const dynamicHeightWave = Math.sin(this.time * wave.dynamicHeightWave.frequency + wave.dynamicHeightWave.phase) * wave.dynamicHeightWave.amplitude
        const dynamicHeightSpeed = Math.cos(this.time * wave.dynamicHeightWave.speed + wave.dynamicHeightWave.phase * 1.3) * wave.dynamicHeightWave.amplitude * 0.6
        
        // 水波起伏效果 - 模拟真实水波的复杂变化
        const undulation1 = Math.sin(this.time * wave.waveUndulation.frequency + wave.waveUndulation.phase) * wave.waveUndulation.amplitude
        const undulation2 = Math.cos(this.time * wave.waveUndulation.frequency * 1.7 + wave.waveUndulation.phase * 1.4) * wave.waveUndulation.amplitude * 0.7
        const undulation3 = Math.sin(this.time * wave.waveUndulation.frequency * 2.3 + wave.waveUndulation.phase * 0.8) * wave.waveUndulation.amplitude * 0.5
        
        // 综合所有高度变化
        const totalHeightVariation = baseHeightVariation + dynamicHeightWave + dynamicHeightSpeed + undulation1 + undulation2 + undulation3
        const newHeight = wave.baseHeight + totalHeightVariation
        
        // 确保新高度不会导致越界，但允许更大的变化范围
        const maxAllowedHeight = (wave.bottomBoundary - wave.topBoundary) * 0.85 // 增加到85%的使用率
        wave.currentHeight = Math.max(wave.baseHeight * 0.3, Math.min(newHeight, maxAllowedHeight))
        
        // 透明度变化 - 增加变化幅度
        const alphaVariation = Math.sin(this.time * wave.alphaVariation.frequency + wave.alphaVariation.phase) * wave.alphaVariation.amplitude
        wave.color.a = Math.max(0.2, Math.min(1.0, wave.alphaVariation.base + alphaVariation))
        
        // 更新波浪细节 - 增加变化幅度和复杂度
        wave.wavePoints.forEach(point => {
          const detailWave = Math.sin(this.time * point.detailFrequency + point.detailPhase) * point.detailAmplitude
          const organicWave = Math.cos(this.time * point.organicFrequency + point.organicPhase) * point.organicAmplitude
          const edgeDistortion = Math.sin(this.time * point.edgeFrequency + point.edgePhase) * point.edgeDistortion
          
          // 添加水波特有的波纹效果
          const rippleEffect = Math.sin(this.time * point.rippleFrequency + point.ripplePhase) * point.rippleAmplitude
          const rippleInteraction = Math.cos(this.time * point.rippleFrequency * 1.5 + point.ripplePhase * 0.7) * point.rippleAmplitude * 0.6
          
          // 真实水波的复杂运动 - 减慢频率
          const complexWave1 = Math.sin(this.time * 0.0003 + point.organicPhase) * 8 // 从0.0012减慢到0.0003
          const complexWave2 = Math.cos(this.time * 0.0002 + point.detailPhase) * 6 // 从0.0008减慢到0.0002
          const complexWave3 = Math.sin(this.time * 0.0004 + point.edgePhase) * 4 // 从0.0015减慢到0.0004
          
          point.currentY = point.baseY + detailWave + organicWave * 0.8 + edgeDistortion * 0.9 + 
                          rippleEffect + rippleInteraction + complexWave1 + complexWave2 + complexWave3
        })
        
        // 重新生成离开屏幕的波纹（只考虑水平移动）
        if (wave.currentX + wave.currentWidth < -300) {
          this.regenerateWave(wave, index)
        }
      })
    },
    
    regenerateWave(wave, waveIndex) {
      // 重新生成的波纹从右侧屏幕外开始，保持连续流动
      wave.startX = this.canvasWidth + Math.random() * this.canvasWidth * 0.3
      wave.currentX = wave.startX
      
      // 重新设置垂直位置 - 回到原始分配的位置
      wave.baseY = wave.originalBaseY
      
      // 重新生成控制点
      this.generateWavePoints(wave)
      
      // 重新设置变化参数
      wave.widthPhase = Math.random() * Math.PI * 2
      wave.heightPhase = Math.random() * Math.PI * 2
      wave.speedX = -(0.4 + Math.random() * 0.3)
      wave.verticalDrift.phase = Math.random() * Math.PI * 2
      wave.alphaVariation.phase = Math.random() * Math.PI * 2
    },
    
    render() {
      if (!this.waveCtx || !this.canvasWidth || !this.canvasHeight) return
      
      // 清除画布
      this.waveCtx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      
      // 渲染每条波纹 - 完全独立，无重叠
      this.waves.forEach((wave, index) => {
        this.renderWave(wave, index)
      })
    },
    
    renderWave(wave, waveIndex) {
      const ctx = this.waveCtx
      
      // 跳过不在视野内的波浪
      if (wave.currentX < -wave.currentWidth - 100 || wave.currentX > this.canvasWidth + 100) {
        return
      }
      
      ctx.save()
      ctx.globalCompositeOperation = 'source-over'
      
      // 创建波浪路径
      this.createWavePath(ctx, wave)
      
      // 创建垂直渐变填充
      const { r, g, b, a } = wave.color
      
      const gradient = ctx.createLinearGradient(
        wave.currentX, wave.baseY - wave.currentHeight / 2,
        wave.currentX, wave.baseY + wave.currentHeight / 2
      )
      
      // 边缘区域更透明，中心区域更不透明
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a * 0.4})`)
      gradient.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, ${a * 0.8})`)
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${a})`)
      gradient.addColorStop(0.8, `rgba(${r}, ${g}, ${b}, ${a * 0.8})`)
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${a * 0.4})`)
      
      ctx.fillStyle = gradient
      ctx.fill()
      
      // 添加边缘柔化效果
      ctx.globalCompositeOperation = 'source-atop'
      
      // 创建边缘柔化渐变
      const edgeGradient = ctx.createLinearGradient(
        wave.currentX, wave.baseY - wave.currentHeight / 2,
        wave.currentX, wave.baseY + wave.currentHeight / 2
      )
      
      edgeGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`)
      edgeGradient.addColorStop(0.15, `rgba(${r}, ${g}, ${b}, ${a * 0.2})`)
      edgeGradient.addColorStop(0.85, `rgba(${r}, ${g}, ${b}, ${a * 0.2})`)
      edgeGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
      
      ctx.fillStyle = edgeGradient
      ctx.fill()
      
      ctx.restore()
    },
    
    createWavePath(ctx, wave) {
      ctx.beginPath()
      
      const waveStartX = wave.currentX
      const waveEndX = wave.currentX + wave.currentWidth
      const centerY = wave.baseY
      
      // 严格限制波纹在边界内
      const topLimit = wave.topBoundary
      const bottomLimit = wave.bottomBoundary
      
      // 计算倾斜角度 - 从右下到左上的倾斜
      const tiltAngle = -0.15 // 负值表示向上倾斜
      const tiltOffset = wave.currentWidth * tiltAngle // 整个波纹的倾斜偏移量
      
      // 收集所有上边缘点 - 添加倾斜效果
      const topPoints = []
      for (let i = 0; i < wave.wavePoints.length; i++) {
        const point = wave.wavePoints[i]
        const x = waveStartX + point.relativeX * wave.currentWidth
        
        // 基础Y位置
        let y = centerY - wave.currentHeight / 2 + (point.currentY || point.baseY)
        
        // 添加倾斜效果 - 从右到左逐渐向上倾斜
        const tiltY = tiltOffset * (1 - point.relativeX) // 右侧(relativeX=0)向上偏移最大，左侧(relativeX=1)偏移最小
        y += tiltY
        
        // 严格限制在上边界内
        y = Math.max(topLimit, y)
        
        topPoints.push({ x, y })
      }
      
      // 收集所有下边缘点 - 添加倾斜效果
      const bottomPoints = []
      for (let i = wave.wavePoints.length - 1; i >= 0; i--) {
        const point = wave.wavePoints[i]
        const x = waveStartX + point.relativeX * wave.currentWidth
        const bottomOffset = (point.currentY || point.baseY) * 0.3
        
        // 基础Y位置
        let y = centerY + wave.currentHeight / 2 - bottomOffset
        
        // 添加倾斜效果 - 从右到左逐渐向上倾斜
        const tiltY = tiltOffset * (1 - point.relativeX) // 右侧向上偏移最大，左侧偏移最小
        y += tiltY
        
        // 严格限制在下边界内
        y = Math.min(bottomLimit, y)
        
        bottomPoints.push({ x, y })
      }
      
      // 绘制极其平滑的上边缘
      if (topPoints.length > 0) {
        ctx.moveTo(topPoints[0].x, topPoints[0].y)
        
        for (let i = 1; i < topPoints.length; i++) {
          const current = topPoints[i]
          const prev = topPoints[i - 1]
          const next = topPoints[i + 1] || current
          
          // 计算平滑的控制点
          const smoothFactor = 0.4
          const cp1X = prev.x + (current.x - prev.x) * smoothFactor
          const cp1Y = prev.y + (current.y - prev.y) * smoothFactor
          const cp2X = current.x - (next.x - current.x) * smoothFactor * 0.5
          const cp2Y = current.y - (next.y - current.y) * smoothFactor * 0.5
          
          ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, current.x, current.y)
        }
      }
      
      // 平滑连接到右下角 - 考虑倾斜
      const rightBottomX = waveEndX
      const rightBottomY = Math.min(bottomLimit, centerY + wave.currentHeight / 2 + tiltOffset * 0) // 右侧底部
      const lastTopPoint = topPoints[topPoints.length - 1]
      
      // 使用二次贝塞尔曲线平滑连接
      const rightControlX = lastTopPoint.x + (rightBottomX - lastTopPoint.x) * 0.8
      const rightControlY = lastTopPoint.y + (rightBottomY - lastTopPoint.y) * 0.3
      ctx.quadraticCurveTo(rightControlX, rightControlY, rightBottomX, rightBottomY)
      
      // 绘制极其平滑的下边缘
      if (bottomPoints.length > 0) {
        for (let i = 0; i < bottomPoints.length; i++) {
          const current = bottomPoints[i]
          
          if (i === 0) {
            // 从右下角平滑连接到第一个底部点
            const controlX = rightBottomX - (rightBottomX - current.x) * 0.3
            const controlY = rightBottomY + (current.y - rightBottomY) * 0.8
            ctx.quadraticCurveTo(controlX, controlY, current.x, current.y)
          } else {
            const prev = bottomPoints[i - 1]
            const next = bottomPoints[i + 1] || current
            
            // 计算平滑的控制点
            const smoothFactor = 0.4
            const cp1X = prev.x + (current.x - prev.x) * smoothFactor
            const cp1Y = prev.y + (current.y - prev.y) * smoothFactor
            const cp2X = current.x - (next.x - current.x) * smoothFactor * 0.5
            const cp2Y = current.y - (next.y - current.y) * smoothFactor * 0.5
            
            ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, current.x, current.y)
          }
        }
      }
      
      // 平滑连接回起点 - 考虑倾斜
      const firstTopPoint = topPoints[0]
      const lastBottomPoint = bottomPoints[bottomPoints.length - 1]
      
      if (firstTopPoint && lastBottomPoint) {
        const leftControlX = lastBottomPoint.x + (firstTopPoint.x - lastBottomPoint.x) * 0.3
        const leftControlY = lastBottomPoint.y + (firstTopPoint.y - lastBottomPoint.y) * 0.8
        ctx.quadraticCurveTo(leftControlX, leftControlY, firstTopPoint.x, firstTopPoint.y)
      }
      
      ctx.closePath()
    }
  }
}
</script>

<style scoped lang="scss">
.wave-fluid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1;
}

.wave-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  mix-blend-mode: normal;
  will-change: transform;
  image-rendering: optimizeQuality;
}

// PC端专用优化
@media (min-width: 1024px) {
  .wave-canvas {
    filter: contrast(1.08) brightness(1.05) saturate(1.1);
  }
}
</style> 
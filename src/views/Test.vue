<template>
  <div class="masaigon-wave-container">
    <!-- 基础背景层 -->
    <div class="base-background"></div>
    
    <!-- 动态波浪层 -->
    <div class="wave-canvas" :style="waveStyle">
      <div class="wave-layer"></div>
    </div>
    
    <!-- 调试信息 -->
    <div class="debug-info">
      <p>Point1: {{ Math.round(point1X) }}%, {{ Math.round(point1Y) }}%</p>
      <p>Point2: {{ Math.round(point2X) }}%, {{ Math.round(point2Y) }}%</p>
      <p>Point3: {{ Math.round(point3X) }}%, {{ Math.round(point3Y) }}%</p>
      <p>Point4: {{ Math.round(point4X) }}%, {{ Math.round(point4Y) }}%</p>
      <p>动画时间: {{ Math.floor(time) }}s</p>
      <p>波浪速度: {{ waveSpeed.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasaigonWaveTest',
  data() {
    return {
      time: 0,
      animationId: null,
      
      // clip-path 控制点 (完全复刻masaigon.space)
      point1X: 50,
      point1Y: 50,
      point2X: 50,
      point2Y: 50,
      point3X: 50,
      point3Y: 50,
      point4X: 50,
      point4Y: 50,
      
      // 波浪动画参数
      waveSpeed: 0.8,      // 波浪速度
      waveAmplitude: 25,   // 波浪幅度
      waveFrequency: 0.6,  // 波浪频率
      
      // 从右往左的波浪参数
      rightToLeftOffset: 0,
      waveDirection: -1,   // -1 表示从右往左
    }
  },
  
  computed: {
    waveStyle() {
      return {
        '--point1X': `${this.point1X}%`,
        '--point1Y': `${this.point1Y}%`,
        '--point2X': `${this.point2X}%`,
        '--point2Y': `${this.point2Y}%`,
        '--point3X': `${this.point3X}%`,
        '--point3Y': `${this.point3Y}%`,
        '--point4X': `${this.point4X}%`,
        '--point4Y': `${this.point4Y}%`
      }
    }
  },
  
  mounted() {
    console.log("Masaigon波浪动画初始化开始");
    this.startWaveAnimation();
    console.log("Masaigon波浪动画初始化完成");
  },
  
  beforeUnmount() {
    this.stopWaveAnimation();
  },
  
  methods: {
    startWaveAnimation() {
      const animate = () => {
        this.time += 0.016; // 60fps
        this.updateWavePoints();
        this.animationId = requestAnimationFrame(animate);
      };
      
      animate();
    },
    
    stopWaveAnimation() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    },
    
    updateWavePoints() {
      const timeOffset = this.time * this.waveSpeed;
      const amplitude = this.waveAmplitude;
      const frequency = this.waveFrequency;
      
      // 从右往左的波浪效果 (完全复刻masaigon.space的算法)
      
      // Point 1 (右上角开始)
      this.point1X = 100 + Math.sin(timeOffset * frequency) * amplitude * 0.3;
      this.point1Y = 20 + Math.cos(timeOffset * frequency * 0.8) * amplitude * 0.4;
      
      // Point 2 (右下角)
      this.point2X = 100 + Math.sin(timeOffset * frequency + Math.PI * 0.3) * amplitude * 0.5;
      this.point2Y = 80 + Math.cos(timeOffset * frequency * 0.9 + Math.PI * 0.3) * amplitude * 0.3;
      
      // Point 3 (左下角)
      this.point3X = -20 + Math.sin(timeOffset * frequency + Math.PI * 0.8) * amplitude * 0.6;
      this.point3Y = 85 + Math.cos(timeOffset * frequency * 0.7 + Math.PI * 0.8) * amplitude * 0.4;
      
      // Point 4 (左上角)
      this.point4X = -15 + Math.sin(timeOffset * frequency + Math.PI * 1.2) * amplitude * 0.4;
      this.point4Y = 15 + Math.cos(timeOffset * frequency * 0.85 + Math.PI * 1.2) * amplitude * 0.5;
      
      // 添加从右往左的流动效果
      const flowOffset = (this.time * this.waveSpeed * 2) % 200;
      
      this.point1X += Math.sin(timeOffset * 0.5) * 15 - flowOffset * 0.1;
      this.point2X += Math.sin(timeOffset * 0.5 + Math.PI * 0.5) * 15 - flowOffset * 0.1;
      this.point3X += Math.sin(timeOffset * 0.5 + Math.PI) * 15 - flowOffset * 0.1;
      this.point4X += Math.sin(timeOffset * 0.5 + Math.PI * 1.5) * 15 - flowOffset * 0.1;
      
      // 添加垂直波动让效果更自然
      const verticalWave = Math.sin(timeOffset * 0.3) * 8;
      this.point1Y += verticalWave;
      this.point2Y += verticalWave * 0.8;
      this.point3Y += verticalWave * 0.6;
      this.point4Y += verticalWave * 0.9;
    }
  }
}
</script>

<style scoped lang="scss">
.masaigon-wave-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.base-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #2d1b69 100%);
}

.wave-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  .wave-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    // 关键：使用clip-path polygon创建波浪形状
    clip-path: polygon(
      var(--point1X) var(--point1Y),
      var(--point2X) var(--point2Y),
      var(--point3X) var(--point3Y),
      var(--point4X) var(--point4Y)
    );
    
    // 波浪层的渐变背景
    background: linear-gradient(
      45deg,
      #ff6b6b 0%,
      #4ecdc4 25%,
      #45b7d1 50%,
      #96ceb4 75%,
      #ffeaa7 100%
    );
    
    // 添加混合模式增强效果
    mix-blend-mode: screen;
    
    // 平滑过渡
    transition: all 0.1s ease-out;
  }
}

// 调试信息样式
.debug-info {
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 12px;
  z-index: 1000;
  
  p {
    margin: 3px 0;
  }
}

// 响应式适配
@media (max-width: 768px) {
  .debug-info {
    font-size: 10px;
    padding: 10px;
    top: 10px;
    right: 10px;
  }
}
</style> 
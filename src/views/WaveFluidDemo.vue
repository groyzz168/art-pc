<template>
  <div class="wave-fluid-demo">
    <!-- 流体背景容器 -->
    <div class="fluid-container">
      <!-- 流体形状层 -->
      <div class="fluid-shape shape-1"></div>
      <div class="fluid-shape shape-2"></div>
      <div class="fluid-shape shape-3"></div>
      <div class="fluid-shape shape-4"></div>
      <div class="fluid-shape shape-5"></div>
      
      <!-- 渐变覆盖层 -->
      <div class="gradient-overlay"></div>
      
      <!-- 页面内容层 -->
      <!-- <div class="content-layer">
        <div class="demo-info">
          <h1 class="demo-title">流体背景动画</h1>
          <p class="demo-description">
            多彩流体形状缓慢变化，营造梦幻视觉效果
          </p>
          <div class="wave-info">
            <div class="wave-item">
              <div class="wave-color pink"></div>
              <span>粉红色流体</span>
            </div>
            <div class="wave-item">
              <div class="wave-color purple"></div>
              <span>紫色流体</span>
            </div>
            <div class="wave-item">
              <div class="wave-color cyan"></div>
              <span>青色流体</span>
            </div>
            <div class="wave-item">
              <div class="wave-color orange"></div>
              <span>橙色流体</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaveFluidDemo',
  mounted() {
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      // 鼠标移动交互
      const container = document.querySelector('.fluid-container');
      const shapes = document.querySelectorAll('.fluid-shape');
      
      if (container && shapes.length > 0) {
        container.addEventListener('mousemove', (e) => {
          const rect = container.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          
          shapes.forEach((shape, index) => {
            const intensity = (index + 1) * 0.08;
            const translateX = (x - 0.5) * 40 * intensity;
            const translateY = (y - 0.5) * 40 * intensity;
            
            shape.style.transform = `translate(${translateX}px, ${translateY}px) scale(${1 + intensity * 0.08})`;
          });
        });
        
        // 重置动画
        container.addEventListener('mouseleave', () => {
          shapes.forEach(shape => {
            shape.style.transform = 'translate(0, 0) scale(1)';
          });
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wave-fluid-demo {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.fluid-container {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

.fluid-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.8;
  animation: float 20s infinite ease-in-out;
  transition: transform 0.3s ease-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #ff6b9d, #c44569);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #4834d4, #686de0);
  top: 60%;
  left: 70%;
  animation-delay: -5s;
}

.shape-3 {
  width: 500px;
  height: 350px;
  background: radial-gradient(ellipse, #00d2d3, #54a0ff);
  top: 10%;
  right: 20%;
  animation-delay: -10s;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #ff9ff3, #f368e0);
  bottom: 30%;
  left: 30%;
  animation-delay: -15s;
}

.shape-5 {
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, #ff6348, #ff4757);
  bottom: 10%;
  right: 10%;
  animation-delay: -7s;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 107, 157, 0.1) 0%,
    rgba(72, 52, 212, 0.1) 25%,
    rgba(0, 210, 211, 0.1) 50%,
    rgba(255, 99, 72, 0.1) 75%,
    rgba(255, 159, 243, 0.1) 100%
  );
  animation: gradientShift 15s infinite linear;
}

.content-layer {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.demo-info {
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  max-width: 500px;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  animation: textGlow 3s infinite alternate;
}

.demo-description {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 30px;
  line-height: 1.6;
}

.wave-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.wave-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  color: #ffffff;
}

.wave-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &.pink {
    background: linear-gradient(45deg, #ff6b9d, #c44569);
  }
  
  &.purple {
    background: linear-gradient(45deg, #4834d4, #686de0);
  }
  
  &.cyan {
    background: linear-gradient(45deg, #00d2d3, #54a0ff);
  }
  
  &.orange {
    background: linear-gradient(45deg, #ff6348, #ff4757);
  }
}

// 动画效果
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(-30px, -50px) rotate(5deg) scale(1.1);
  }
  50% {
    transform: translate(20px, -30px) rotate(-3deg) scale(0.9);
  }
  75% {
    transform: translate(-10px, 20px) rotate(2deg) scale(1.05);
  }
}

@keyframes gradientShift {
  0% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.1) 0%,
      rgba(72, 52, 212, 0.1) 25%,
      rgba(0, 210, 211, 0.1) 50%,
      rgba(255, 99, 72, 0.1) 75%,
      rgba(255, 159, 243, 0.1) 100%
    );
  }
  25% {
    background: linear-gradient(
      45deg,
      rgba(72, 52, 212, 0.1) 0%,
      rgba(0, 210, 211, 0.1) 25%,
      rgba(255, 99, 72, 0.1) 50%,
      rgba(255, 159, 243, 0.1) 75%,
      rgba(255, 107, 157, 0.1) 100%
    );
  }
  50% {
    background: linear-gradient(
      45deg,
      rgba(0, 210, 211, 0.1) 0%,
      rgba(255, 99, 72, 0.1) 25%,
      rgba(255, 159, 243, 0.1) 50%,
      rgba(255, 107, 157, 0.1) 75%,
      rgba(72, 52, 212, 0.1) 100%
    );
  }
  75% {
    background: linear-gradient(
      45deg,
      rgba(255, 99, 72, 0.1) 0%,
      rgba(255, 159, 243, 0.1) 25%,
      rgba(255, 107, 157, 0.1) 50%,
      rgba(72, 52, 212, 0.1) 75%,
      rgba(0, 210, 211, 0.1) 100%
    );
  }
  100% {
    background: linear-gradient(
      45deg,
      rgba(255, 159, 243, 0.1) 0%,
      rgba(255, 107, 157, 0.1) 25%,
      rgba(72, 52, 212, 0.1) 50%,
      rgba(0, 210, 211, 0.1) 75%,
      rgba(255, 99, 72, 0.1) 100%
    );
  }
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  100% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 107, 157, 0.6);
  }
}

// 添加更多动画效果
.fluid-shape:nth-child(odd) {
  animation-direction: reverse;
}

.fluid-shape:hover {
  filter: blur(80px);
  transform: scale(1.2);
}

// 背景粒子效果
.wave-fluid-demo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 100px 100px, 150px 150px, 200px 200px;
  animation: sparkle 10s infinite linear;
  pointer-events: none;
  z-index: 1;
}

@keyframes sparkle {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}

// 响应式设计
@media (max-width: 768px) {
  .fluid-shape {
    filter: blur(40px);
  }
  
  .shape-1 {
    width: 300px;
    height: 300px;
  }
  
  .shape-2 {
    width: 250px;
    height: 250px;
  }
  
  .shape-3 {
    width: 350px;
    height: 250px;
  }
  
  .shape-4 {
    width: 200px;
    height: 200px;
  }
  
  .shape-5 {
    width: 400px;
    height: 300px;
  }
  
  .demo-info {
    padding: 30px 20px;
    max-width: 90%;
  }
  
  .demo-title {
    font-size: 2rem;
  }
  
  .demo-description {
    font-size: 1rem;
  }
}
</style> 
<template>
  <div class="global-fluid-background">
    <!-- 流体形状层 -->
    <div class="fluid-shape shape-1"></div>
    <div class="fluid-shape shape-2"></div>
    <div class="fluid-shape shape-3"></div>
    <div class="fluid-shape shape-4"></div>
    <div class="fluid-shape shape-5"></div>
    
    <!-- 渐变覆盖层 -->
    <div class="gradient-overlay"></div>
    
    <!-- 平滑过渡层 -->
    <div class="smooth-transition-layer"></div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFluidBackground',
  mounted() {
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      // 鼠标移动交互
      const container = this.$el;
      const shapes = container.querySelectorAll('.fluid-shape');
      
      // if (container && shapes.length > 0) {
      //   container.addEventListener('mousemove', (e) => {
      //     const rect = container.getBoundingClientRect();
      //     const x = (e.clientX - rect.left) / rect.width;
      //     const y = (e.clientY - rect.top) / rect.height;
          
      //     shapes.forEach((shape, index) => {
      //       const intensity = (index + 1) * 0.05;
      //       const translateX = (x - 0.5) * 30 * intensity;
      //       const translateY = (y - 0.5) * 30 * intensity;
            
      //       shape.style.transform = `translate(${translateX}px, ${translateY}px) scale(${1 + intensity * 0.05})`;
      //     });
      //   });
        
      //   // 重置动画
      //   container.addEventListener('mouseleave', () => {
      //     shapes.forEach(shape => {
      //       shape.style.transform = 'translate(0, 0) scale(1)';
      //     });
      //   });
      // }
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
  // z-index: -1;
  background: #111;
  pointer-events: auto;
  overflow: hidden;
}

.fluid-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
  opacity: 1;
  animation: float 40s infinite ease-in-out;
  transition: transform 0.8s ease-out;
  pointer-events: none;
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
  animation-delay: -8s;
}

.shape-3 {
  width: 500px;
  height: 350px;
  background: radial-gradient(ellipse, #00d2d3, #54a0ff);
  top: 10%;
  right: 20%;
  animation-delay: -16s;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #ff9ff3, #f368e0);
  bottom: 30%;
  left: 30%;
  animation-delay: -24s;
}

.shape-5 {
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, #ff6348, #ff4757);
  bottom: 10%;
  right: 10%;
  animation-delay: -12s;
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
    rgba(255, 107, 157, 0.12) 0%,
    rgba(72, 52, 212, 0.12) 25%,
    rgba(0, 210, 211, 0.12) 50%,
    rgba(255, 99, 72, 0.12) 75%,
    rgba(255, 159, 243, 0.12) 100%
  );
  animation: gradientShift 40s infinite ease-in-out;
  pointer-events: none;
}

// 平滑过渡层
.smooth-transition-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(255, 255, 255, 0.01) 50%,
    rgba(0, 0, 0, 0.02) 100%
  );
  animation: smoothTransition 50s infinite ease-in-out;
  pointer-events: none;
  z-index: 2;
}

@keyframes smoothTransition {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.1;
  }
}

// 动画效果
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  12.5% {
    transform: translate(-15px, -25px) rotate(2deg) scale(1.02);
  }
  25% {
    transform: translate(-30px, -50px) rotate(5deg) scale(1.1);
  }
  37.5% {
    transform: translate(-20px, -35px) rotate(3deg) scale(1.05);
  }
  50% {
    transform: translate(20px, -30px) rotate(-3deg) scale(0.9);
  }
  62.5% {
    transform: translate(15px, -10px) rotate(-1deg) scale(0.95);
  }
  75% {
    transform: translate(-10px, 20px) rotate(2deg) scale(1.05);
  }
  87.5% {
    transform: translate(-5px, 10px) rotate(1deg) scale(1.02);
  }
}

@keyframes gradientShift {
  0% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.12) 0%,
      rgba(72, 52, 212, 0.12) 25%,
      rgba(0, 210, 211, 0.12) 50%,
      rgba(255, 99, 72, 0.12) 75%,
      rgba(255, 159, 243, 0.12) 100%
    );
  }
  10% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.13) 0%,
      rgba(72, 52, 212, 0.11) 25%,
      rgba(0, 210, 211, 0.13) 50%,
      rgba(255, 99, 72, 0.11) 75%,
      rgba(255, 159, 243, 0.13) 100%
    );
  }
  20% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.11) 0%,
      rgba(72, 52, 212, 0.13) 25%,
      rgba(0, 210, 211, 0.11) 50%,
      rgba(255, 99, 72, 0.13) 75%,
      rgba(255, 159, 243, 0.11) 100%
    );
  }
  30% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.10) 0%,
      rgba(72, 52, 212, 0.12) 25%,
      rgba(0, 210, 211, 0.14) 50%,
      rgba(255, 99, 72, 0.12) 75%,
      rgba(255, 159, 243, 0.10) 100%
    );
  }
  40% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.11) 0%,
      rgba(72, 52, 212, 0.10) 25%,
      rgba(0, 210, 211, 0.13) 50%,
      rgba(255, 99, 72, 0.14) 75%,
      rgba(255, 159, 243, 0.12) 100%
    );
  }
  50% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.12) 0%,
      rgba(72, 52, 212, 0.11) 25%,
      rgba(0, 210, 211, 0.12) 50%,
      rgba(255, 99, 72, 0.13) 75%,
      rgba(255, 159, 243, 0.14) 100%
    );
  }
  60% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.14) 0%,
      rgba(72, 52, 212, 0.12) 25%,
      rgba(0, 210, 211, 0.10) 50%,
      rgba(255, 99, 72, 0.12) 75%,
      rgba(255, 159, 243, 0.13) 100%
    );
  }
  70% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.13) 0%,
      rgba(72, 52, 212, 0.14) 25%,
      rgba(0, 210, 211, 0.11) 50%,
      rgba(255, 99, 72, 0.10) 75%,
      rgba(255, 159, 243, 0.12) 100%
    );
  }
  80% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.11) 0%,
      rgba(72, 52, 212, 0.13) 25%,
      rgba(0, 210, 211, 0.12) 50%,
      rgba(255, 99, 72, 0.11) 75%,
      rgba(255, 159, 243, 0.14) 100%
    );
  }
  90% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.12) 0%,
      rgba(72, 52, 212, 0.11) 25%,
      rgba(0, 210, 211, 0.13) 50%,
      rgba(255, 99, 72, 0.12) 75%,
      rgba(255, 159, 243, 0.13) 100%
    );
  }
  100% {
    background: linear-gradient(
      45deg,
      rgba(255, 107, 157, 0.12) 0%,
      rgba(72, 52, 212, 0.12) 25%,
      rgba(0, 210, 211, 0.12) 50%,
      rgba(255, 99, 72, 0.12) 75%,
      rgba(255, 159, 243, 0.12) 100%
    );
  }
}

// 添加更多动画效果
.fluid-shape:nth-child(odd) {
  animation-direction: reverse;
}

// 背景粒子效果
.global-fluid-background::before {
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
  animation: sparkle 30s infinite ease-in-out;
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
    filter: blur(30px);
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
}

// 针对不同页面的适配
@media (max-width: 480px) {
  .fluid-shape {
    filter: blur(20px);
    opacity: 0.7;
  }
  
  .gradient-overlay {
    opacity: 0.6;
  }
}
</style> 
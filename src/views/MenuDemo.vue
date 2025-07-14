<template>
  <div class="menu-demo">
    <!-- 背景装饰 -->
    <div class="background-decorations">
      <div class="gradient-bg"></div>
      <div class="particles">
        <div class="particle" v-for="i in 20" :key="i"></div>
      </div>
    </div>

    <!-- 导航菜单 -->
    <NavigationMenu 
      @menu-click="handleMenuClick"
      @menu-hover="handleMenuHover"
      @menu-leave="handleMenuLeave"
      @post-click="handlePostClick"
    />

    <!-- 演示内容区域 -->
    <div class="demo-content">
      <div class="demo-header">
        <h1>NavigationMenu 组件演示</h1>
        <p>这是一个完全按照Figma设计稿制作的导航菜单组件</p>
      </div>

      <div class="demo-features">
        <div class="feature-card">
          <h3>✨ 主要特性</h3>
          <ul>
            <li>完全按照Figma设计稿1:1还原</li>
            <li>丰富的交互动画效果</li>
            <li>响应式设计支持</li>
            <li>Vue 3组件化架构</li>
            <li>TypeScript支持</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>🎯 交互效果</h3>
          <ul>
            <li>菜单项悬停高亮效果</li>
            <li>激活状态指示器</li>
            <li>POST按钮光波动画</li>
            <li>用户头像悬停缩放</li>
            <li>平滑的过渡动画</li>
          </ul>
        </div>

        <div class="feature-card">
          <h3>📱 响应式设计</h3>
          <ul>
            <li>桌面端垂直布局</li>
            <li>平板端水平布局</li>
            <li>移动端精简显示</li>
            <li>自适应字体大小</li>
            <li>灵活的断点设置</li>
          </ul>
        </div>
      </div>

      <div class="demo-events">
        <h3>🔄 事件监听</h3>
        <div class="event-log">
          <div v-for="(event, index) in events" :key="index" class="event-item">
            <span class="event-time">{{ event.time }}</span>
            <span class="event-type">{{ event.type }}</span>
            <span class="event-data">{{ event.data }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'

export default {
  name: 'MenuDemo',
  components: {
    NavigationMenu
  },
  data() {
    return {
      events: []
    }
  },
  methods: {
    handleMenuClick(item) {
      this.addEvent('菜单点击', `点击了 ${item.label} 菜单项`)
    },
    
    handleMenuHover(item) {
      this.addEvent('菜单悬停', `悬停在 ${item.label} 菜单项`)
    },
    
    handleMenuLeave(item) {
      this.addEvent('菜单离开', `离开了 ${item.label} 菜单项`)
    },
    
    handlePostClick() {
      this.addEvent('POST点击', '点击了POST按钮')
    },
    
    addEvent(type, data) {
      const now = new Date()
      const time = now.toLocaleTimeString()
      this.events.unshift({ type, data, time })
      
      // 只保留最近20条事件
      if (this.events.length > 20) {
        this.events.pop()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu-demo {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  position: relative;
  overflow-x: hidden;
}

/* 背景装饰 */
.background-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;

  .gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(2, 216, 229, 0.1) 0%,
      rgba(165, 98, 154, 0.1) 50%,
      rgba(63, 37, 59, 0.1) 100%
    );
    animation: gradientShift 10s ease-in-out infinite;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(2, 216, 229, 0.6);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;

      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          left: #{random(100)}%;
          top: #{random(100)}%;
          animation-delay: #{random(60) * 0.1}s;
          animation-duration: #{4 + random(40) * 0.1}s;
        }
      }
    }
  }
}

@keyframes gradientShift {
  0%, 100% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(2%) translateY(-1%); }
  50% { transform: translateX(-1%) translateY(2%); }
  75% { transform: translateX(1%) translateY(-2%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
}

/* 演示内容区域 */
.demo-content {
  position: relative;
  z-index: 1;
  margin-left: 420px;
  padding: 40px;
  min-height: 100vh;

  .demo-header {
    text-align: center;
    margin-bottom: 60px;

    h1 {
      font-family: 'BioRhyme', serif;
      font-size: 48px;
      font-weight: 400;
      color: #ffffff;
      margin-bottom: 20px;
      text-shadow: 0 0 20px rgba(2, 216, 229, 0.5);
    }

    p {
      font-family: 'BioRhyme', serif;
      font-size: 20px;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .demo-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 60px;

    .feature-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(2, 216, 229, 0.3);
      border-radius: 15px;
      padding: 30px;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(2, 216, 229, 0.2);
        border-color: rgba(2, 216, 229, 0.6);
      }

      h3 {
        font-family: 'BioRhyme', serif;
        font-size: 24px;
        font-weight: 400;
        color: #02D8E5;
        margin-bottom: 20px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          font-family: 'BioRhyme', serif;
          font-size: 16px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;

          &::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #02D8E5;
            font-size: 20px;
          }
        }
      }
    }
  }

  .demo-events {
    h3 {
      font-family: 'BioRhyme', serif;
      font-size: 28px;
      font-weight: 400;
      color: #02D8E5;
      margin-bottom: 20px;
    }

    .event-log {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 20px;
      max-height: 300px;
      overflow-y: auto;
      backdrop-filter: blur(10px);

      .event-item {
        display: flex;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        font-family: 'BioRhyme', serif;

        &:last-child {
          border-bottom: none;
        }

        .event-time {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          margin-right: 15px;
          min-width: 80px;
        }

        .event-type {
          font-size: 16px;
          font-weight: 400;
          color: #02D8E5;
          margin-right: 15px;
          min-width: 80px;
        }

        .event-data {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          flex: 1;
        }
      }
    }
  }
}

/* 响应式设计 */
@media (max-width: 1600px) {
  .demo-content {
    margin-left: 350px;
  }
}

@media (max-width: 1400px) {
  .demo-content {
    margin-left: 0;
    padding: 20px;

    .demo-header {
      h1 {
        font-size: 36px;
      }
    }

    .demo-features {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
}

@media (max-width: 768px) {
  .demo-content {
    padding: 15px;

    .demo-header {
      h1 {
        font-size: 28px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}
</style> 
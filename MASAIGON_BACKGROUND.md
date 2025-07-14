# MasaigonBackground 组件

基于 masaigon.space 网站的背景动画效果完整复刻，使用 CSS clip-path polygon 实现动态背景动画。

## 功能特性

- ✨ **动态 clip-path 多边形动画** - 基于 masaigon.space 的原始算法
- 🎯 **30个粒子系统** - 边界反弹，动态透明度
- 🔷 **4种主题色彩** - 紫色、蓝色、绿色、青色
- 🌊 **流体动画效果** - 平滑的数学函数驱动
- 🎨 **强度可调节** - 0-2倍速度控制
- 📱 **响应式设计** - 移动端优化
- ⚡ **性能优化** - 支持 prefers-reduced-motion

## 使用方法

### 基本用法

```vue
<template>
  <div class="your-page">
    <!-- 背景动画 -->
    <MasaigonBackground />
    
    <!-- 你的内容 -->
    <div class="content">
      <h1>页面内容</h1>
    </div>
  </div>
</template>

<script>
import MasaigonBackground from '@/components/MasaigonBackground.vue'

export default {
  components: {
    MasaigonBackground
  }
}
</script>
```

### 高级配置

```vue
<template>
  <MasaigonBackground 
    :animated="true"
    :intensity="0.8"
    theme="purple"
  />
</template>
```

## Props 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `animated` | Boolean | `true` | 是否启用动画 |
| `intensity` | Number | `1` | 动画强度 (0-2) |
| `theme` | String | `'purple'` | 主题色彩 |

### 主题选项

- `purple` - 紫色主题 (默认)
- `blue` - 蓝色主题
- `green` - 绿色主题
- `cyan` - 青色主题

## 技术实现

### 核心算法

基于 masaigon.space 网站的 clip-path 动画算法：

```javascript
// 四个控制点的动态计算
this.point1X = 50 + Math.sin(timeOffset * frequency) * amplitude * 0.8
this.point1Y = 20 + Math.cos(timeOffset * frequency * 0.7) * amplitude * 0.6

this.point2X = 80 + Math.sin(timeOffset * frequency + Math.PI * 0.5) * amplitude * 0.7
this.point2Y = 50 + Math.cos(timeOffset * frequency * 0.8 + Math.PI * 0.5) * amplitude * 0.8

// ... 其他控制点
```

### CSS clip-path

```css
clip-path: polygon(
  var(--point1X) var(--point1Y),
  var(--point2X) var(--point2Y),
  var(--point3X) var(--point3Y),
  var(--point4X) var(--point4Y)
);
```

### 性能优化

1. **非响应式对象**: 使用 `markRaw()` 避免 Vue 响应式开销
2. **requestAnimationFrame**: 60fps 流畅动画
3. **内存管理**: 组件卸载时自动清理动画
4. **响应式适配**: 移动端降低动画强度

## 项目集成

### 已集成页面

- **SocialFeed** (`/social-feed`) - 紫色主题，强度 0.8
- **News** (`/news`) - 蓝色主题，强度 0.6
- **Explore** (`/explore`) - 青色主题，强度 0.7

### 演示页面

访问 `/masaigon-demo` 或 `/masaigon-background` 查看完整演示和控制面板。

## 开发说明

### 文件结构

```
src/
├── components/
│   └── MasaigonBackground.vue    # 主组件
├── views/
│   ├── SocialFeed.vue           # 已集成
│   ├── News.vue                 # 已集成
│   ├── Explore.vue              # 已集成
│   └── MasaigonDemo.vue         # 演示页面
└── router/
    └── index.js                 # 路由配置
```

### 自定义主题

可以在组件内部的 `themes` 对象中添加新主题：

```javascript
themes: {
  custom: {
    base: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 70%, #2d1b69 100%)',
    animated: 'linear-gradient(45deg, #your-color 0%, #another-color 50%, #third-color 100%)',
    particles: '#your-particle-color'
  }
}
```

## 兼容性

- **现代浏览器**: 支持 CSS clip-path
- **移动设备**: 响应式设计，自动优化性能
- **无障碍**: 支持 `prefers-reduced-motion` 偏好设置

## 许可证

基于 masaigon.space 网站的开源实现，仅供学习和参考使用。 
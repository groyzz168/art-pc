# VERA - Vue 3 项目

基于 Figma 设计的 Vue 3 + Vite 项目，完美还原设计稿。

## 项目特点

- 🎨 **高保真设计还原** - 完全基于 Figma 设计数据生成
- 🚀 **Vue 3 + Vite** - 现代化前端开发体验
- 🎭 **玻璃态设计** - 现代化的视觉效果
- 📱 **响应式设计** - 适配多种设备屏幕
- 🎪 **SVG 装饰** - 丰富的视觉装饰元素
- 🌈 **渐变背景** - 精美的色彩渐变

## 项目结构

```
src/
├── assets/
│   └── figma/          # Figma 导出的 SVG 资源
├── components/         # Vue 组件
├── router/            # Vue Router 配置
├── styles/            # 样式文件
│   ├── variables.scss # 设计变量
│   └── main.scss      # 全局样式
├── views/             # 页面组件
│   ├── VeraLogin.vue  # 登录页面
│   └── Home.vue       # 首页
├── App.vue            # 根组件
└── main.js            # 入口文件
```

## 设计系统

### 颜色规范
- 主色调：#098289 (青绿色)
- 强调色：#2FB9C5 (亮青色)
- 渐变：#02D8E5 → #A5629A
- 文本：#FFFFFF (白色)
- 次要文本：#8B8B8B (灰色)

### 字体规范
- 主字体：BioRhyme
- 标题字体：BioRhyme Expanded
- 等宽字体：Allerta Stencil

### 组件特性
- 玻璃态效果：backdrop-filter + 半透明背景
- 圆角：4px, 10px, 15px, 50px
- 阴影：多层次阴影效果
- 动画：平滑过渡效果

## 页面说明

### 登录页面 (`/`)
- VERA 品牌展示
- 玻璃态登录表单
- 邮箱/密码输入
- 登录/注册按钮
- 装饰性 SVG 背景

### 首页 (`/home`)
- 左侧导航栏
- 中间内容区域
- 右侧信息面板
- 搜索功能
- 趋势话题
- 推荐关注

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - 官方路由管理器
- **SCSS** - CSS 预处理器
- **Google Fonts** - 网络字体服务

## 浏览器支持

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 开发说明

### 设计数据来源
所有设计数据都来自 Figma 设计稿，通过 MCP (Model Context Protocol) 自动获取：
- 节点位置和尺寸
- 颜色和渐变
- 字体和排版
- 圆角和阴影
- SVG 装饰元素

### 响应式设计
项目采用移动优先的响应式设计：
- 桌面端：完整布局
- 平板端：适配调整
- 移动端：垂直堆叠

### 性能优化
- SVG 图标优化
- 懒加载实现
- 代码分割
- 资源压缩

## 许可证

MIT License 
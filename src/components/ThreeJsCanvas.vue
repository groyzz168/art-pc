<template>
  <div class="threejs-canvas-container">
    <canvas 
      ref="canvas" 
      class="threejs-canvas"
      :width="canvasWidth"
      :height="canvasHeight"
      :style="canvasStyle"
    ></canvas>
    <div class="canvas-overlay" v-if="showOverlay">
      <div class="loading-text">Loading 3D Scene...</div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { markRaw } from 'vue'

export default {
  name: 'ThreeJsCanvas',
  props: {
    width: {
      type: Number,
      default: 2134
    },
    height: {
      type: Number,
      default: 504
    },
    animationType: {
      type: String,
      default: 'particles',
      validator: value => ['particles', 'waves', 'geometry', 'shader'].includes(value)
    }
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      animationId: null,
      showOverlay: true,
      canvasWidth: 2560,
      canvasHeight: 604,
      particles: [],
      time: 0
    }
  },
  computed: {
    canvasStyle() {
      return {
        display: 'block',
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  },
  mounted() {
    this.initThreeJS()
    
    // 等待渲染器初始化完成后再创建场景和开始动画
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.renderer) {
          this.createScene()
          this.animate()
        }
      }, 100)
    })
    
    // 延迟隐藏加载覆盖层
    setTimeout(() => {
      this.showOverlay = false
    }, 1500)
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    initThreeJS() {
      // 创建场景并标记为非响应式
      this.scene = markRaw(new THREE.Scene())
      this.scene.background = new THREE.Color(0x000000)
      
      // 创建相机并标记为非响应式
      this.camera = markRaw(new THREE.PerspectiveCamera(
        75,
        this.canvasWidth / this.canvasHeight,
        0.1,
        1000
      ))
      this.camera.position.set(0, 0, 5)
      
      // 等待canvas元素准备好
      this.$nextTick(() => {
        if (this.$refs.canvas) {
          // 创建渲染器并标记为非响应式
          this.renderer = markRaw(new THREE.WebGLRenderer({
            canvas: this.$refs.canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }))
          this.renderer.setSize(this.canvasWidth, this.canvasHeight)
          this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
          
          // 设置渲染器的一些安全选项
          this.renderer.shadowMap.enabled = false
          this.renderer.physicallyCorrectLights = false
        }
      })
    },
    
    createSafeMaterial(type, options = {}) {
      // 创建材质时使用markRaw来防止响应式代理
      let material
      
      switch (type) {
        case 'points':
          material = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
            ...options
          })
          break
        case 'basic':
          material = new THREE.MeshBasicMaterial({
            color: 0x8B3A9C,
            transparent: true,
            opacity: 0.8,
            ...options
          })
          break
        default:
          material = new THREE.MeshBasicMaterial(options)
      }
      
      // 使用markRaw防止材质被响应式系统代理
      return markRaw(material)
    },
    
    createScene() {
      switch (this.animationType) {
        case 'particles':
          this.createParticleSystem()
          break
        case 'waves':
          this.createWaveSystem()
          break
        case 'geometry':
          this.createGeometryAnimation()
          break
        case 'shader':
          this.createShaderEffect()
          break
        default:
          this.createParticleSystem()
      }
    },
    
    createParticleSystem() {
      const particleCount = 1000
      const geometry = markRaw(new THREE.BufferGeometry())
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        // 位置
        positions[i3] = (Math.random() - 0.5) * 20
        positions[i3 + 1] = (Math.random() - 0.5) * 10
        positions[i3 + 2] = (Math.random() - 0.5) * 10
        
        // 颜色 (模拟masaigon的紫青色调)
        const colorVariation = Math.random()
        colors[i3] = colorVariation * 0.2 + 0.8      // R
        colors[i3 + 1] = colorVariation * 0.6 + 0.4  // G
        colors[i3 + 2] = colorVariation * 0.4 + 0.6  // B
        
        // 大小
        sizes[i] = Math.random() * 3 + 1
        
        // 存储粒子信息用于动画
        this.particles.push({
          velocity: markRaw(new THREE.Vector3(
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02,
            (Math.random() - 0.5) * 0.02
          )),
          originalPosition: markRaw(new THREE.Vector3(
            positions[i3],
            positions[i3 + 1],
            positions[i3 + 2]
          ))
        })
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      
      // 使用安全的材质创建方法
      const material = this.createSafeMaterial('points', {
        map: this.createCircleTexture()
      })
      
      const points = markRaw(new THREE.Points(geometry, material))
      this.scene.add(points)
      this.particleSystem = points
    },
    
    createWaveSystem() {
      const geometry = markRaw(new THREE.PlaneGeometry(20, 10, 100, 50))
      
      // 使用安全的材质创建方法
      const material = this.createSafeMaterial('basic', {
        wireframe: true,
        opacity: 0.6
      })
      
      const mesh = markRaw(new THREE.Mesh(geometry, material))
      this.scene.add(mesh)
      this.waveSystem = mesh
      
      // 手动创建波浪动画效果
      this.waveGeometry = geometry
    },
    
    createGeometryAnimation() {
      const geometry = markRaw(new THREE.IcosahedronGeometry(1, 4))
      const material = this.createSafeMaterial('basic', {
        wireframe: true,
        opacity: 0.6
      })
      
      // 创建多个几何体
      for (let i = 0; i < 20; i++) {
        const mesh = markRaw(new THREE.Mesh(geometry, material.clone()))
        mesh.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        )
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        )
        mesh.scale.setScalar(Math.random() * 0.5 + 0.2)
        this.scene.add(mesh)
      }
    },
    
    createShaderEffect() {
      const geometry = markRaw(new THREE.PlaneGeometry(15, 8, 1, 1))
      
      // 使用安全的材质创建方法
      const material = this.createSafeMaterial('basic')
      
      const mesh = markRaw(new THREE.Mesh(geometry, material))
      this.scene.add(mesh)
      this.shaderSystem = mesh
    },
    
    createCircleTexture() {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      
      const context = canvas.getContext('2d')
      const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.2, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.4, 'rgba(255,255,255,0.8)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      
      context.fillStyle = gradient
      context.fillRect(0, 0, 64, 64)
      
      const texture = markRaw(new THREE.CanvasTexture(canvas))
      return texture
    },
    
    animate() {
      this.animationId = requestAnimationFrame(this.animate)
      this.time += 0.01
      
      try {
        // 更新不同类型的动画
        if (this.particleSystem) {
          this.updateParticles()
        }
        
        if (this.waveSystem) {
          this.updateWaveAnimation()
        }
        
        if (this.shaderSystem) {
          // 简单的颜色变化动画
          const hue = (this.time * 0.1) % 1
          this.shaderSystem.material.color.setHSL(hue, 0.7, 0.5)
        }
        
        // 更新几何体动画
        this.scene.children.forEach(child => {
          if (child.type === 'Mesh' && child.geometry && child.geometry.type === 'IcosahedronGeometry') {
            child.rotation.x += 0.01
            child.rotation.y += 0.02
            child.position.y += Math.sin(this.time + child.position.x) * 0.01
          }
        })
        
        // 安全渲染
        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera)
        }
      } catch (error) {
        console.warn('Three.js animation error:', error)
        // 继续动画循环，但跳过这一帧
      }
    },
    
    updateWaveAnimation() {
      if (!this.waveGeometry) return
      
      const positions = this.waveGeometry.attributes.position.array
      const positionAttribute = this.waveGeometry.attributes.position
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const wave = Math.sin(x * 0.5 + this.time) * 0.5 + Math.sin(y * 0.3 + this.time * 0.8) * 0.3
        positions[i + 2] = wave
      }
      
      positionAttribute.needsUpdate = true
    },
    
    updateParticles() {
      if (!this.particleSystem) return
      
      const positions = this.particleSystem.geometry.attributes.position.array
      
      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i]
        const i3 = i * 3
        
        // 更新位置
        positions[i3] += particle.velocity.x
        positions[i3 + 1] += particle.velocity.y
        positions[i3 + 2] += particle.velocity.z
        
        // 边界检测和重置
        if (Math.abs(positions[i3]) > 10) {
          positions[i3] = particle.originalPosition.x
          positions[i3 + 1] = particle.originalPosition.y
          positions[i3 + 2] = particle.originalPosition.z
        }
        
        // 添加波动效果
        positions[i3 + 1] += Math.sin(this.time + positions[i3] * 0.1) * 0.01
      }
      
      this.particleSystem.geometry.attributes.position.needsUpdate = true
      
      // 简单的颜色变化
      const hue = (this.time * 0.05) % 1
      this.particleSystem.material.color.setHSL(hue, 0.8, 0.7)
    },
    
    cleanup() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
      
      if (this.renderer) {
        this.renderer.dispose()
      }
      
      if (this.scene) {
        this.scene.clear()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.threejs-canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.threejs-canvas {
  display: block;
  background: transparent;
}

.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: opacity 0.5s ease;
  
  .loading-text {
    color: #ffffff;
    font-family: 'BioRhyme', serif;
    font-size: 18px;
    font-weight: 400;
    animation: pulse 1.5s ease-in-out infinite;
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
</style> 
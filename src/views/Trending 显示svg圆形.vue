<template>
	<div class="trending-page">
		<!-- 背景渐变 -->
		<div class="background-gradient"></div>

		<!-- 左侧导航栏 -->
		<SidebarMenu :active-nav-item="activeNavItem" :user-name="userName" :user-email="userEmail"
			:user-avatar="userAvatar" @nav-click="handleNavClick" @post-click="handlePostClick"
			@user-profile-click="handleUserProfileClick" />

		<!-- 右侧披萨区域 -->
		<div class="pizza-section">
			<div class="pizza-container">
				<!-- SVG 圆形扇形 -->
				<svg class="pizza-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<g v-if="showPizzaSlices">
						<path
							v-for="(slice, index) in pizzaSlices"
							:key="index"
							:d="getSlicePath(slice)"
							:fill="slice.color"
							:stroke="slice.isHovered ? '#ffffff' : 'rgba(255,255,255,0.3)'"
							:stroke-width="slice.isHovered ? '2' : '1'"
							class="pizza-slice-svg"
							@mouseenter="handleSliceHover(index, true)"
							@mouseleave="handleSliceHover(index, false)"
							@click="handleSliceClick(slice, index)"
						/>
					</g>
				</svg>
				
				<!-- 图片云 -->
				<div class="image-cloud">
					<!-- 暗化遮罩层 -->
					<div 
						v-if="currentHoveredSlice !== null"
						class="hover-mask"
						:style="getMaskStyle()"
					></div>
					
					<div 
						v-for="(image, index) in imageCloud" 
						:key="`image-${index}`"
						class="floating-image"
						:style="getImageStyle(image, index)"
						@mouseenter="handleImageHover(index, true)"
						@mouseleave="handleImageHover(index, false)"
						@click="handleImageClick(image, index)"
					>
						<img :src="image.src" :alt="image.alt" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import avatar1 from '@/assets/figma/avatar/avatar1.jpg'
import avatar2 from '@/assets/figma/avatar/avatar2.png'
import contentImage1 from '@/assets/figma/content-image1.jpg'
import followAvatar1 from '@/assets/figma/follow-avatar1.png'
import followAvatar2 from '@/assets/figma/follow-avatar2.png'
import followAvatar3 from '@/assets/figma/follow-avatar3.png'
import contentAvatar1 from '@/assets/figma/content-avatar1.png'

export default {
	name: 'Trending',
	components: {
		SidebarMenu
	},
	data() {
		return {
			activeNavItem: 'trending',
			userName: 'Polly',
			userEmail: 'pollyliu508@sina.com',
			userAvatar: avatar1,
			pizzaSlices: [],
			imageCloud: [],
			showPizzaSlices: true, // 控制扇形显示隐藏的属性
			hoveredSlice: null // 追踪当前hover的扇形区域
		}
	},
	computed: {
		// 确保hoveredSlice的变化能被正确响应
		currentHoveredSlice() {
			return this.hoveredSlice
		}
	},
	watch: {
		hoveredSlice(newVal, oldVal) {
			console.log('hoveredSlice changed from', oldVal, 'to', newVal)
			// 强制重新计算所有图片样式
			this.$forceUpdate()
		}
	},
	mounted() {
		this.generatePizzaSlices()
		this.generateImageCloud()
	},
	methods: {
		handleNavClick(navName) {
			this.activeNavItem = navName
			console.log('Navigation clicked:', navName)
		},
		handlePostClick() {
			console.log('POST button clicked')
		},
		handleUserProfileClick() {
			console.log('User profile clicked')
		},
		handleSliceHover(index, isHover) {
            this.pizzaSlices[index].isHovered = isHover
			//this.$set(this.pizzaSlices[index], 'isHovered', isHover)
			
			// 设置当前hover的扇形区域
			if (isHover) {
				this.hoveredSlice = index
				console.log('Slice hovered - index:', index, 'hoveredSlice:', this.hoveredSlice)
			} else {
				// 只有当前hover的扇形离开时才清除hoveredSlice
				if (this.hoveredSlice === index) {
					this.hoveredSlice = null
					console.log('Slice unhovered - hoveredSlice:', this.hoveredSlice)
				}
			}
		},
		handleSliceClick(slice, index) {
			console.log('Clicked slice:', slice, 'at index:', index)
		},
		handleImageHover(index, isHover) {
            this.imageCloud[index].isHovered = isHover
			//this.$set(this.imageCloud[index], 'isHovered', isHover)
			
			// 设置当前hover的扇形区域
			if (isHover) {
				const image = this.imageCloud[index]
				this.hoveredSlice = image.slice
				console.log('Image hovered - slice:', image.slice, 'hoveredSlice:', this.hoveredSlice)
			} else {
				// 只有当前hover的图片离开时才清除hoveredSlice
				const image = this.imageCloud[index]
				if (this.hoveredSlice === image.slice) {
					this.hoveredSlice = null
					console.log('Image unhovered - hoveredSlice:', this.hoveredSlice)
				}
			}
		},
		handleImageClick(image, index) {
			console.log('Clicked image:', image, 'at index:', index)
		},
		// 控制扇形显示隐藏的方法
		togglePizzaSlices() {
			this.showPizzaSlices = !this.showPizzaSlices
			console.log('Pizza slices visibility:', this.showPizzaSlices)
		},
		showPizzaSlicesMethod() {
			this.showPizzaSlices = true
			console.log('Pizza slices shown')
		},
		hidePizzaSlicesMethod() {
			this.showPizzaSlices = false
			console.log('Pizza slices hidden')
		},
		generatePizzaSlices() {
			const sliceCount = 10 // 改为10个扇形块
			const sliceAngle = 25 // 减小每个扇形的角度，从34度改为25度
			const gapAngle = 11 // 增大扇形之间的间隙角度，从2度改为11度
			const colors = [
				'rgba(255, 107, 107, 0.3)', 
				'rgba(76, 175, 80, 0.3)', 
				'rgba(33, 150, 243, 0.3)', 
				'rgba(156, 39, 176, 0.3)', 
				'rgba(255, 193, 7, 0.3)', 
				'rgba(233, 30, 99, 0.3)', 
				'rgba(0, 188, 212, 0.3)', 
				'rgba(255, 152, 0, 0.3)',
				'rgba(139, 195, 74, 0.3)',
				'rgba(121, 85, 72, 0.3)'
			]
			
			// 360度完整圆形分布
			for (let i = 0; i < sliceCount; i++) {
				const startAngle = i * (sliceAngle + gapAngle)
				const endAngle = startAngle + sliceAngle
				
				const slice = {
					id: i,
					label: `Slice ${i + 1}`,
					startAngle: startAngle,
					endAngle: endAngle,
					sliceAngle: sliceAngle,
					color: colors[i % colors.length],
					radius: 150, // 扇形半径
					isHovered: false
				}
				this.pizzaSlices.push(slice)
			}
		},
		generateImageCloud() {
			const images = [
				{ src: avatar1, alt: 'Avatar 1' },
				{ src: avatar2, alt: 'Avatar 2' },
				{ src: contentImage1, alt: 'Content 1' },
				{ src: followAvatar1, alt: 'Follow 1' },
				{ src: followAvatar2, alt: 'Follow 2' },
				{ src: followAvatar3, alt: 'Follow 3' },
				{ src: contentAvatar1, alt: 'Content Avatar 1' }
			]
			
			this.imageCloud = []
			
			// 为每个扇形生成图片
			this.pizzaSlices.forEach((slice, sliceIndex) => {
				// 随机决定这个扇形的密集程度
				const densityMultiplier = 0.5 + Math.random() * 1.0 // 0.5-1.5倍的密度
				
				// 每个扇形内的图片层级 - 使用真正的圆形半径
				const sliceLayers = [
					{ radius: 8, count: Math.floor((2 + Math.random() * 3) * densityMultiplier) },   // 内层：动态数量
					{ radius: 15, count: Math.floor((3 + Math.random() * 4) * densityMultiplier) },   // 中内层：动态数量
					{ radius: 25, count: Math.floor((5 + Math.random() * 6) * densityMultiplier) },   // 中层：动态数量
					{ radius: 35, count: Math.floor((8 + Math.random() * 8) * densityMultiplier) },   // 中外层：动态数量
					{ radius: 42, count: Math.floor((10 + Math.random() * 10) * densityMultiplier) }, // 外层：动态数量
				]
				
				// 在扇形边缘增加更多图片来强调形状
				const edgeImages = [
					{ radius: 48, count: Math.floor((15 + Math.random() * 15) * densityMultiplier) }, // 边缘层：动态数量
				]
				
				// 随机决定是否在某些区域创建聚集效果
				const hasCluster = Math.random() > 0.6 // 40%的概率产生聚集
				if (hasCluster) {
					// 添加额外的聚集图片
					const clusterRadius = 15 + Math.random() * 25 // 聚集半径
					const clusterAngle = slice.startAngle + Math.random() * (slice.endAngle - slice.startAngle)
					const clusterCount = 5 + Math.floor(Math.random() * 10)
					
					for (let i = 0; i < clusterCount; i++) {
						const randomImage = images[Math.floor(Math.random() * images.length)]
						
						// 在聚集中心附近生成图片
						const clusterSpread = 15 // 聚集范围
						const angle = clusterAngle + (Math.random() - 0.5) * clusterSpread
						const radius = clusterRadius + (Math.random() - 0.5) * 10
						
						const clampedRadius = Math.max(5, Math.min(50, radius))
						const x = 50 + Math.cos(angle * Math.PI / 180) * (clampedRadius / 50) * 50
						const y = 50 + Math.sin(angle * Math.PI / 180) * (clampedRadius / 50) * 50
						
						const clampedX = Math.max(5, Math.min(95, x))
						const clampedY = Math.max(5, Math.min(95, y))
						
						const baseSize = 6 + Math.random() * 8
						const sizeVariation = Math.random() * 8 + baseSize
						const aspectRatio = 0.6 + Math.random() * 0.8
						const width = sizeVariation
						const height = sizeVariation * aspectRatio
						const rotation = Math.random() * 360
						const opacity = 0.5 + Math.random() * 0.4
						const animationDelay = Math.random() * 12
						
						const clusterItem = {
							src: randomImage.src,
							alt: randomImage.alt,
							x: clampedX,
							y: clampedY,
							width: width,
							height: height,
							rotation: rotation,
							opacity: opacity,
							animationDelay: animationDelay,
							layer: -1, // 标记为聚集图片
							slice: sliceIndex,
							angle: angle,
							isHovered: false
						}
						
						this.imageCloud.push(clusterItem)
					}
				}
				
				// 合并所有层级
				const allLayers = [...sliceLayers, ...edgeImages]
				
				allLayers.forEach((layer, layerIndex) => {
					// 随机决定是否在这个层级创建空隙区域
					const hasGap = Math.random() > 0.7 // 30%的概率产生空隙
					let gapStartAngle = 0
					let gapEndAngle = 0
					
					if (hasGap) {
						const gapSize = 5 + Math.random() * 10 // 5-15度的空隙
						gapStartAngle = slice.startAngle + Math.random() * (slice.endAngle - slice.startAngle - gapSize)
						gapEndAngle = gapStartAngle + gapSize
					}
					
					for (let i = 0; i < layer.count; i++) {
						// 随机选择图片
						const randomImage = images[Math.floor(Math.random() * images.length)]
						
						// 完全随机的角度分布（在扇形范围内）
						const angleRange = slice.endAngle - slice.startAngle
						let angle = slice.startAngle + Math.random() * angleRange
						
						// 如果这个角度在空隙区域内，跳过或者重新生成
						if (hasGap && angle >= gapStartAngle && angle <= gapEndAngle) {
							if (Math.random() > 0.8) { // 20%的概率仍然放置图片
								continue // 跳过这张图片
							}
						}
						
						// 在当前层级半径范围内随机分布，增加更大的变化
						const radiusVariation = Math.random() * 8 - 4 // ±4的随机偏移
						const radius = layer.radius + radiusVariation
						
						// 确保半径在合理范围内
						const clampedRadius = Math.max(5, Math.min(50, radius))
						
						// 计算位置 - 基于真正的圆形坐标
						const x = 50 + Math.cos(angle * Math.PI / 180) * (clampedRadius / 50) * 50
						const y = 50 + Math.sin(angle * Math.PI / 180) * (clampedRadius / 50) * 50
						
						// 确保图片在容器范围内
						const clampedX = Math.max(5, Math.min(95, x))
						const clampedY = Math.max(5, Math.min(95, y))
						
						// 更随机的图片大小
						const isEdgeLayer = layerIndex >= sliceLayers.length
						const baseSize = isEdgeLayer ? 8 + Math.random() * 8 : (layerIndex >= 3 ? 10 + Math.random() * 12 : 8 + Math.random() * 10)
						const sizeVariation = Math.random() * 10 + baseSize
						
						// 更随机的宽高比
						const aspectRatio = 0.5 + Math.random() * 1.0 // 0.5-1.5的宽高比
						const width = sizeVariation
						const height = sizeVariation * aspectRatio
						
						// 完全随机的旋转角度
						const rotation = Math.random() * 360
						
						// 更随机的透明度
						const baseOpacity = 0.4 + Math.random() * 0.5 // 0.4-0.9的透明度
						const opacity = baseOpacity
						
						// 更随机的动画延迟
						const animationDelay = Math.random() * 15
						
						const imageItem = {
							src: randomImage.src,
							alt: randomImage.alt,
							x: clampedX,
							y: clampedY,
							width: width,
							height: height,
							rotation: rotation,
							opacity: opacity,
							animationDelay: animationDelay,
							layer: layerIndex,
							slice: sliceIndex,
							angle: angle,
							isHovered: false
						}
						
						this.imageCloud.push(imageItem)
					}
				})
			})
			
			// 调试信息
			console.log('扇形区域:', this.pizzaSlices.map(slice => `${slice.startAngle}°-${slice.endAngle}°`))
			console.log('每个扇形的图片数量:', this.pizzaSlices.map((slice, index) => 
				this.imageCloud.filter(img => img.slice === index).length
			))
			console.log('总图片数量:', this.imageCloud.length)
		},
		getSlicePath(slice) {
			const centerX = 100; // SVG viewBox is 200x200, so center is 100
			const centerY = 100;
			const radius = 90; // 稍微小一点，留出边距
			
			const startAngleRad = (slice.startAngle * Math.PI) / 180;
			const endAngleRad = (slice.endAngle * Math.PI) / 180;
			
			const startX = centerX + Math.cos(startAngleRad) * radius;
			const startY = centerY + Math.sin(startAngleRad) * radius;
			const endX = centerX + Math.cos(endAngleRad) * radius;
			const endY = centerY + Math.sin(endAngleRad) * radius;
			
			// 判断是否是大弧（角度大于180度）
			const largeArcFlag = slice.sliceAngle > 180 ? 1 : 0;
			
			// 创建扇形路径
			return `M ${centerX},${centerY} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
		},
		getImageStyle(image, index) {
			const hoverScale = image.isHovered ? 1.2 : 1
			const hoverOpacity = image.isHovered ? 1 : image.opacity
			
			// 根据扇形hover状态调整亮度
			let brightness = 1
			let finalOpacity = hoverOpacity
			let zIndex = 500 + image.layer * 10 + index
			
			// 使用computed属性确保响应式更新
			const currentHovered = this.currentHoveredSlice
			console.log("currentHovered", currentHovered)
			if (currentHovered !== null) {
				if (image.slice === currentHovered) {
					// 当前hover的扇形区域：保持亮度，提升层级
					brightness = 1.2
					finalOpacity = Math.min(1, hoverOpacity * 1.2)
					zIndex = 600 + image.layer * 10 + index // 提升z-index
				} else {
					// 其他扇形区域：变暗，降低层级
					brightness = 0.3
					finalOpacity = hoverOpacity * 0.4
					zIndex = 300 + image.layer * 10 + index // 降低z-index
				}
			}else {
				// 其他扇形区域：变暗，降低层级
					brightness = 0.3
					finalOpacity = hoverOpacity * 0.4
					zIndex = 300 + image.layer * 10 + index // 降低z-index
			}
			// 当没有悬停任何扇形时，所有图片保持正常状态
			
			return {
				position: 'absolute',
				left: `${image.x}%`,
				top: `${image.y}%`,
				width: `${image.width}px`,
				height: `${image.height}px`,
				transform: `translate(-50%, -50%) rotate(${image.rotation}deg) scale(${hoverScale})`,
				opacity: finalOpacity,
				filter: `brightness(${brightness})`,
				zIndex: zIndex,
				transition: 'all 0.3s ease',
				animationDelay: `${image.animationDelay}s`,
				'--rotation': `${image.rotation}deg`
			}
		},
		getMaskStyle() {
			if (this.hoveredSlice === null) return {}

			const slice = this.pizzaSlices[this.hoveredSlice]
			const centerX = 100;
			const centerY = 100;
			const radius = 90; // 稍微小一点，留出边距

			const startAngleRad = (slice.startAngle * Math.PI) / 180;
			const endAngleRad = (slice.endAngle * Math.PI) / 180;

			const startX = centerX + Math.cos(startAngleRad) * radius;
			const startY = centerY + Math.sin(startAngleRad) * radius;
			const endX = centerX + Math.cos(endAngleRad) * radius;
			const endY = centerY + Math.sin(endAngleRad) * radius;

			const largeArcFlag = slice.sliceAngle > 180 ? 1 : 0;

			return {
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				background: 'rgba(0, 0, 0, 0.7)', // 半透明黑色遮罩
				zIndex: 400, // 确保在图片云下方
				borderRadius: '50%', // 圆形遮罩
				pointerEvents: 'none' // 遮罩层不响应点击
			}
		}
	}
}
</script>

<style scoped lang="scss">
.trending-page {
	display: flex;
	min-height: 100vh;
	background: #000;
	color: #FFFFFF;
	font-family: 'BioRhyme', serif;
	position: relative;
	overflow: hidden;
}

.background-gradient {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(135deg, #8B3A9C 0%, #2E86AB 100%);
	z-index: -1;
}

.pizza-section {
	flex: 1;
	margin-left: 27%;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: 40px;
}

.pizza-container {
	position: relative;
	width: 80vw; // 占视口宽度的80%
	height: 80vh; // 占视口高度的80%
	max-width: 800px; // 最大宽度限制
	max-height: 800px; // 最大高度限制
	min-width: 400px; // 最小宽度限制
	min-height: 400px; // 最小高度限制
	
	.pizza-svg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		
		.pizza-slice-svg {
			cursor: pointer;
			transition: all 0.3s ease;
			transform-origin: center;
			
			&:hover {
				transform: scale(1.05);
				filter: brightness(1.2);
			}
		}
	}
}

.image-cloud {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	
	.hover-mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		border-radius: 50%;
		z-index: 400;
		pointer-events: none;
		transition: all 0.3s ease;
	}
	
	.floating-image {
		pointer-events: all;
		cursor: pointer;
		border-radius: 0; // 移除圆角，改为长方形
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		animation: float 6s ease-in-out infinite;
		
		&:hover {
			box-shadow: 0 4px 16px rgba(255, 255, 255, 0.4);
			z-index: 600 !important; // 确保hover的图片在最上层
		}
		
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0; // 移除圆角，改为长方形
		}
		
		// 不同层级的动画 - 增加更多变化
		&:nth-child(5n) {
			animation-duration: 8s;
		}
		
		&:nth-child(5n+1) {
			animation-duration: 7s;
		}
		
		&:nth-child(5n+2) {
			animation-duration: 9s;
		}
		
		&:nth-child(5n+3) {
			animation-duration: 6s;
		}
		
		&:nth-child(5n+4) {
			animation-duration: 10s;
		}
	}
}

@keyframes float {
	0%, 100% {
		transform: translate(-50%, -50%) translateY(0px) rotate(var(--rotation, 0deg));
	}
	25% {
		transform: translate(-50%, -50%) translateY(-8px) rotate(calc(var(--rotation, 0deg) + 3deg));
	}
	50% {
		transform: translate(-50%, -50%) translateY(0px) rotate(var(--rotation, 0deg));
	}
	75% {
		transform: translate(-50%, -50%) translateY(8px) rotate(calc(var(--rotation, 0deg) - 3deg));
	}
}

/* 响应式设计 */
@media (max-width: 1400px) {
	.pizza-container {
		width: 75vw;
		height: 75vh;
		max-width: 700px;
		max-height: 700px;
	}
	
	.pizza-slice {
		.slice-content {
			font-size: 22px;
		}
	}
}

@media (max-width: 1200px) {
	.pizza-section {
		margin-left: 25%;
		padding: 20px;
	}
	
	.pizza-container {
		width: 70vw;
		height: 70vh;
		max-width: 600px;
		max-height: 600px;
	}
	
	.pizza-slice {
		.slice-content {
			font-size: 20px;
		}
	}
}

@media (max-width: 768px) {
	.pizza-section {
		margin-left: 80px;
		padding: 10px;
	}
	
	.pizza-container {
		width: 65vw;
		height: 65vh;
		max-width: 400px;
		max-height: 400px;
		min-width: 300px;
		min-height: 300px;
	}
	
	.pizza-slice {
		.slice-content {
			font-size: 18px;
		}
	}
	
	.image-cloud {
		.floating-image {
			// 移动端图片稍小，并减少数量显示
			&:nth-child(n+80) {
				display: none; // 隐藏部分图片以提高性能（从80张开始隐藏）
			}
		}
	}
}

@media (max-width: 480px) {
	.image-cloud {
		.floating-image {
			// 小屏幕设备进一步减少图片数量
			&:nth-child(n+50) {
				display: none; // 只显示前50张图片
			}
		}
	}
}
</style> 
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
				<div 
					v-for="(slice, index) in pizzaSlices" 
					:key="index"
					class="pizza-slice"
					:style="getSliceStyle(slice, index)"
					@mouseenter="handleSliceHover(index, true)"
					@mouseleave="handleSliceHover(index, false)"
					@click="handleSliceClick(slice, index)"
				>
					<div class="slice-content">
						{{ slice.label }}
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
			pizzaSlices: []
		}
	},
	mounted() {
		this.generatePizzaSlices()
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
			this.$set(this.pizzaSlices[index], 'isHovered', isHover)
		},
		handleSliceClick(slice, index) {
			console.log('Clicked slice:', slice, 'at index:', index)
		},
		generatePizzaSlices() {
			const sliceCount = 8 // 8个扇形块
			const sliceAngle = 40 // 每个扇形的角度（小于45度，留出间隙）
			const gapAngle = 5 // 扇形之间的间隙角度
			const colors = [
				'#FF6B6B', '#4CAF50', '#2196F3', '#9C27B0', 
				'#FFC107', '#E91E63', '#00BCD4', '#FF9800'
			]
			
			for (let i = 0; i < sliceCount; i++) {
				const startAngle = i * (sliceAngle + gapAngle)
				const slice = {
					id: i,
					label: `Slice ${i + 1}`,
					startAngle: startAngle,
					endAngle: startAngle + sliceAngle,
					sliceAngle: sliceAngle,
					color: colors[i % colors.length],
					radius: 150, // 扇形半径
					isHovered: false
				}
				this.pizzaSlices.push(slice)
			}
		},
		getSliceStyle(slice, index) {
			const hoverScale = slice.isHovered ? 1.1 : 1
			const hoverOpacity = slice.isHovered ? 1 : 0.8
			
			// 计算扇形的clip-path
			const centerX = 50
			const centerY = 50
			const radius = 40 // 扇形在容器中的半径百分比
			
			const startAngleRad = (slice.startAngle * Math.PI) / 180
			const endAngleRad = (slice.endAngle * Math.PI) / 180
			
			const startX = centerX + Math.cos(startAngleRad) * radius
			const startY = centerY + Math.sin(startAngleRad) * radius
			const endX = centerX + Math.cos(endAngleRad) * radius
			const endY = centerY + Math.sin(endAngleRad) * radius
			
			return {
				position: 'absolute',
				left: '50%',
				top: '50%',
				width: '100%', // 使用100%填满容器
				height: '100%', // 使用100%填满容器
				transform: `translate(-50%, -50%) scale(${hoverScale})`,
				background: slice.color,
				clipPath: `polygon(50% 50%, ${startX}% ${startY}%, ${endX}% ${endY}%)`,
				opacity: hoverOpacity,
				transition: 'all 0.3s ease',
				zIndex: slice.isHovered ? 1000 : index + 1,
				boxShadow: slice.isHovered ? '0 8px 32px rgba(0, 0, 0, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.2)'
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
	
	.pizza-slice {
		cursor: pointer;
		transition: all 0.3s ease;
		
		&:hover {
			transform: translate(-50%, -50%) scale(1.1) !important;
			opacity: 1 !important;
			box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4) !important;
			z-index: 1000 !important;
		}
		
		.slice-content {
			position: absolute;
			top: 70%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 24px; // 增大字体
			font-weight: 600;
			color: #FFFFFF;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
			pointer-events: none;
			font-family: 'BioRhyme', serif;
		}
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
}
</style> 
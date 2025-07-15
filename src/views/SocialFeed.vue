<template>
	<div class="social-feed">
		<!-- Masaigon风格背景动画 -->
		<!-- <MasaigonBackground 
			:animated="true"
			:intensity="1.5"
			theme="purple"
		/> -->

		<!-- 左侧导航栏 -->
		<SidebarMenu 
			:active-nav-item="activeNavItem"
			:user-name="userName"
			:user-email="userEmail"
			:user-avatar="userAvatar"
			@nav-click="handleNavClick"
			@post-click="handlePostClick"
			@user-profile-click="handleUserProfileClick"
		/>

		<!-- 中间内容区域 -->
		<div class="main-content">
			<!-- 通知标题栏 -->
			<div class="notification-header">
				<h2>Notification</h2>
				<div class="notification-tabs">
					<button :class="['tab-button', { active: activeTab === 'all' }]" @click="activeTab = 'all'">
						All
					</button>
					<button :class="['tab-button', { active: activeTab === 'mentions' }]"
						@click="activeTab = 'mentions'">
						Mentions
					</button>
				</div>
			</div>

			<!-- 通知列表 -->
			<div class="notifications-list">
				<div v-for="notification in notifications" :key="notification.id" class="notification-item"
					@click="selectNotification(notification)">
					<!-- 头像、名称、时间、设置按钮占一行 -->
					<div class="notification-header-row">
						<div class="notification-avatar">
							<img :src="notification.avatar" :alt="notification.author" />
						</div>
						<div class="notification-header-info">
							<span class="author-name">{{ notification.author }}</span>
							<div class="notification-header-info-r">
								<button class="more-options " @click.stop="showOptions(notification)">
									<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
										<circle cx="2" cy="2" r="1.5" fill="currentColor" />
										<circle cx="8" cy="2" r="1.5" fill="currentColor" />
										<circle cx="14" cy="2" r="1.5" fill="currentColor" />
									</svg>
								</button>
								<span class="notification-time">{{ notification.time }}</span>
								
							</div>
						</div>
					</div>
					<!-- 文本内容区域 -->
					<div class="notification-content">
						<div class="notification-text">{{ notification.content }}</div>
						<!-- <div v-if="notification.image" class="notification-image">
							<img :src="notification.image" alt="Notification image" />
						</div> -->
					</div>
				</div>
			</div>
		</div>

		<!-- 右侧推荐区域 -->
		<div class="sidebar-right">
			<!-- What's happening -->
			<div class="trending-section">
				<h3>What's happening</h3>
				<div class="trending-items">
					<div v-for="trend in trendingTopics" :key="trend.id" class="trending-item"
						@click="selectTrend(trend)">
						<div class="trending-image" v-if="trend.image">
							<img src="@/assets/right/d1facbaa8de0c18a05f824787ba3598d93fc0067.png" :alt="trend.title" />
						</div>
						<div class="trending-content">
							<div class="trending-category" v-if="trend.category">{{ trend.category }}</div>
							<div class="trending-title">{{ trend.title }}</div>
							<div class="trending-meta" v-html="formatTrendingMeta(trend.meta)"></div>
							<div class="trending-meta" v-if="trend.posts" v-html="formatTrendingMeta(trend.posts)"></div>
						</div>
						<button class="more-options" @click.stop="showTrendOptions(trend)">
							<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
								<circle cx="2" cy="2" r="1.5" fill="currentColor" />
								<circle cx="8" cy="2" r="1.5" fill="currentColor" />
								<circle cx="14" cy="2" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>
				</div>
				<button class="show-more-btn">Show More</button>
			</div>

			<!-- Who to follow -->
			<div class="follow-section">
				<h3>Who to follow</h3>
				<div class="follow-suggestions">
					<div v-for="user in suggestedUsers" :key="user.id" class="follow-item">
						<div class="follow-avatar">
							<img :src="user.avatar" :alt="user.name" />
						</div>
						<div class="follow-info">
							<div class="follow-name">{{ user.name }}</div>
							<div class="follow-handle">{{ user.handle }}</div>
						</div>
						<button class="follow-button" @click="toggleFollow(user)"
							:class="{ following: user.isFollowing }">
							{{ user.isFollowing ? 'Following' : 'Follow' }}
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- POST 模态框 -->
		<div v-if="showPostModal" class="modal-overlay" @click="showPostModal = false">
			<div class="post-modal" @click.stop>
				<div class="modal-header">
					<h3>Create Post</h3>
					<button class="close-btn" @click="showPostModal = false">×</button>
				</div>
				<div class="modal-content">
					<textarea v-model="postContent" placeholder="What's happening?" class="post-textarea"></textarea>
					<div class="modal-actions">
						<button class="cancel-btn" @click="showPostModal = false">Cancel</button>
						<button class="submit-btn" @click="submitPost">Post</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
import avatar1 from '@/assets/figma/avatar/avatar1.jpg'
import avatar2 from '@/assets/figma/avatar/avatar2.png'
import userAvatar1 from '@/assets/right/ff5df8a387941532dfba1a476259cb1f58b083c6.jpg'
import userAvatar2 from '@/assets/right/e11d8650ead4662434056954faae2c4bbddba503.jpg'
import userAvatar3 from '@/assets/right/1ce0ca3e3b6eb048fe749c4d1b8594eac7ba5b7b.jpg'
import SidebarMenu from '@/components/SidebarMenu.vue'
import MasaigonBackground from '@/components/MasaigonBackground.vue'

export default {
	name: 'SocialFeed',
	components: {
		SidebarMenu,
		MasaigonBackground
	},
	data() {
		return {
			activeTab: 'all',
			showPostModal: false,
			postContent: '',
			activeNavItem: 'notification',
			userName: 'Polly',
			userEmail: 'pollyliu50Q@sina.com',
			userAvatar: avatar1,
			notifications: [{
					id: 1,
					author: 'Chloé Laurent',
					avatar: avatar1,
					time: 'July 4',
					content: 'Congrats to everyone. At times I even doubted we\'d get it done by July 4! But now we\'ve delivered big tax cuts and the resources necessary to secure the border.'
				},
				{
					id: 2,
					author: 'Aiden Smith',
					avatar: avatar2,
					time: 'July 8',
					content: 'Our new National Service scheme will give young people purpose, skills, and pride. Opportunities that build Britain\'s future.'
				},
				{
					id: 3,
					author: 'Kwame Mensah',
					avatar: avatar1,
					time: 'July 8',
					content: 'BREAKING: Northern Lights spotted as far south as London tonight. Rare solar activity lights up UK skies in spectacular green and pink. 📸 Send us your pictures!',
					image: 'https://via.placeholder.com/300x150/2C3E50/FFFFFF?text=Northern+Lights'
				},
				{
					id: 4,
					author: 'Zanele Dlamini',
					avatar: avatar2,
					time: 'July 9',
					content: 'The James Webb Space Telescope has just detected water vapor on a planet 1,200 light-years away. This changes everything.'
				},
				{
					id: 5,
					author: 'Minseo Kim',
					avatar: avatar1,
					time: 'July 10',
					content: 'New study reveals that meditation can physically change brain structure in just 8 weeks. The neuroscience behind mindfulness is fascinating.'
				}
			],
			trendingTopics: [{
					id: 1,
					title: 'Flamengo vs Bayern Munich',
					meta: '42 minutes ago',
					category: '',
					image: avatar1
				},
				{
					id: 2,
					title: 'The BBC',
					meta: '268K posts',
					category: 'Entertainment · Trending'
				},
				{
					id: 3,
					title: 'Glastonbury',
					meta: 'Trending with The Prodigy,Olivia Rodrigo',
					category: 'Entertainment · Trending',
					posts: '268K posts',
				},
				{
					id: 4,
					title: '#LoveIsland',
					meta: 'Trending with Shakira, Helena',
					category: 'Love Island UK· Trending',
					posts: '268K posts',
				},
				{
					id: 5,
					title: 'Rod Stewart',
					meta: 'Trending with Lulu, Mick Hucknall',
					category: 'Entertainment · Trending',
					posts: '268K posts',
				}
			],
			suggestedUsers: [{
					id: 1,
					name: 'Angela Rayner',
					handle: '@AngelaRayner',
					avatar: userAvatar1,
					isFollowing: false
				},
				{
					id: 2,
					name: 'Big Hims',
					handle: '@BigHims',
					avatar: userAvatar2,
					isFollowing: false
				},
				{
					id: 3,
					name: 'Franz von Holzhausen',
					handle: '@FranzVH',
					avatar: userAvatar3,
					isFollowing: false
				}
			]
		}
	},
	methods: {
		handleNavClick(navName) {
			this.activeNavItem = navName
			console.log('Navigation clicked:', navName)
			// 这里可以添加路由跳转逻辑
		},
		handlePostClick() {
			this.showPostModal = true
		},
		handleUserProfileClick() {
			console.log('User profile clicked')
			// 这里可以添加用户资料页面跳转逻辑
		},
		selectNotification(notification) {
			console.log('Selected notification:', notification)
		},
		showOptions(notification) {
			console.log('Show options for:', notification)
		},
		selectTrend(trend) {
			console.log('Selected trend:', trend)
		},
		showTrendOptions(trend) {
			console.log('Show trend options for:', trend)
		},
		toggleFollow(user) {
			user.isFollowing = !user.isFollowing
		},
		submitPost() {
			if (this.postContent.trim()) {
				console.log('Posting:', this.postContent)
				this.postContent = ''
				this.showPostModal = false
			}
		},
		formatTrendingMeta(meta) {
			if (meta.includes('Trending with')) {
				const [text, ...names] = meta.split('Trending with');
				return `${text}Trending with <span style="color: #2FB9C5;">${names.join(' ')}</span>`;
			}
			return meta;
		}
	}
}
</script>

<style scoped lang="scss">
	/* 全局样式重置 */
	// :global(body) {
	// 	background: #000 !important;
	// 	margin: 0;
	// 	padding: 0;
	// 	overflow-x: hidden;
	// }

	// :global(html) {
	// 	background: #000 !important;
	// }

	.social-feed {
		display: flex;
		min-height: 100vh;
		color: #FFFFFF;
		font-family: 'BioRhyme', serif;
		position: relative;
		overflow: hidden;
	}

	/* 主内容区域 - 调整为3.5比例 */
	.main-content {
		flex: 1;
		margin-left: 27%;
		margin-right: 27%;
		width: 48%;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(15.7px);
		border: 0.25px solid #FFFFFF;
		border-radius: 15px;
		min-height: 100vh;
		position: relative;
		border-right: 1.7px solid #ccc;
		border-left: 1.7px solid #ccc;
	}

	.notification-header {
		display: flex;
		flex-direction: column;
		
		
		padding: 24px 28px;
		border-bottom: 0.5px solid #FFFFFF;
		
		position: sticky;
		top: 0;
		z-index: 10;

		h2 {
			font-size: 26px;
			font-weight: 800;
			margin: 0;
			color: #FFFFFF;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.5px;
		}

		.notification-tabs {
			display: flex;
			gap: 36px;

			.tab-button {
				background: none;
				border: none;
				color: rgba(255, 255, 255, 0.6);
				font-size: 18px;
				font-weight: 600;
				cursor: pointer;
				padding: 0px 0;
				border-bottom: 1px solid transparent;
				transition: all 0.2s ease;
				font-family: 'BioRhyme', serif;
				letter-spacing: 0.3px;

				&:hover {
					color: rgba(255, 255, 255, 0.8);
				}

				&.active {
					color: #FFFFFF;
					border-bottom-color: #FFFFFF;
				}
			}
		}
	}

	.notifications-list {
		.notification-item {
			display: flex;
			flex-direction: column;
			padding: 0;
			border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
			cursor: pointer;
			transition: all 0.2s ease;

			&:hover {
				background: rgba(255, 255, 255, 0.02);
			}

			/* 头像、名称、时间、设置按钮占一行 */
			.notification-header-row {
				display: flex;
				align-items: center;
				padding: 20px 28px 12px 65px;
				background: rgba(3, 5, 5, 0.05);
				backdrop-filter: blur(20px);
				border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
				gap: 18px;
				height: 100px;
			}

			.notification-avatar {
				width: 44px;
				height: 44px;
				border-radius: 50%;
				overflow: hidden;
				flex-shrink: 0;
				border: 0.5px solid rgba(255, 255, 255, 0.2);
				
				
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.notification-header-info {
				display: flex;
				align-items: center;
				flex: 1;
				justify-content: space-between;
			}
			
			.notification-header-info-r {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				justify-content: center;
				
			}

			.author-name {
				font-weight: 700;
				font-size: 17px;
				color: #FFFFFF;
				font-family: 'BioRhyme', serif;
				letter-spacing: 0.3px;
			}

			.notification-time {
				color: rgba(255, 255, 255, 0.55);
				font-size: 15px;
				font-weight: 400;
				font-family: 'BioRhyme', serif;
			}

			.more-options {
				background: none;
				border: none;
				color: rgba(255, 255, 255, 0.4);
				cursor: pointer;
				padding: 6px 6px 0  6px;
				border-radius: 50%;
				transition: all 0.2s ease;
				flex-shrink: 0;

				&:hover {
					background: rgba(255, 255, 255, 0.1);
					color: rgba(255, 255, 255, 0.7);
				}
			}

			.notification-content {
				padding: 30px 60px 30px 125px;

				.notification-text {
					font-size: 16px;
					line-height: 1.6;
					color: rgba(255, 255, 255, 0.95);
					font-weight: 400;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.2px;
				}

				.notification-image {
					border-radius: 10px;
					overflow: hidden;
					max-width: 320px;
					border: 0.5px solid rgba(255, 255, 255, 0.2);
					margin-top: 14px;

					img {
						width: 100%;
						height: auto;
						display: block;
					}
				}
			}
		}
	}

	/* 右侧边栏 - 调整为2.5比例 */
	.sidebar-right {
		width: 26%;
		padding: 20px 20px 48px 0;
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		overflow-y: auto;
		background: transparent;
	}

	.trending-section,
	.follow-section {
		background: rgba(255, 255, 255, 0.1);
		border: 0.25px solid #FFFFFF;
		border-radius: 15px;
		margin-bottom: 24px;
		overflow: hidden;
		backdrop-filter: blur(15.7px);

		h3 {
			font-size: 20px;
			font-weight: 700;
			padding: 20px 28px;
			margin: 0;
			color: #FFFFFF;
			font-family: 'BioRhyme', serif;
			letter-spacing: -0.3px;
		}
	}

	.trending-items {
		.trending-item {
			display: flex;
			align-items: flex-start;
			padding: 20px 28px;
			cursor: pointer;
			transition: all 0.2s ease;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);

			&:last-child {
				border-bottom: none;
			}

			&:hover {
				background: rgba(255, 255, 255, 0.05);
			}

			.trending-image {
				width: 49px;
				height: 49px;
				border-radius: 8px;
				overflow: hidden;
				margin-right: 12px;
				flex-shrink: 0;
				border: 1px solid rgba(255, 255, 255, 0.1);

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.trending-content {
				flex: 1;
				min-width: 0;

				.trending-category {
					color: rgba(255, 255, 255, 0.5);
					font-size: 13px;
					font-weight: 400;
					margin-bottom: 2px;
					font-family: 'BioRhyme', serif;
					line-height: 1.3;
				}

				.trending-title {
					font-weight: 700;
					font-size: 15px;
					color: #FFFFFF;
					margin-bottom: 2px;
					font-family: 'BioRhyme', serif;
					line-height: 1.3;
					letter-spacing: -0.2px;
				}

				.trending-meta {
					color: rgba(255, 255, 255, 0.5);
					font-size: 13px;
					margin-bottom: 0;
					font-weight: 400;
					font-family: 'BioRhyme', serif;
					line-height: 1.3;
					
					:deep(span) {
						color: #2FB9C5;
					}
				}
				
			}

			.more-options {
				background: none;
				border: none;
				color: rgba(255, 255, 255, 0.5);
				cursor: pointer;
				padding: 4px;
				border-radius: 50%;
				transition: all 0.2s ease;
				margin-top: 2px;
				flex-shrink: 0;

				&:hover {
					background: rgba(255, 255, 255, 0.1);
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}
	}

	.show-more-btn {
		width: 100%;
		background: none;
		border: none;
		color: #2FB9C5;
		padding: 20px 28px;
		cursor: pointer;
		font-size: 15px;
		font-weight: 400;
		transition: all 0.2s ease;
		font-family: 'BioRhyme', serif;
		text-align: left;
		border-top: 1px solid rgba(255, 255, 255, 0.08);

		&:hover {
			background: rgba(255, 255, 255, 0.05);
		}
	}

	.follow-suggestions {
		.follow-item {
			display: flex;
			align-items: center;
			padding: 18px 24px;

			.follow-avatar {
				width: 44px;
				height: 44px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 14px;
				border: 0.5px solid rgba(255, 255, 255, 0.2);

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.follow-info {
				flex: 1;

				.follow-name {
					font-weight: 700;
					font-size: 16px;
					color: #FFFFFF;
					margin-bottom: 3px;
					font-family: 'BioRhyme', serif;
					letter-spacing: 0.3px;
				}

				.follow-handle {
					color: rgba(255, 255, 255, 0.65);
					font-size: 14px;
					font-weight: 400;
					font-family: 'BioRhyme', serif;
				}
			}
			
			.follow-button {
			  width: 89px;
			  height: 35px;
			  background: $color-black;
			  border: none;
			  border-radius: $border-radius-xl;
			  color: $color-white;
			  font-family: $font-primary;
			  font-weight: $font-weight-medium;
			  font-size: $font-size-md;
			  line-height: 1.549;
			  cursor: pointer;
			  transition: $transition-normal;
			
			  &:hover {
			    background: lighten($color-black, 20%);
			    transform: translateY(-2px);
			  }
			  
			  &.following {
			  	background: rgba(255, 255, 255, 0.1);
			  	border-color: rgba(255, 255, 255, 0.3);
			  
			  	&:hover {
			  		background: rgba(244, 33, 46, 0.2);
			  		border-color: #f4212e;
			  		color: #f4212e;
			  	}
			  }
			}
			
			
		}
	}

	/* 模态框 */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		backdrop-filter: blur(7.5px);
	}

	.post-modal {
		background: rgba(255, 255, 255, 0.1);
		border: 0.25px solid #FFFFFF;
		border-radius: 10px;
		width: 90%;
		max-width: 600px;
		max-height: 90vh;
		overflow: hidden;
		backdrop-filter: blur(15.7px);

		.modal-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 16px 20px;
			border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);

			h3 {
				margin: 0;
				font-size: 20px;
				font-weight: 700;
				color: #FFFFFF;
				font-family: 'BioRhyme', serif;
			}

			.close-btn {
				background: none;
				border: none;
				color: rgba(255, 255, 255, 0.6);
				font-size: 24px;
				cursor: pointer;
				width: 32px;
				height: 32px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease;

				&:hover {
					background: rgba(255, 255, 255, 0.1);
					color: #FFFFFF;
				}
			}
		}

		.modal-content {
			padding: 20px;

			.post-textarea {
				width: 100%;
				min-height: 120px;
				background: transparent;
				border: none;
				color: #FFFFFF;
				font-size: 20px;
				resize: none;
				outline: none;
				font-family: 'BioRhyme', serif;

				&::placeholder {
					color: rgba(255, 255, 255, 0.5);
				}
			}

			.modal-actions {
				display: flex;
				justify-content: flex-end;
				gap: 12px;
				margin-top: 20px;

				.cancel-btn {
					background: none;
					border: 0.25px solid rgba(255, 255, 255, 0.3);
					color: #FFFFFF;
					padding: 8px 16px;
					border-radius: 20px;
					cursor: pointer;
					transition: all 0.2s ease;
					font-family: 'BioRhyme', serif;

					&:hover {
						background: rgba(255, 255, 255, 0.1);
					}
				}

				.submit-btn {
					background: rgba(255, 255, 255, 0.15);
					color: #FFFFFF;
					border: 0.25px solid rgba(255, 255, 255, 0.2);
					padding: 8px 16px;
					border-radius: 20px;
					font-weight: 600;
					cursor: pointer;
					transition: all 0.2s ease;
					backdrop-filter: blur(7.5px);
					font-family: 'BioRhyme', serif;

					&:hover {
						background: rgba(255, 255, 255, 0.25);
						transform: translateY(-1px);
					}
				}
			}
		}
	}

	/* 响应式设计 - 仅保留PC端必要的响应式 */
	@media (max-width: 1400px) {
		.sidebar-right {
			width: 280px;
		}
		
		.main-content {
			margin-right: 280px;
		}
	}

	@media (max-width: 1200px) {
		.sidebar-right {
			display: none;
		}

		.main-content {
			margin-right: 0;
			width: calc(100% - 25%);
		}
	}
</style>
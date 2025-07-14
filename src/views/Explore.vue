<template>
	<div class="explore-page">
		<!-- Masaigon风格背景动画 -->
		<!-- <MasaigonBackgroundaaa
			:animated="true"
			:intensity="0.7"
			theme="cyan"
		/> -->

		<!-- 左侧导航栏 -->
		<SidebarMenu :active-nav-item="activeNavItem" :user-name="userName" :user-email="userEmail"
			:user-avatar="userAvatar" @nav-click="handleNavClick" @post-click="handlePostClick"
			@user-profile-click="handleUserProfileClick" />

		<!-- 中间内容区域 -->
		<div class="main-content">
			<!-- 搜索框 -->
			<div class="search-container">
				<div class="search-box">
					<svg class="search-icon" width="26" height="26" viewBox="0 0 26 26" fill="none">
						<circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" />
						<path d="21 21L16.65 16.65" stroke="currentColor" stroke-width="2" />
					</svg>
					<input type="text" placeholder="Search" class="search-input" @focus="handleSearchFocus"
						@blur="handleSearchBlur" />
				</div>
			</div>

			<!-- 顶部标签 -->
			<div class="content-tabs" ref="tabsContainer">
				<div 
					v-for="(tab, index) in tabs" 
					:key="tab.id"
					:class="['tab', { active: activeTab === tab.id }]" 
					@click="handleTabClick(tab.id, index)"
					@mouseenter="handleTabHover(tab.id, index)"
					@mouseleave="handleTabLeave"
					@keydown="handleTabKeydown($event, tab.id, index)"
					:tabindex="0"
					:aria-selected="activeTab === tab.id"
					role="tab"
					:data-index="index"
				>
					<span class="tab-text">{{ tab.name }}</span>
					<div class="tab-indicator" :class="{ active: activeTab === tab.id }"></div>
					<div class="ripple-container" ref="rippleContainer"></div>
				</div>
			</div>

			<!-- 主要新闻内容 -->
			<div class="main-news">
				<!-- 视频区域 -->
				<div class="video-container">
					<div class="news-image">
						<!-- 加载状态占位符 -->
						<div v-if="!imageLoaded && !imageError" class="image-placeholder">
							<div class="loading-spinner"></div>
							<p>加载中...</p>
						</div>

						<!-- 错误状态占位符 -->
						<div v-if="imageError" class="image-error">
							<svg width="60" height="60" viewBox="0 0 24 24" fill="none">
								<path
									d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
									fill="rgba(255,255,255,0.5)" />
							</svg>
							<p>图片加载失败</p>
						</div>

						<img src="@/assets/sp.png" alt="新闻图片" @error="handleImageError" @load="handleImageLoad"
							:style="{ display: imageLoaded ? 'block' : 'none' }" />

						<!-- 播放按钮 -->
						<div class="play-button" v-if="imageLoaded" @click="handlePlayButtonClick">
							<svg width="80" height="80" viewBox="0 0 80 80" fill="none">
								<circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)" />
								<path d="M32 25L55 40L32 55V25Z" fill="#000" />
							</svg>
						</div>
					</div>
				</div>

				<!-- 新闻列表区域 -->
				<div class="news-list-section">
					<div class="news-header">
						<h2>Today's News</h2>
					</div>
					<div class="news-items">
						<div class="news-item"
							@click="handleNewsClick({ title: 'SCOTUS Upholds Trump\'s Federal Layoff Plans', meta: '2 hours ago · News · 41K posts' })">
							<div class="news-title">SCOTUS Upholds Trump's Federal Layoff Plans</div>
							<div class="news-bottom">
								<div class="news-avatars">
									<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像1" />
									<img src="@/assets/figma/avatar/avatar2.png" alt="头像2" />
									<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像3" />
								</div>
								<div class="news-meta">2 hours ago · News · 41K posts</div>
							</div>
						</div>

						<div class="news-item"
							@click="handleNewsClick({ title: 'Nikola Jokic Opts Out of Immediate Contract Extension with Nuggets', meta: 'Trending now · Sports · 2.2K posts' })">
							<div class="news-title">Nikola Jokic Opts Out of Immediate Contract Extension with Nuggets
							</div>
							<div class="news-bottom">
								<div class="news-avatars">
									<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像1" />
									<img src="@/assets/figma/avatar/avatar2.png" alt="头像2" />
									<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像3" />
								</div>
								<div class="news-meta">Trending now · Sports · 2.2K posts</div>
							</div>
						</div>

						<div class="news-item"
							@click="handleNewsClick({ title: 'New easier British citizenship route for Irish citizens launched', meta: 'Trending now · Sports · 2.2K posts' })">
							<div class="news-title">New easier British citizenship route for Irish citizens launched
							</div>
							<div class="news-bottom">
								<div class="news-avatars">
									<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像1" />
									<img src="@/assets/figma/avatar/avatar2.png" alt="头像2" />
									<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像3" />
								</div>
								<div class="news-meta">Trending now · Sports · 2.2K posts</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 趋势标签 -->
			<div class="trending-tags">
				<div class="trending-location">
					<div class="location-text">Trending in United Kingdom</div>
				</div>
				<div class="tag-item">
					<div class="tag-title" @click="handleTagClick('Misinformation')">#Misinformation</div>
				</div>
				<div class="trending-location">
					<div class="location-text">Trending in Medicine</div>
				</div>
				<div class="tag-item">
					<div class="tag-title" @click="handleTagClick('Change the Prescription')">#Change the Prescription
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
					<div class="trending-item">
						<div class="trending-image">
							<img src="@/assets/figma/avatar/avatar1.jpg" alt="Flamengo vs Bayern Munich" />
						</div>
						<div class="trending-content">
							<div class="trending-title">Flamengo vs Bayern Munich</div>
							<div class="trending-meta">42 minutes ago</div>
						</div>
						<button class="more-options">
							<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
								<circle cx="2" cy="2" r="1.5" fill="currentColor" />
								<circle cx="8" cy="2" r="1.5" fill="currentColor" />
								<circle cx="14" cy="2" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>

					<div class="trending-item">
						<div class="trending-content">
							<div class="trending-category">Entertainment · Trending</div>
							<div class="trending-title">The BBC</div>
							<div class="trending-meta">Trending with <span style="color: #2FB9C5;">Shakira</span>, <span
									style="color: #2FB9C5;">Helena</span></div>
							<div class="trending-meta">653K posts</div>
						</div>
						<button class="more-options">
							<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
								<circle cx="2" cy="2" r="1.5" fill="currentColor" />
								<circle cx="8" cy="2" r="1.5" fill="currentColor" />
								<circle cx="14" cy="2" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>

					<div class="trending-item">
						<div class="trending-content">
							<div class="trending-category">Love Island UK· Trending</div>
							<div class="trending-title">Glastonbury</div>
							<div class="trending-meta">Trending with <span style="color: #2FB9C5;">Lulu</span>, <span
									style="color: #2FB9C5;">Mick Hucknall</span></div>
							<div class="trending-meta">30.9K posts</div>
						</div>
						<button class="more-options">
							<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
								<circle cx="2" cy="2" r="1.5" fill="currentColor" />
								<circle cx="8" cy="2" r="1.5" fill="currentColor" />
								<circle cx="14" cy="2" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>

					<div class="trending-item">
						<div class="trending-content">
							<div class="trending-category">Entertainment · Trending</div>
							<div class="trending-title">#LoveIsland</div>
							<div class="trending-meta">26K posts</div>
						</div>
						<button class="more-options">
							<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
								<circle cx="2" cy="2" r="1.5" fill="currentColor" />
								<circle cx="8" cy="2" r="1.5" fill="currentColor" />
								<circle cx="14" cy="2" r="1.5" fill="currentColor" />
							</svg>
						</button>
					</div>

					<div class="trending-item">
						<div class="trending-content">
							<div class="trending-category">Entertainment · Trending</div>
							<div class="trending-title">Rod Stewart</div>
							<div class="trending-meta">26K posts</div>
						</div>
						<button class="more-options">
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
					<div class="follow-item">
						<div class="follow-avatar">
							<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像" />
						</div>
						<div class="follow-info">
							<div class="follow-name">Angela Rayner</div>
							<div class="follow-handle">@AngelaRayner</div>
						</div>
						<button class="follow-button">Follow</button>
					</div>

					<div class="follow-item">
						<div class="follow-avatar">
							<img src="@/assets/figma/avatar/avatar2.png" alt="头像" />
						</div>
						<div class="follow-info">
							<div class="follow-name">Franz von Holzhausen</div>
							<div class="follow-handle">@woodhaus2</div>
						</div>
						<button class="follow-button">Follow</button>
					</div>

					<div class="follow-item">
						<div class="follow-avatar">
							<img src="@/assets/figma/avatar/avatar1.jpg" alt="头像" />
						</div>
						<div class="follow-info">
							<div class="follow-name">Big Hims</div>
							<div class="follow-handle">@hiking skiing</div>
						</div>
						<button class="follow-button">Follow</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SidebarMenu from '@/components/SidebarMenu.vue'
	import avatar1 from '@/assets/figma/avatar/avatar1.jpg'
	import MasaigonBackground from '@/components/MasaigonBackground.vue'

	export default {
		name: 'Explore',
		components: {
			SidebarMenu,
			MasaigonBackground,
		},
		data() {
			return {
				activeNavItem: 'explore',
				userName: 'Polly',
				userEmail: 'pollyliu508@sina.com',
				userAvatar: avatar1,
				imageLoaded: false,
				imageError: false,
				// 新增标签相关数据
				activeTab: 'forYou',
				tabs: [
					{ id: 'forYou', name: 'For You' },
					{ id: 'trending', name: 'Trending Topics' },
					{ id: 'news', name: 'News' }
				],
				hoverTimeout: null,
				isTabTransitioning: false
			}
		},
		methods: {
			handleNavClick(navName) {
				this.activeNavItem = navName
				console.log('Navigation clicked:', navName)
				// 这里可以添加路由跳转逻辑
			},

			handlePostClick() {
				console.log('POST button clicked')
				// 这里可以添加发布帖子的逻辑
			},

			handleUserProfileClick() {
				console.log('User profile clicked')
				// 这里可以添加用户资料页面跳转逻辑
			},

			handleImageError(event) {
				console.log('图片加载失败:', event.target.src);
				this.imageError = true;
				this.imageLoaded = false;
			},

			handleImageLoad(event) {
				console.log('图片加载成功:', event.target.src);
				this.imageLoaded = true;
				this.imageError = false;
			},

			// 新增交互事件处理
			handleSearchFocus() {
				console.log('Search focused');
			},

			handleSearchBlur() {
				console.log('Search blurred');
			},

			handleTabClick(tabId, index) {
				if (this.isTabTransitioning) return;
				
				this.isTabTransitioning = true;
				this.activeTab = tabId;
				
				// 创建波纹效果
				this.createRippleEffect(event, index);
				
				// 添加点击反馈
				this.addClickFeedback(index);
				
				console.log('Tab clicked:', tabId);
				
				// 模拟内容切换延迟
				setTimeout(() => {
					this.isTabTransitioning = false;
					this.loadTabContent(tabId);
				}, 300);
			},

			handleTabHover(tabId, index) {
				if (this.activeTab === tabId) return;
				
				// 清除之前的悬停超时
				if (this.hoverTimeout) {
					clearTimeout(this.hoverTimeout);
				}
				
				// 添加悬停效果
				this.addHoverEffect(index);
				
				// 延迟显示预览指示器
				this.hoverTimeout = setTimeout(() => {
					this.showPreviewIndicator(index);
				}, 200);
			},

			handleTabLeave() {
				if (this.hoverTimeout) {
					clearTimeout(this.hoverTimeout);
				}
				this.hidePreviewIndicator();
			},

			handleTabKeydown(event, tabId, index) {
				switch (event.key) {
					case 'Enter':
					case ' ':
						event.preventDefault();
						this.handleTabClick(tabId, index);
						break;
					case 'ArrowLeft':
						event.preventDefault();
						this.navigateTab(index - 1);
						break;
					case 'ArrowRight':
						event.preventDefault();
						this.navigateTab(index + 1);
						break;
					case 'Home':
						event.preventDefault();
						this.navigateTab(0);
						break;
					case 'End':
						event.preventDefault();
						this.navigateTab(this.tabs.length - 1);
						break;
				}
			},

			navigateTab(targetIndex) {
				if (targetIndex < 0 || targetIndex >= this.tabs.length) return;
				
				const targetTab = this.tabs[targetIndex];
				this.handleTabClick(targetTab.id, targetIndex);
				
				// 聚焦到目标标签
				this.$nextTick(() => {
					const tabElement = this.$refs.tabsContainer.children[targetIndex];
					if (tabElement) {
						tabElement.focus();
					}
				});
			},

			createRippleEffect(event, index) {
				const tabElement = event.currentTarget;
				const rippleContainer = tabElement.querySelector('.ripple-container');
				
				if (!rippleContainer) return;
				
				// 清除之前的波纹
				rippleContainer.innerHTML = '';
				
				// 创建波纹元素
				const ripple = document.createElement('div');
				ripple.className = 'ripple';
				
				// 计算波纹位置和大小
				const rect = tabElement.getBoundingClientRect();
				const size = Math.max(rect.width, rect.height);
				const x = event.clientX - rect.left - size / 2;
				const y = event.clientY - rect.top - size / 2;
				
				ripple.style.width = ripple.style.height = size + 'px';
				ripple.style.left = x + 'px';
				ripple.style.top = y + 'px';
				
				rippleContainer.appendChild(ripple);
				
				// 移除波纹元素
				setTimeout(() => {
					if (ripple.parentNode) {
						ripple.parentNode.removeChild(ripple);
					}
				}, 600);
			},

			addClickFeedback(index) {
				const tabElement = this.$refs.tabsContainer.children[index];
				if (tabElement) {
					tabElement.classList.add('clicked');
					setTimeout(() => {
						tabElement.classList.remove('clicked');
					}, 150);
				}
			},

			addHoverEffect(index) {
				const tabElement = this.$refs.tabsContainer.children[index];
				if (tabElement) {
					tabElement.classList.add('hovered');
				}
			},

			showPreviewIndicator(index) {
				// 显示预览指示器逻辑
				console.log('Showing preview for tab:', index);
			},

			hidePreviewIndicator() {
				// 隐藏预览指示器
				const tabElements = this.$refs.tabsContainer.children;
				for (let element of tabElements) {
					element.classList.remove('hovered');
				}
			},

			loadTabContent(tabId) {
				// 根据标签ID加载不同内容
				switch (tabId) {
					case 'forYou':
						console.log('Loading For You content');
						break;
					case 'trending':
						console.log('Loading Trending Topics content');
						break;
					case 'news':
						console.log('Loading News content');
						break;
				}
			},

			handleNewsClick(newsItem) {
				console.log('News item clicked:', newsItem);
				// 这里可以添加新闻详情页面跳转逻辑
			},

			handlePlayButtonClick() {
				console.log('Play button clicked');
				// 这里可以添加视频播放逻辑
			},

			handleTagClick(tagName) {
				console.log('Tag clicked:', tagName);
				// 这里可以添加标签页面跳转逻辑
			},

			handleAvatarClick(avatarInfo) {
				console.log('Avatar clicked:', avatarInfo);
				// 这里可以添加用户资料页面跳转逻辑
			},

			handleResize() {
				// 窗口大小变化时的处理（移除指示器相关逻辑）
				console.log('Window resized');
			}
		},

		mounted() {
			// 移除初始化指示器位置的逻辑
			console.log('Explore page mounted');

			// 添加窗口大小变化监听
			window.addEventListener('resize', this.handleResize);
		},

		beforeUnmount() {
			// 清理事件监听
			window.removeEventListener('resize', this.handleResize);
			if (this.hoverTimeout) {
				clearTimeout(this.hoverTimeout);
			}
		}
	}
</script>

<style scoped lang="scss">
	/* 全局样式重置 */
	:global(body) {
		background: #000 !important;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}

	:global(html) {
		background: #000 !important;
	}

	.explore-page {
		display: flex;
		min-height: 100vh;
		background: #000;
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

	.search-container {
		padding: 20px 25px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		.search-box {
			position: relative;
			width: 100%;
			height: 50px;
			border: 1px solid #ffffff;
			border-radius: 63px;
			display: flex;
			align-items: center;
			padding: 0 20px;
			gap: 16px;
			background: rgba(255, 255, 255, 0.05);
			transition: all 0.3s ease;
			overflow: hidden;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
				transition: left 0.6s ease;
			}

			&:hover {
				border-color: #888888;
				background: rgba(255, 255, 255, 0.08);
				box-shadow: 0 0 20px rgba(136, 136, 136, 0.3);
				transform: translateY(-1px);
			}

			&:focus-within {
				border-color: #888888;
				background: rgba(255, 255, 255, 0.1);
				box-shadow: 0 0 25px rgba(136, 136, 136, 0.4);
				transform: translateY(-2px);
			}

			&:focus-within::before {
				left: 100%;
			}

			.search-input {
				flex: 1;
				background: transparent;
				border: none;
				color: #ffffff;
				font-family: 'BioRhyme', serif;
				font-size: 20px;
				font-weight: 400;
				line-height: 1.549;
				outline: none;
				transition: all 0.3s ease;

				&::placeholder {
					color: rgba(255, 255, 255, 0.6);
					transition: color 0.3s ease;
				}

				&:focus::placeholder {
					color: rgba(255, 255, 255, 0.4);
				}
			}

			.search-icon {
				width: 26px;
				height: 26px;
				color: rgba(255, 255, 255, 0.7);
				transition: all 0.3s ease;
			}

			&:hover .search-icon {
				color: #888888;
				transform: scale(1.1);
			}

			&:focus-within .search-icon {
				color: #888888;
				transform: scale(1.2);
			}
		}
	}

	.content-tabs {
		display: flex;
		padding: 0 25px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
		justify-content: center;
		
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 25px;
			width: 0;
			height: 2px;
			background: #888888;
			transition: all 0.3s ease;
		}

		.tab {
			font-family: 'BioRhyme', serif;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.549;
			color: rgba(255, 255, 255, 0.7);
			margin-right: 50px;
			cursor: pointer;
			transition: all 0.3s ease;
			padding: 16px 0;
			position: relative;
			overflow: hidden;
			border: none;
			background: transparent;
			outline: none;
			user-select: none;
			
			// 键盘导航焦点样式
			&:focus {
				border-radius: 4px;
			}

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(136, 136, 136, 0.1);
				transform: scaleX(0);
				transform-origin: left;
				transition: transform 0.3s ease;
			}

			&:hover {
				color: rgba(255, 255, 255, 0.9);
				transform: translateY(-2px);
			}

			&:hover::before {
				transform: scaleX(1);
			}

			// 悬停状态增强
			&.hovered {
				color: rgba(255, 255, 255, 0.95);
				transform: translateY(-1px);
				
				&::before {
					background: rgba(136, 136, 136, 0.15);
					transform: scaleX(1);
				}
				
				.tab-text {
					text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
				}
			}

			// 点击状态
			&.clicked {
				transform: translateY(1px) scale(0.98);
				
				&::before {
					background: rgba(136, 136, 136, 0.25);
					transform: scaleX(1);
				}
			}

			// 激活状态
			&.active {
				font-weight: 700;
				color: #ffffff;
				transform: translateY(-1px);
				border: none;
				&::before {
				}
				
				.tab-text {
					text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
					text-decoration: underline;
					text-decoration-color: #888888;
					text-decoration-thickness: 2px;
					text-underline-offset: 4px;
				}
				
				.tab-indicator {
					width: 100%;
					opacity: 1;
				}
				
			}

			// 过渡状态
			&.transitioning {
				pointer-events: none;
				
				&::before {
					animation: pulse-transition 0.3s ease;
				}
			}

			@keyframes pulse-transition {
				0% {
					background: rgba(136, 136, 136, 0.1);
				}
				50% {
					background: rgba(136, 136, 136, 0.3);
				}
				100% {
					background: rgba(136, 136, 136, 0.1);
				}
			}

			.tab-text {
				position: relative;
				z-index: 2;
				transition: all 0.3s ease;
				display: inline-block;
			}

			.tab-indicator {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 0;
				height: 2px;
				background: #888888;
				transition: all 0.3s ease;
				border-radius: 2px;
				z-index: 1;
				opacity: 0;
				display: none;
			}

			.ripple-container {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;
				z-index: 0;
				pointer-events: none;
			}

			.ripple {
				position: absolute;
				background: rgba(255, 255, 255, 0.3);
				border-radius: 50%;
				transform: scale(0);
				animation: ripple-animation 0.6s linear;
				z-index: 1;
			}

			@keyframes ripple-animation {
				0% {
					transform: scale(0);
					opacity: 0.8;
				}
				50% {
					opacity: 0.4;
				}
				100% {
					transform: scale(4);
					opacity: 0;
				}
			}

			// 无障碍支持
			&[aria-selected="true"] {
				.tab-text {
					font-weight: 700;
				}
			}

			// 禁用状态
			&.disabled {
				opacity: 0.5;
				cursor: not-allowed;
				pointer-events: none;
			}
		}

		// 动态指示器
		.active-indicator {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 3px;
			background: linear-gradient(90deg, #666666, #888888, #666666);
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			border-radius: 2px;
			z-index: 2;
			box-shadow: 0 0 10px rgba(136, 136, 136, 0.5);
			display: none;
			
			&::before {
				content: '';
				position: absolute;
				top: -1px;
				left: 0;
				width: 100%;
				height: 5px;
				background: linear-gradient(90deg, transparent, rgba(136, 136, 136, 0.3), transparent);
				border-radius: 2px;
				animation: glow-pulse 2s ease-in-out infinite;
			}
			
			@keyframes glow-pulse {
				0%, 100% {
					opacity: 0.5;
				}
				50% {
					opacity: 1;
				}
			}
		}

		// 响应式调整
		@media (max-width: 768px) {
			.tab {
				margin-right: 30px;
				font-size: 14px;
				padding: 12px 0;
			}
		}
	}

	.main-news {
		position: relative;
		margin: 0;
		border-radius: 0;

		.video-container {
			width: 100%;
			height: 350px;
			/* 调整视频高度 */
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;

			.news-image {
				width: 80%;
				height: 100%;
				overflow: hidden;
				position: relative;
				background: rgba(0, 0, 0, 0.8);
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 0;

				img {
					max-width: 100%;
					height: auto;
					object-fit: contain;
					display: block;
				}

				.play-button {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					cursor: pointer;
					transition: all 0.3s ease;
					z-index: 10;
					filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3));

					&:hover {
						transform: translate(-50%, -50%) scale(1.15);
						filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.4));
					}

					&:active {
						transform: translate(-50%, -50%) scale(1.05);
						filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.2));
					}

					svg {
						transition: all 0.3s ease;

						circle {
							transition: all 0.3s ease;
						}

						path {
							transition: all 0.3s ease;
						}
					}

					&:hover svg {
						circle {
							fill: rgba(255, 255, 255, 0.95);
						}

						path {
							fill: #888888;
							transform: scale(1.1);
						}
					}

					&:active svg {
						circle {
							fill: rgba(255, 255, 255, 0.85);
						}

						path {
							fill: #666666;
						}
					}

					&::before {
						content: '';
						position: absolute;
						top: 50%;
						left: 50%;
						width: 120px;
						height: 120px;
						background: rgba(136, 136, 136, 0.2);
						border-radius: 50%;
						transform: translate(-50%, -50%) scale(0);
						transition: transform 0.3s ease;
						z-index: -1;
					}

					&:hover::before {
						transform: translate(-50%, -50%) scale(1);
					}
				}
			}
		}

		.news-list-section {
			padding: 30px;
			background: rgba(0, 0, 0, 0.8);
			color: #FFFFFF;

			.news-header {
				margin-bottom: 25px;

				h2 {
					font-family: 'BioRhyme', serif;
					font-size: 28px;
					font-weight: 700;
					line-height: 1.3;
					color: #ffffff;
					margin: 0;
					letter-spacing: -0.5px;
				}
			}

			.news-items {
				.news-item {
					margin-bottom: 25px;
					padding: 15px;
					border-bottom: none;
					border-radius: 8px;
					transition: all 0.3s ease;
					cursor: pointer;
					position: relative;
					overflow: hidden;

					&:last-child {
						margin-bottom: 0;
					}

					&:hover {
						background: rgba(255, 255, 255, 0.05);
						transform: translateY(-2px);
						box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
					}

					&:active {
						transform: translateY(0);
						box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
					}

					&::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: linear-gradient(45deg, transparent 0%, rgba(136, 136, 136, 0.1) 50%, transparent 100%);
						opacity: 0;
						transition: opacity 0.3s ease;
						pointer-events: none;
					}

					&:hover::before {
						opacity: 1;
					}

					.news-title {
						font-family: 'BioRhyme', serif;
						font-size: 16px;
						font-weight: 600;
						line-height: 1.4;
						color: #ffffff;
						margin-bottom: 18px;
						letter-spacing: -0.2px;
						transition: color 0.3s ease;
						position: relative;
						z-index: 1;

						&:hover {
							color: #888888;
						}
					}

					.news-bottom {
						display: flex;
						align-items: center;
						gap: 10px;
						position: relative;
						z-index: 1;

						.news-avatars {
							display: flex;
							flex-shrink: 0;
							transition: transform 0.3s ease;

							&:hover {
								transform: scale(1.1);
							}

							img {
								width: 30px;
								height: 30px;
								border-radius: 50%;
								margin-right: -5px;
								border: 2px solid rgba(255, 255, 255, 0.3);
								object-fit: cover;
								transition: all 0.3s ease;
								cursor: pointer;

								&:hover {
									border-color: #888888;
									transform: scale(1.2);
									z-index: 10;
									position: relative;
								}
							}
						}

						.news-meta {
							font-family: 'BioRhyme', serif;
							font-size: 14px;
							font-weight: 400;
							line-height: 1.3;
							color: rgba(255, 255, 255, 0.7);
							margin-left: 5px;
							transition: color 0.3s ease;

							&:hover {
								color: rgba(255, 255, 255, 0.9);
							}
						}
					}
				}
			}
		}

		/* 加载状态占位符 */
		.image-placeholder {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: rgba(0, 0, 0, 0.8);
			color: #ffffff;
			font-family: 'BioRhyme', serif;
			font-size: 18px;
			font-weight: 400;
			line-height: 1.549;
			z-index: 1;
			animation: fadeIn 0.3s ease;

			@keyframes fadeIn {
				from {
					opacity: 0;
					transform: scale(0.9);
				}

				to {
					opacity: 1;
					transform: scale(1);
				}
			}

			p {
				animation: pulse 1.5s ease-in-out infinite;
			}

			@keyframes pulse {

				0%,
				100% {
					opacity: 1;
				}

				50% {
					opacity: 0.6;
				}
			}

			.loading-spinner {
				border: 4px solid rgba(255, 255, 255, 0.3);
				border-top: 4px solid #888888;
				border-radius: 50%;
				width: 40px;
				height: 40px;
				animation: spin 1s linear infinite;
				margin-bottom: 10px;
			}

			@keyframes spin {
				0% {
					transform: rotate(0deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}
		}

		/* 错误状态占位符 */
		.image-error {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: rgba(0, 0, 0, 0.8);
			color: #ffffff;
			font-family: 'BioRhyme', serif;
			font-size: 18px;
			font-weight: 400;
			line-height: 1.549;
			z-index: 1;
			animation: fadeIn 0.3s ease;

			svg {
				width: 60px;
				height: 60px;
				margin-bottom: 10px;
				animation: shake 0.5s ease-in-out;
			}

			@keyframes shake {

				0%,
				100% {
					transform: translateX(0);
				}

				25% {
					transform: translateX(-5px);
				}

				75% {
					transform: translateX(5px);
				}
			}

			p {
				animation: pulse 2s ease-in-out infinite;
			}
		}
	}

	.trending-tags {
		padding: 30px;
		background: rgba(0, 0, 0, 0.6);
		border-top: 1px solid rgba(255, 255, 255, 0.1);

		.trending-location {
			margin-bottom: 12px;
			transition: all 0.3s ease;
			cursor: pointer;

			&:hover {
				transform: translateX(5px);
			}

			.location-text {
				font-family: 'BioRhyme', serif;
				font-size: 15px;
				font-weight: 400;
				line-height: 1.4;
				color: rgba(255, 255, 255, 0.7);
				transition: color 0.3s ease;

				&:hover {
					color: rgba(255, 255, 255, 0.9);
				}
			}
		}

		.tag-item {
			margin-bottom: 25px;
			padding: 8px 0;
			border-radius: 4px;
			transition: all 0.3s ease;
			position: relative;
			overflow: hidden;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: -100%;
				width: 100%;
				height: 100%;
				background: linear-gradient(90deg, transparent, rgba(136, 136, 136, 0.1), transparent);
				transition: left 0.4s ease;
			}

			&:hover {
				background: rgba(255, 255, 255, 0.05);
				transform: translateX(10px);
			}

			&:hover::before {
				left: 100%;
			}

			.tag-title {
				font-family: 'BioRhyme', serif;
				font-size: 18px;
				font-weight: 700;
				line-height: 1.3;
				color: #ffffff;
				cursor: pointer;
				transition: all 0.3s ease;
				letter-spacing: -0.3px;
				position: relative;
				z-index: 1;

				&:hover {
					color: #888888;
					text-shadow: 0 0 10px rgba(136, 136, 136, 0.5);
					transform: scale(1.05);
				}

				&:active {
					transform: scale(0.98);
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
		color: #888888;
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
				background: #000000;
				border: none;
				border-radius: 50px;
				color: #FFFFFF;
				font-family: 'BioRhyme', serif;
				font-weight: 400;
				font-size: 16px;
				line-height: 1.549;
				cursor: pointer;
				transition: all 0.3s ease;

				&:hover {
					background: rgba(255, 255, 255, 0.1);
					transform: translateY(-2px);
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
</style>
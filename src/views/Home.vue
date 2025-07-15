<template>
	<div class="home-page">
		<!-- 背景装饰 SVG -->
		<!-- <div class="background-decorations">
      <img src="@/assets/figma/home-vector7.svg" class="vector-7" alt="装饰" />
      <img src="@/assets/figma/home-vector8.svg" class="vector-8" alt="装饰" />
      <div class="ellipse-3"></div>
      <div class="decoration-group">
        <img src="@/assets/figma/home-vector4.svg" class="vector-4" alt="装饰" />
        <img src="@/assets/figma/home-vector3.svg" class="vector-3" alt="装饰" />
        <img src="@/assets/figma/home-vector8-2.svg" class="vector-8-2" alt="装饰" />
        <img src="@/assets/figma/home-vector5.svg" class="vector-5" alt="装饰" />
        <img src="@/assets/figma/home-vector6.svg" class="vector-6" alt="装饰" />
        <img src="@/assets/figma/home-vector7-2.svg" class="vector-7-2" alt="装饰" />
        <div class="ellipse-2"></div>
      </div>
    </div> -->

		<!-- 左侧导航 -->
		<SidebarMenu :active-nav-item="activeNavItem" :user-name="userName" :user-email="userEmail"
			:user-avatar="userAvatar" @nav-click="handleNavClick" @post-click="handlePostClick"
			@user-profile-click="handleUserProfileClick" />

		<!-- 主要内容区域 -->
		<div class="main-container">
			<!-- 中间内容区域 -->
			<div class="content-area">
				<!-- 顶部标签 -->
				<div class="content-tabs">
					<div class="tab" :class="{ active: activeTab === 'For You' }" @click="switchTab('For You')">For You
					</div>
					<div class="tab" :class="{ active: activeTab === 'Following' }" @click="switchTab('Following')">
						Following</div>
				</div>

				<!-- 内容列表 -->
				<div class="content-list">
					<!-- 主要内容项 -->
					<div class="content-item">
						<div class="content-header">
							<div class="content-avatar">
								<img src="@/assets/figma/avatar/avatar2.png" alt="头像" />
							</div>
							<div class="content-title">Wednesday briefing: The truth about the myths and misinformation
								surrounding the Southport attack</div>
						</div>

						<div class="content-image">
							<img src="@/assets/figma/content-image1.jpg" alt="Southport attack memorial" />
						</div>

						<div class="image-caption">
							Two women and a young girl embrace near the floral tributes to the young victims of the
							knife attack in Southport. Photograph: Gary Calton/The Observer
						</div>

						<div class="content-text">
							In today's newsletter: Amid far-right disinformation and claims of a cover-up, Keir Starmer
							has ordered a public inquiry to address the issues and prevent future tragedies; but how did
							things escalate so fast?...
						</div>

						<div class="content-actions">
							<button class="learn-more-btn" @click="$router.push('/news')">Learn more</button>
						</div>
					</div>

					<!-- 第二个内容项 -->
					<div class="content-item">
						<div class="content-header">
							<div class="content-avatar">
								<img src="@/assets/home/76023148d5567a699c5e573da3f60372e88b642b.jpg" alt="头像" />
							</div>
							<div class="content-title">New easier British citizenship route for Irish citizens launched
							</div>
						</div>
						<div class="image-caption">
							Irish people living in the UK can soon benefit from this new British citizenship route.
						</div>
						<div class="content-image">
							<img src="@/assets/news/Bri/77aae119f9aee8756870d6f3ac6944ae4f4017c8.jpg"
								alt="Southport attack memorial" />
						</div>

						<div class="image-caption">
							From:Home Office, Northern Ireland Office and Seema Malhotra MPPublished3 July 2025
						</div>

						<div class="content-text">
							Irish people living in the UK will soon be able to apply for British citizenship under a new
							easier, cheaper route, strengthening the unique relationship between the two countries.  
						</div>

						<div class="content-actions">
							<button class="learn-more-btn">Learn more</button>
						</div>
					</div>
					<!-- 第3个内容项 -->
					<div class="content-item">
						<div class="content-header">
							<div class="content-avatar">
								<img src="@/assets/home/82ea13f9887e61fbf992dcec6ac987e799181855.jpg" alt="头像" />
							</div>
							<div class="content-title">It’s not woke for an army to look like the society it defends
							</div>
						</div>
						<div class="image-caption">
							The Prime Minister launches a new era for the NHS, bringing more easily accessible care
							closer to home.
						</div>
						<div class="content-image">
							<img src="@/assets/news/Inc/f377a5d85ed938b1014b3e5dac99eb9d0504b137.png"
								alt="Southport attack memorial" />
						</div>
						<div class="content-text">
							It’s been Anti-Woke Week in the UK defence world. Or at least in that part of the defence
							world that still thinks we’re living in the 1950s.
						</div>
						<div class="content-text">
							It started with a leak to the Telegraph of the British Army’s “Race Action Plan”, which
							noted that the Army “struggles to attract talent from ethnic minority backgrounds into the
							officer corps”...
						</div>

						<div class="content-actions">
							<button class="learn-more-btn">Learn more</button>
						</div>
					</div>
					<!-- 第4个内容项 -->
					<div class="content-item">
						<div class="content-header">
							<div class="content-avatar">
								<img src="@/assets/home/76023148d5567a699c5e573da3f60372e88b642b.jpg" alt="头像" />
							</div>
							<div class="content-title">Change the Prescription</div>
						</div>
						<div class="image-caption">
							Daily social media users are 1.7x more likely to be diagnosed with a mental health condition than those who never use it.
						</div>
						<div class="content-image">
							<img src="@/assets/news/Pub/d15c53febec397126f9b147510ddd8cc8ae9833e.jpg" alt="Southport attack memorial" />
						</div>

						<div class="image-caption">
							From: CSJ The centre for Social Jusrice published 27 Jan 2025
						</div>

						<div class="content-text">
							Change the Prescription explores what has driven the recent rise in the mental ill-health of
							our nation. It contends that the prevailing medical model often fails to address the core
							issue and may not offer the most suitable response. Change the Prescription advocates for a
							new approach to tackle the root cause of distress...
						</div>

						<div class="content-actions">
							<button class="learn-more-btn">Learn more</button>
						</div>
					</div>
				</div>
			</div>

			<!-- 右侧边栏 -->
			<div class="sidebar-right">
				<!-- 搜索框 -->
				<div class="search-section">
					<div class="search-container">
						<svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M19 19L13 13M15 8A7 7 0 1 1 1 8A7 7 0 0 1 15 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<input type="text" class="search-input" placeholder="Search" v-model="searchQuery"
							@input="handleSearch" />
					</div>
				</div>

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

						<!-- 额外的trending项目 - 动态显示 -->
						<transition-group name="fade" tag="div" v-if="showMoreTrending">
							<div class="trending-item" v-for="(item, index) in additionalTrendingItems"
								:key="'trending-' + index">
								<div class="trending-content">
									<div class="trending-category">{{ item.category }}</div>
									<div class="trending-title">{{ item.title }}</div>
									<div class="trending-meta" v-if="item.subtitle" v-html="formatTrendingMeta(item.subtitle)"></div>
									<div class="trending-meta">{{ item.posts }}</div>
								</div>
								<button class="more-options">
									<svg width="16" height="4" viewBox="0 0 16 4" fill="none">
										<circle cx="2" cy="2" r="1.5" fill="currentColor" />
										<circle cx="8" cy="2" r="1.5" fill="currentColor" />
										<circle cx="14" cy="2" r="1.5" fill="currentColor" />
									</svg>
								</button>
							</div>
						</transition-group>
					</div>
					<button class="show-more-btn" @click="toggleShowMoreTrending">
						{{ showMoreTrending ? 'Show less' : 'Show More' }}
					</button>
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

						<!-- 额外的关注推荐 - 动态显示 -->
						<transition-group name="fade" tag="div" v-if="showMoreFollowing">
							<div class="follow-item" v-for="(item, index) in suggestedUsers"
								:key="'follow-' + index">
								<div class="follow-avatar">
									<img :src="item.avatar" :alt="item.name" />
								</div>
								<div class="follow-info">
									<div class="follow-name">{{ item.name }}</div>
									<div class="follow-handle">{{ item.handle }}</div>
								</div>
								<button class="follow-button" @click="toggleFollow(item)"
									:class="{ following: item.isFollowing }">
									{{ item.isFollowing ? 'Following' : 'Follow' }}
								</button>
							</div>
						</transition-group>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import SidebarMenu from '@/components/SidebarMenu.vue'
	import avatar1 from '@/assets/figma/avatar/avatar1.jpg'
	import userAvatar1 from '@/assets/right/ff5df8a387941532dfba1a476259cb1f58b083c6.jpg'
	import userAvatar2 from '@/assets/right/e11d8650ead4662434056954faae2c4bbddba503.jpg'
	import userAvatar3 from '@/assets/right/1ce0ca3e3b6eb048fe749c4d1b8594eac7ba5b7b.jpg'

	export default {
		name: 'Home',
		components: {
			SidebarMenu
		},
		data() {
			return {
				activeTab: 'For You',
				activeNavItem: 'home',
				userName: 'Polly',
				userEmail: 'pollyliu508@sina.com',
				userAvatar: avatar1,
				showMoreTrending: false,
				showMoreFollowing: false,
				additionalTrendingItems: [{
						category: 'Sports · Trending',
						title: 'Premier League',
						subtitle: 'Trending with Manchester United, Liverpool',
						posts: '145K posts'
					},
					{
						category: 'Technology · Trending',
						title: 'ChatGPT',
						subtitle: 'Trending with OpenAI, AI',
						posts: '89K posts'
					},
					{
						category: 'Entertainment · Trending',
						title: 'Taylor Swift',
						subtitle: 'Trending with Eras Tour, Music',
						posts: '234K posts'
					}
				],
				additionalFollowingItems: [{
						name: 'Tech Insider',
						handle: '@techinsider',
						avatar: '@/assets/figma/follow-avatar1.png'
					},
					{
						name: 'BBC News',
						handle: '@bbcnews',
						avatar: '@/assets/figma/follow-avatar2.png'
					},
					{
						name: 'National Geographic',
						handle: '@natgeo',
						avatar: '@/assets/figma/follow-avatar3.png'
					}
				],
				searchQuery: '',
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
				],
				trendingTopics: [{
						id: 1,
						title: 'Flamengo vs Bayern Munich',
						meta: '42 minutes ago',
						category: '',
						image: true
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
						posts: '653K posts'
					},
					{
						id: 4,
						title: '#LoveIsland',
						meta: 'Trending with Shakira, Helena',
						category: 'Love Island UK· Trending',
						posts: '30.9K posts'
					},
					{
						id: 5,
						title: 'Rod Stewart',
						meta: 'Trending with Lulu, Mick Hucknall',
						category: 'Entertainment · Trending',
						posts: '26K posts'
					}
				]
			}
		},
		methods: {
			switchTab(tab) {
				this.activeTab = tab;
			},
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
			toggleShowMoreTrending() {
				this.showMoreTrending = !this.showMoreTrending;
			},
			toggleShowMoreFollowing() {
				this.showMoreFollowing = !this.showMoreFollowing;
			},
			handleSearch() {
				console.log('搜索内容:', this.searchQuery);
				// 这里可以添加搜索逻辑
			},
			toggleFollow(user) {
				user.isFollowing = !user.isFollowing
			},
			selectTrend(trend) {
				console.log('Selected trend:', trend);
				// 这里可以添加点击趋势项的逻辑，例如跳转到相关帖子列表
			},
			showTrendOptions(trend) {
				console.log('Trend options for:', trend);
				// 这里可以添加显示趋势选项的逻辑
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

<style lang="scss" scoped>
	@import '@/styles/variables.scss';

	.home-page {
		position: relative;
		width: 100vw;
		height: 100vh;
		// background: transparent;
		overflow: hidden;
		display: flex;
	}

	.background-decorations {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;

		.vector-7 {
			position: absolute;
			top: 2231px;
			left: -754px;
			width: 2166.21px;
			height: 848.71px;
		}

		.vector-8 {
			position: absolute;
			top: 1422.02px;
			left: -873px;
			width: 2806.5px;
			height: 836.48px;
		}

		.ellipse-3 {
			position: absolute;
			top: 2535px;
			left: -264px;
			width: 2480px;
			height: 1249px;
			background: linear-gradient(180deg, #02D8E5 0%, rgba(165, 98, 154, 0.9) 42.67%, rgba(63, 37, 59, 0.28) 100%);
			border-radius: 50%;
			box-shadow: 84px 33px 4px 0px rgba(165, 98, 154, 0.4), 94px -49px 4px 0px rgba(165, 98, 154, 0.1);
		}

		.decoration-group {
			position: absolute;
			top: -35px;
			left: -634px;
			width: 3553.5px;
			height: 2702px;

			.vector-4 {
				position: absolute;
				top: 107.27px;
				left: 1097.5px;
				width: 1647px;
				height: 367.86px;
				filter: drop-shadow(76px -32px 9.1px rgba(165, 98, 154, 0.31));
			}

			.vector-3 {
				position: absolute;
				top: 15.18px;
				left: 474.99px;
				width: 2142.52px;
				height: 367.86px;
				filter: drop-shadow(76px -32px 9.1px rgba(165, 98, 154, 0.31));
			}

			.vector-8-2 {
				position: absolute;
				top: 893.76px;
				left: 0px;
				width: 3101.04px;
				height: 1808.24px;
			}

			.vector-5 {
				position: absolute;
				top: 0px;
				left: 1423.5px;
				width: 1150px;
				height: 162.37px;
				filter: blur(43.7px);
			}

			.vector-6 {
				position: absolute;
				top: 658.57px;
				left: 1234.04px;
				width: 1333.45px;
				height: 491.52px;
			}

			.vector-7-2 {
				position: absolute;
				top: 776.2px;
				left: 1681.5px;
				width: 1872px;
				height: 690.18px;
			}

			.ellipse-2 {
				position: absolute;
				top: 815.67px;
				left: 120.5px;
				width: 788px;
				height: 401.76px;
				background: linear-gradient(180deg, #02D8E5 0%, rgba(165, 98, 154, 0.9) 42.67%, rgba(63, 37, 59, 0.28) 100%);
				border-radius: 50%;
				box-shadow: 84px 33px 4px 0px rgba(165, 98, 154, 0.4), 94px -49px 4px 0px rgba(165, 98, 154, 0.1);
			}
		}
	}

	.main-container {
		position: relative;
		z-index: 2;
		width: 100%;
		height: 100%;
		display: flex;
	}

	.content-area {
		flex: 1;
		margin-left: 27%;
		margin-right: 27%;
		width: 48%;
		height: 100%;
		max-width: none;
		padding-left: 0px;
		overflow-y: auto;
		overflow-x: hidden;
		scrollbar-width: none;
		/* Firefox */
		-ms-overflow-style: none;
		/* IE and Edge */
		scroll-behavior: smooth;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border: 0.25px solid rgba(255, 255, 255, 0.3);
		border-radius: 15px;
		min-height: 100vh;
		position: relative;
		border-right: 1.7px solid rgba(204, 204, 204, 0.3);
		border-left: 1.7px solid rgba(204, 204, 204, 0.3);

		/* 隐藏 WebKit 滚动条 */
		&::-webkit-scrollbar {
			display: none;
			width: 0;
			height: 0;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: transparent;
		}

		.content-tabs {
			display: flex;
			height: 49px;
			border-bottom: 1px solid $color-white;
			position: relative;

			.tab {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				background: $bg-glass;
				border: 1px solid $color-white;
				backdrop-filter: $blur-lg;
				color: $color-white;
				font-family: $font-primary;
				font-weight: $font-weight-medium;
				font-size: $font-size-lg;
				line-height: 1.549;
				cursor: pointer;
				transition: $transition-normal;
				position: relative;

				&:first-child {
					border-top-left-radius: $border-radius-lg;
				}

				&:last-child {
					border-top-right-radius: $border-radius-lg;
				}

				&.active {
					background: lighten($bg-glass, 5%);

					// 添加下划线 - 直接使用text-decoration
					text-decoration: underline;
					text-decoration-color: $color-white;
					text-decoration-thickness: 2px;
					text-underline-offset: 3px;
				}

				&:hover {
					background: lighten($bg-glass, 10%);
				}
			}
		}

		.content-list {

			overflow-y: auto;
			overflow-x: hidden;
			scrollbar-width: none;
			/* Firefox */
			-ms-overflow-style: none;
			/* IE and Edge */
			scroll-behavior: smooth;
			// max-height: calc(100vh - 200px);

			/* 隐藏 WebKit 滚动条 */
			&::-webkit-scrollbar {
				display: none;
				width: 0;
				height: 0;
			}

			&::-webkit-scrollbar-track {
				background: transparent;
			}

			&::-webkit-scrollbar-thumb {
				background: transparent;
			}

			.content-item {
				margin-bottom: 32px;
				padding: 40px 60px 40px 40px;
				background: transparent;
				border: none;
				border-bottom: 1px solid #eee;
				backdrop-filter: none;

				.content-header {
					display: flex;
					align-items: flex-start;
					gap: 16px;
					margin-bottom: 16px;

					.content-avatar {
						width: 49px;
						height: 49px;
						border-radius: 50%;
						overflow: hidden;
						flex-shrink: 0;

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.content-title {
						flex: 1;
						font-family: $font-primary;
						font-weight: $font-weight-bold;
						font-size: 28px;
						line-height: 1.3;
						color: $color-white;
						padding-left: 20px;
						padding-right: 85px;
					}
				}

				.content-subtitle {
					font-family: $font-primary;
					font-weight: $font-weight-medium;
					font-size: $font-size-md;
					line-height: 1.5;
					color: $color-white;
					opacity: 0.85;
					margin-bottom: 16px;
				}

				.content-image {
					margin-bottom: 12px;
					border-radius: 12px;
					overflow: visible;
					padding-left: 85px;
					background: transparent;

					img {
						width: 70%;
						height: auto;
						object-fit: cover;
						border-radius: 12px;
					}
				}

				.image-caption {
					font-family: $font-primary;
					font-weight: $font-weight-medium;
					font-size: 13px;
					line-height: 1.4;
					color: $color-white;
					opacity: 0.6;
					margin-bottom: 20px;
					font-style: normal;
					padding-left: 85px;
					padding-right: 85px;
				}

				.content-text {
					font-family: $font-primary;
					font-weight: $font-weight-medium;
					font-size: $font-size-md;
					line-height: 1.6;
					color: $color-white;
					opacity: 0.9;
					margin-bottom: 20px;
					padding-left: 85px;
					padding-right: 85px;
				}

				.content-actions {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding-left: 85px;
					padding-right: 85px;

					.learn-more-btn {
						text-align: left;
						padding: 5px 20px;
						background: #2FB9C5;
						border: none;
						border-radius: 6px;
						color: $color-white;
						font-family: $font-primary;
						font-weight: $font-weight-bold;
						font-size: $font-size-md;
						line-height: 1.549;
						cursor: pointer;
						transition: $transition-normal;
						width: 100%;

						&:hover {
							background: lighten(#2FB9C5, 10%);
							transform: translateY(-2px);
						}
					}
				}
			}
		}
	}

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

	.search-section {
		margin-bottom: 24px;
		
		.search-container {
			position: relative;
			background: rgba(255, 255, 255, 0.1);
			border: 0.25px solid #FFFFFF;
			border-radius: 25px;
			padding: 12px 20px;
			display: flex;
			align-items: center;
			backdrop-filter: blur(15.7px);
			transition: all 0.2s ease;
			
			&:focus-within {
				background: rgba(255, 255, 255, 0.15);
				border-color: #2FB9C5;
			}
			
			.search-icon {
				color: rgba(255, 255, 255, 0.6);
				margin-right: 12px;
				flex-shrink: 0;
			}
			
			.search-input {
				flex: 1;
				background: none;
				border: none;
				outline: none;
				color: #FFFFFF;
				font-size: 16px;
				font-family: 'BioRhyme', serif;
				
				&::placeholder {
					color: rgba(255, 255, 255, 0.6);
				}
			}
		}
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
				background: #000;
				border: none;
				border-radius: 20px;
				color: #FFFFFF;
				font-family: 'BioRhyme', serif;
				font-weight: 600;
				font-size: 14px;
				cursor: pointer;
				transition: all 0.2s ease;
			
				&:hover {
					background: #333;
					transform: translateY(-2px);
				}
				
				&.following {
					background: rgba(255, 255, 255, 0.1);
					border: 1px solid rgba(255, 255, 255, 0.3);
				
					&:hover {
						background: rgba(244, 33, 46, 0.2);
						border-color: #f4212e;
						color: #f4212e;
					}
				}
			}
		}
	}

	/* 过渡动画 */
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
		transform: translateY(-10px);
	}

	.fade-enter-to,
	.fade-leave-from {
		opacity: 1;
		transform: translateY(0);
	}

	/* 确保不添加移动端样式 */
	@media (min-width: 1024px) {
		.home-page {
			.main-container {
				.content-area {
					/* 桌面端特定样式 */
				}

				.sidebar-right {
					/* 桌面端特定样式 */
				}
			}
		}
	}
</style>
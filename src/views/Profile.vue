<template>
	<div class="profile-page">
		<!-- 背景渐变 -->
		<div class="background-gradient"></div>

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
			<!-- 顶部标题栏 -->
			<div class="profile-title-bar">
				<h1 class="profile-page-title">{{ profileData.name }}</h1>
				<div class="profile-posts-count">{{ profileData.postsCount }} posts</div>
			</div>

			<!-- 用户封面和头像 -->
			<div class="profile-header">
				<div class="cover-image">
					<img src="@/assets/profile/bg.png" alt="Cover" />
					<!-- 左上角的 colleage.jpg 图片 -->
					<div class="colleage-overlay">
						<img src="@/assets/profile/colleage.jpg" alt="College" />
					</div>
				</div>
				<div class="profile-info-section">
					<div class="profile-avatar">
						<img src="@/assets/profile/my.jpg" alt="Profile Avatar" />
					</div>
					<div class="profile-basic-info">
						<div class="profile-name-section">
							<h1 class="profile-name">{{ profileData.name }}</h1>
						</div>
						<button class="edit-profile-btn">Edit Profile</button>
					</div>
				</div>
			</div>

			<!-- 用户详细信息 -->
			<div class="profile-details">
				<div class="profile-main-info">
					
					<div class="contact-info">
						<div class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M2.5 3h11c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-11c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5z" stroke="currentColor" stroke-width="1.5" fill="none"/>
								<path d="m2 4 6 4 6-4" stroke="currentColor" stroke-width="1.5" fill="none"/>
							</svg>
							<span>{{ profileData.email }}</span>
						</div>
						<div class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M15.5 11.5c0 .828-.672 1.5-1.5 1.5-6.627 0-12-5.373-12-12 0-.828.672-1.5 1.5-1.5h3c.828 0 1.5.672 1.5 1.5v1.5c0 .828-.672 1.5-1.5 1.5h-1c0 4.418 3.582 8 8 8v-1c0-.828.672-1.5 1.5-1.5h1.5c.828 0 1.5.672 1.5 1.5v3z" stroke="currentColor" stroke-width="1.5" fill="none"/>
							</svg>
							<span>{{ profileData.phone }}</span>
						</div>
						<div class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M8 2C6.343 2 5 3.343 5 5c0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" stroke="currentColor" stroke-width="1.5" fill="none"/>
								<circle cx="8" cy="5" r="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
							</svg>
							<span>{{ profileData.location }}</span>
						</div>
					</div>
				</div>

				<div class="profile-tabs">
					<div class="tab-buttons">
						<button 
							:class="['tab-button', { active: activeTab === 'introduction' }]" 
							@click="activeTab = 'introduction'"
						>
							Introduction
						</button>
						<button 
							:class="['tab-button', { active: activeTab === 'collaborator' }]" 
							@click="activeTab = 'collaborator'"
						>
							Collaborator
						</button>
					</div>
				</div>

				<!-- Introduction Tab -->
				<div v-if="activeTab === 'introduction'" class="tab-content">
					<div class="introduction-section">
						<h3>Description</h3>
						<ul class="description-list">
							<li v-for="(item, index) in profileData.description" :key="index">
								{{ item }}
							</li>
						</ul>
					</div>

					<div class="education-section">
						<h3>Education</h3>
						<div class="education-item" v-for="(edu, index) in profileData.education" :key="index">
							<div class="education-header">
								<span class="degree">{{ edu.degree }}</span>
								<span class="period">({{ edu.period }})</span>
							</div>
							<div class="coursework">
								<span class="coursework-label">- Coursework:</span>
								<span class="coursework-content">{{ edu.coursework }}</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Collaborator Tab -->
				<div v-if="activeTab === 'collaborator'" class="tab-content">
					<div class="collaborator-section">
						<div class="collaborator-item">
							<h3>Mr. He Minjun (@ ZBJ Network Technology Co., Ltd.)</h3>
							<ul class="collaborator-contributions">
								<li>Developed the content and sentiment analysis components of the system, providing core code to support the tracking of information drift across texts.</li>
							</ul>
						</div>
						
						<div class="collaborator-item">
							<h3>Mi Manchi</h3>
							<ul class="collaborator-contributions">
								<li>Implemented a sentence embedding-based method to quantify the influence of individual words on overall sentence meaning by analyzing changes in vector representations when words were removed.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 右侧推荐区域 -->
		<div class="sidebar-right">
			<!-- 搜索框 -->
			<div class="search-section">
				<div class="search-container">
					<svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M19 19L13 13M15 8A7 7 0 1 1 1 8A7 7 0 0 1 15 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<input 
						type="text" 
						placeholder="Search" 
						class="search-input"
						v-model="searchQuery"
						@input="handleSearch"
					/>
				</div>
			</div>

			<!-- What's happening -->
			<div class="trending-section">
				<h3>What's happening</h3>
				<div class="trending-items">
					<div v-for="trend in trendingTopics" :key="trend.id" class="trending-item"
						@click="selectTrend(trend)">
						<div class="trending-image" v-if="trend.image">
							<img :src="trend.image" :alt="trend.title" />
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
	</div>
</template>

<script>
import SidebarMenu from '@/components/SidebarMenu.vue'
import avatar1 from '@/assets/figma/avatar/avatar1.jpg'

export default {
	name: 'Profile',
	components: {
		SidebarMenu
	},
	data() {
		return {
			activeNavItem: 'profile',
			userName: 'Polly',
			userEmail: 'pollyliu508@sina.com',
			userAvatar: avatar1,
			activeTab: 'introduction',
			profileData: {
				name: 'Peipei Liu',
				postsCount: '0',
				email: 'pollyliu508@sina.com',
				phone: '+44 7443330963',
				location: 'Ah18341ah',
				description: [
					'Peipei Liu is a designer focused on information interaction, with expertise in system and UX design. I explore how users perceive and engage with digital content, and build interfaces that promote clarity, trust, and cognitive balance.'
				],
				education: [
					{
						degree: 'MDes, Design Futures, Royal College of Art, London',
						period: 'Sep 2024 - Oct 2025',
						coursework: 'Complex Systems; Interdisciplinary Research Methodologies; Envisioning Futures; Design Innovation (Models & Lifecycle, Venture Creation)'
					},
					{
						degree: 'MA, Innovative Experience, Central Academy of Fine Arts, Beijing',
						period: 'Sep 2020 - Jun 2024',
						coursework: 'Cross-disciplinary Innovation; Systems Thinking; Design Culture; Digital Future Community Scenarios; Material & Craft Principles'
					}
				]
			},
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
					posts: '653K posts',
				},
				{
					id: 4,
					title: '#LoveIsland',
					meta: 'Trending with Shakira, Helena',
					category: 'Love Island UK· Trending',
					posts: '30.9K posts',
				},
				{
					id: 5,
					title: 'Rod Stewart',
					meta: 'Trending with Lulu, Mick Hucknall',
					category: 'Entertainment · Trending',
					posts: '26K posts',
				}
			],
			suggestedUsers: [{
					id: 1,
					name: 'Angela Rayner',
					handle: '@AngelaRayner',
					avatar: avatar1,
					isFollowing: false
				},
				{
					id: 2,
					name: 'Big Hims',
					handle: '@BigHims',
					avatar: avatar1,
					isFollowing: false
				},
				{
					id: 3,
					name: 'Franz von Holzhausen',
					handle: '@FranzVH',
					avatar: avatar1,
					isFollowing: false
				}
			],
			searchQuery: ''
		}
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
		selectTrend(trend) {
			console.log('Selected trend:', trend)
		},
		showTrendOptions(trend) {
			console.log('Show trend options for:', trend)
		},
		toggleFollow(user) {
			user.isFollowing = !user.isFollowing
		},
		formatTrendingMeta(meta) {
			if (meta.includes('Trending with')) {
				const [text, ...names] = meta.split('Trending with');
				return `${text}Trending with <span style="color: #2FB9C5;">${names.join(' ')}</span>`;
			}
			return meta;
		},
		handleSearch() {
			console.log('Search query:', this.searchQuery);
			// In a real application, you would filter trendingTopics or suggestedUsers
			// based on this.searchQuery. For now, we'll just log it.
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

	.profile-page {
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

	/* 主内容区域 */
	.main-content {
		flex: 1;
		margin-left: 27%;
		margin-right: 27%;
		width: 48%;
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(15.7px);
		border-radius: 15px;
		min-height: 100vh;
		position: relative;
		overflow: hidden;
	}

	/* 顶部标题栏 */
	.profile-title-bar {
		padding: 16px 24px;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(0, 0, 0, 0.3);

		.profile-page-title {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin: 0;
			font-family: 'BioRhyme', serif;
		}

		.profile-posts-count {
			font-size: 13px;
			color: rgba(255, 255, 255, 0.6);
			font-family: 'BioRhyme', serif;
		}
	}

	/* 用户头部信息 */
	.profile-header {
		position: relative;
		
		.cover-image {
			height: 200px;
			width: 100%;
			overflow: hidden;
			border-radius: 15px 15px 0 0;
			position: relative;
			
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			
			.colleage-overlay {
				position: absolute;
				top: 2px;
				left: 2px;
				width: 120px;
				height: 60px;
				border-radius: 8px;
				overflow: hidden;
				border: 2px solid rgba(255, 255, 255, 0.8);
				box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
				z-index: 2;
				
				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}
		
		.profile-info-section {
			padding: 0 24px;
			position: relative;
			
			.profile-avatar {
				position: absolute;
				top: -80px;
				left: 24px;
				width: 120px;
				height: 120px;
				border-radius: 50%;
				overflow: hidden;
				border: 4px solid #000;
				background: #000;
				
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			
			.profile-basic-info {
				padding-top: 50px;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				
				.profile-name-section {
					.profile-name {
						font-size: 24px;
						font-weight: 700;
						color: #FFFFFF;
						margin: 0 0 4px 0;
						font-family: 'BioRhyme', serif;
					}
					
					.posts-count {
						font-size: 14px;
						color: rgba(255, 255, 255, 0.6);
						font-family: 'BioRhyme', serif;
					}
				}
				
				.edit-profile-btn {
					background: #000;
					color: #FFFFFF;
					border: 1px solid rgba(255, 255, 255, 0.3);
					border-radius: 6px;
					padding: 8px 16px;
					font-size: 14px;
					font-weight: 600;
					cursor: pointer;
					transition: all 0.2s ease;
					font-family: 'BioRhyme', serif;
					
					&:hover {
						background: rgba(255, 255, 255, 0.1);
					}
				}
			}
		}
	}

	/* 用户详细信息 */
	.profile-details {
		padding: 24px;
		
		.profile-main-info {
			margin-bottom: 24px;
			
			.profile-display-name {
				font-size: 20px;
				font-weight: 700;
				color: #FFFFFF;
				margin: 0 0 16px 0;
				font-family: 'BioRhyme', serif;
			}
			
			.contact-info {
				display: flex;
				flex-direction: column;
				gap: 8px;
				
				.contact-item {
					display: flex;
					align-items: center;
					gap: 8px;
					font-size: 14px;
					color: rgba(255, 255, 255, 0.8);
					font-family: 'BioRhyme', serif;
					
					svg {
						color: rgba(255, 255, 255, 0.6);
						flex-shrink: 0;
					}
				}
			}
		}
		
		.profile-tabs {
			margin-bottom: 24px;
			
			.tab-buttons {
				display: flex;
				gap: 32px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				
				.tab-button {
					background: none;
					border: none;
					color: rgba(255, 255, 255, 0.6);
					font-size: 16px;
					font-weight: 600;
					cursor: pointer;
					padding: 0 0 12px 0;
					border-bottom: 2px solid transparent;
					transition: all 0.2s ease;
					font-family: 'BioRhyme', serif;
					
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
		
		.tab-content {
			.introduction-section {
				margin-bottom: 32px;
				
				h3 {
					font-size: 18px;
					font-weight: 700;
					color: #FFFFFF;
					margin: 0 0 16px 0;
					font-family: 'BioRhyme', serif;
				}
				
				.description-list {
					margin: 0;
					padding-left: 20px;
					
					li {
						font-size: 14px;
						color: rgba(255, 255, 255, 0.9);
						line-height: 1.6;
						margin-bottom: 8px;
						font-family: 'BioRhyme', serif;
					}
				}
			}
			
			.education-section {
				h3 {
					font-size: 18px;
					font-weight: 700;
					color: #FFFFFF;
					margin: 0 0 16px 0;
					font-family: 'BioRhyme', serif;
				}
				
				.education-item {
					margin-bottom: 20px;
					
					&:last-child {
						margin-bottom: 0;
					}
					
					.education-header {
						margin-bottom: 8px;
						
						.degree {
							font-size: 14px;
							font-weight: 600;
							color: #FFFFFF;
							font-family: 'BioRhyme', serif;
						}
						
						.period {
							font-size: 14px;
							color: rgba(255, 255, 255, 0.7);
							font-family: 'BioRhyme', serif;
							margin-left: 4px;
						}
					}
					
					.coursework {
						padding-left: 20px;
						
						.coursework-label {
							font-size: 13px;
							color: rgba(255, 255, 255, 0.8);
							font-family: 'BioRhyme', serif;
						}
						
						.coursework-content {
							font-size: 13px;
							color: rgba(255, 255, 255, 0.9);
							line-height: 1.5;
							font-family: 'BioRhyme', serif;
							margin-left: 4px;
						}
					}
				}
			}
			
			.collaborator-section {
				.collaborator-item {
					margin-bottom: 24px;
					padding-bottom: 24px;
					border-bottom: 1px solid rgba(255, 255, 255, 0.08);

					&:last-child {
						border-bottom: none;
						margin-bottom: 0;
						padding-bottom: 0;
					}

					h3 {
						font-size: 16px;
						font-weight: 700;
						color: #FFFFFF;
						margin: 0 0 12px 0;
						font-family: 'BioRhyme', serif;
					}

					.collaborator-contributions {
						margin: 0;
						padding-left: 20px;
						list-style: none;

						li {
							font-size: 14px;
							color: rgba(255, 255, 255, 0.9);
							line-height: 1.6;
							margin-bottom: 8px;
							font-family: 'BioRhyme', serif;
							position: relative;

							&:before {
								content: '•';
								color: rgba(255, 255, 255, 0.6);
								position: absolute;
								left: -15px;
							}
						}
					}
				}
			}
		}
	}

	/* 右侧边栏 - 复制自SocialFeed.vue */
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

	/* 响应式设计 */
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
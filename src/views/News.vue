<template>
	<div class="news-page">
		<!-- Masaigon风格背景动画 -->
		<!-- <MasaigonBackground 
			:animated="true"
			:intensity="0.6"
			theme="blue"
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
			<!-- Tab 切换栏 -->
			<div class="tab-header">
				<h2>News</h2>
				<div class="tab-buttons">
					<button :class="['tab-button', { active: activeTab === 'human' }]" @click="activeTab = 'human'">
						Human Observer
					</button>
					<button :class="['tab-button', { active: activeTab === 'ideal' }]" @click="activeTab = 'ideal'">
						Ideal Observer
					</button>
				</div>
			</div>

			<!-- Human Observer 内容 -->
			<div v-if="activeTab === 'human'" class="news-content">
				<!-- 用户头像和标题 -->
				<div class="article-header">
					<div class="user-avatar">
						<img src="@/assets/figma/avatar/avatar1.jpg" alt="User avatar" />
					</div>
					<div class="article-title">
						<h3>Wednesday briefing: The truth about the myths and misinformation surrounding the Southport attack</h3>
						<p class="article-subtitle">In today's newsletter: Amid far-right disinformation and claims of a cover-up, Keir Starmer has ordered a public inquiry to address the issues and prevent future tragedies; but how did things escalate so fast?</p>
					</div>
				</div>

				<!-- 新闻图片 -->
				<div class="article-image">
					<img src="@/assets/figma/avatar/avatar1.jpg" alt="News article image" />
					<div class="image-caption">© Two women and a young girl embrace near the floral tributes to the young victims of the knife attack in Southport. Photograph: Gary Calton/The Observer</div>
				</div>

				<!-- 新闻正文 -->
				<div class="article-content">
					<p>Good morning. After the horrifying murders of three young girls in Southport last summer, an obvious question presented itself: was there anything we knew about the attacker that might shed light on how this could have happened? After a summer of far-right riots and then a long wait for the legal process to unfold, this week we finally got more clarity on the answers.</p>
					
					<p>At Liverpool crown court on Monday, Axel Rudakubana pleaded guilty to murdering Bebe King, six, Elsie Dot Stancombe, seven, and Alice Dasilva Aguiar, nine. His unexpected decision lifted some of the restrictions around contempt of court that have applied to the case, since there was no longer a risk of prejudicing a jury trial. <span class="analyzable-text" @mouseenter="showAnalysis($event, 'guardian')" @mouseleave="hideAnalysis">The Guardian was able to reveal that Rudakubana, 18, had been referred to the counter-extremism scheme Prevent three times, but that he was not viewed as a terrorist threat.</span></p>

					<p><span class="analyzable-text highlighted-text" @mouseenter="showAnalysis($event, 'terrorism')" @mouseleave="hideAnalysis">The government has now announced it will overhaul terrorism laws to better account for "lone individualised killers"</span> without a clear ideology and push social media companies to remove more violent online content. In a press conference yesterday, Keir Starmer also <span class="analyzable-text" @mouseenter="showAnalysis($event, 'accusations')" @mouseleave="hideAnalysis">addressed the growing wave of cover-up accusations</span> that have circulated online from the outset.</p>

					<p>Today's newsletter looks back on how those claims gained traction, and what we now know about the reality behind them. Here are the headlines.</p>
				</div>

				<!-- Five big stories -->
				<div class="five-big-stories">
					<h3>Five big stories</h3>
					<div class="story-list">
						<div class="story-item">
							<strong>1. West Bank</strong> | At least eight Palestinians were killed in an operation conducted by...
						</div>
						<div class="story-item">
							<strong>2. Child abuse</strong> | The last Conservative government issued an "awful, inconsequential, insubstantial" response to a seven-year national inquiry into child sexual abuse, according to its chair. Prof Alexis Jay told MPs that then home secretary Suella Braverman had "committed to nothing" on her 20 recommendations.
						</div>
						<div class="story-item">
							<strong>3. Ukraine</strong> | Russian forces have launched a new offensive in eastern Ukraine, targeting civilian infrastructure and causing widespread power outages across several regions.
						</div>
						<div class="story-item">
							<strong>4. Climate</strong> | The UN climate summit has reached a breakthrough agreement on fossil fuel transition, with major economies committing to ambitious emission reduction targets.
						</div>
						<div class="story-item">
							<strong>5. Technology</strong> | New AI regulation framework announced by the European Union, setting global standards for artificial intelligence development and deployment.
						</div>
					</div>
				</div>
			</div>

			<!-- Ideal Observer 内容 -->
			<div v-if="activeTab === 'ideal'" class="analysis-content">
				<div class="analysis-overview">
					<h3>Content Analysis Overview</h3>
					<div class="analysis-summary">
						<div class="summary-item">
							<span class="summary-label">Overall Neutrality:</span>
							<span class="summary-value">High</span>
						</div>
						<div class="summary-item">
							<span class="summary-label">Source Credibility:</span>
							<span class="summary-value verified">Verified</span>
						</div>
						<div class="summary-item">
							<span class="summary-label">Bias Detection:</span>
							<span class="summary-value">Minimal</span>
						</div>
						<div class="summary-item">
							<span class="summary-label">Fact Check Status:</span>
							<span class="summary-value">Verified</span>
						</div>
					</div>
					<p class="analysis-note">Switch to Human Observer mode and hover over highlighted text to see detailed analysis.</p>
				</div>

				<div class="detailed-analysis">
					<h3>Detailed Analysis</h3>
					<div class="analysis-details-panel">
						<div class="analysis-item">
							<span class="analysis-label">Title Neutrality Check:</span>
							<span class="analysis-value">No emotional or biased language detected.</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">Source Verified:</span>
							<span class="analysis-value verified">The Guardian</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">User Verification:</span>
							<span class="analysis-value">Unverified account</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">Emotion Score:</span>
							<span class="analysis-value">0.063</span>
						</div>
						<div class="analysis-item">
							<span class="analysis-label">Result:</span>
							<span class="analysis-value result-text">No misinformation draft; both versions maintain identical semantic, emotional, and structural metrics. Fully factual rewrite.</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- 右侧推荐区域 - 只在Human Observer模式下显示 -->
		<div v-if="activeTab === 'human'" class="sidebar-right">
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

		<!-- 浮动分析弹窗 -->
		<div v-if="showAnalysisTooltip" class="analysis-tooltip" :style="tooltipStyle">
			<div class="tooltip-content">
				<div class="analysis-details">
					<div class="analysis-item">
						<span class="analysis-label">Title Neutrality Check:</span>
						<span class="analysis-value">{{ currentAnalysis.neutrality }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">Source Verified:</span>
						<span class="analysis-value verified">{{ currentAnalysis.source }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">User Verification:</span>
						<span class="analysis-value">{{ currentAnalysis.userVerification }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">Emotion Score:</span>
						<span class="analysis-value">{{ currentAnalysis.emotionScore }}</span>
					</div>
					<div class="analysis-item">
						<span class="analysis-label">Result:</span>
						<span class="analysis-value result-text">{{ currentAnalysis.result }}</span>
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
	name: 'News',
	components: {
		SidebarMenu,
		MasaigonBackground
	},
	data() {
		return {
			activeNavItem: 'news',
			userName: 'Polly',
			userEmail: 'pollyliu508@sina.com',
			userAvatar: avatar1,
			activeTab: 'human', // 默认显示Human Observer
			currentAnalysis: null,
			showAnalysisTooltip: false,
			tooltipX: 0,
			tooltipY: 0,
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
			]
		}
	},
	computed: {
		tooltipStyle() {
			return {
				left: `${this.tooltipX}px`,
				top: `${this.tooltipY}px`
			}
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
		showAnalysis(event, type) {
			// 只在Human Observer模式下显示分析
			if (this.activeTab !== 'human') return
			
			this.currentAnalysis = {
				neutrality: 'No emotional or biased language detected.',
				source: 'The Guardian',
				userVerification: 'Unverified account',
				emotionScore: '0.063',
				result: 'No misinformation draft; both versions misinful; identical semantic, emotional, and structural metrics. Fully factual rewrite.'
			}
			
			// 计算弹窗位置 - 显示在文字右侧
			const rect = event.target.getBoundingClientRect()
			this.tooltipX = rect.right + 10
			this.tooltipY = rect.top
			this.showAnalysisTooltip = true
		},
		hideAnalysis() {
			this.showAnalysisTooltip = false
			this.currentAnalysis = null
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

	.news-page {
		display: flex;
		min-height: 100vh;
		background: #000;
		color: #FFFFFF;
		font-family: 'BioRhyme', serif;
		position: relative;
		overflow: hidden;
	}

	/* 主内容区域 */
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

	.tab-header {
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
			margin: 0 0 16px 0;
			color: #FFFFFF;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.5px;
		}

		.tab-buttons {
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

	/* 新闻内容样式 */
	.news-content {
		padding: 30px 28px;
	}

	.article-header {
		display: flex;
		align-items: flex-start;
		margin-bottom: 24px;
		
		.user-avatar {
			width: 44px;
			height: 44px;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 18px;
			flex-shrink: 0;
			border: 0.5px solid rgba(255, 255, 255, 0.2);
			
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		
		.article-title {
			flex: 1;
			
			h3 {
				font-size: 20px;
				font-weight: 700;
				color: #FFFFFF;
				line-height: 1.4;
				margin: 0 0 12px 0;
				font-family: 'BioRhyme', serif;
				letter-spacing: 0.3px;
			}
			
			.article-subtitle {
				font-size: 15px;
				color: rgba(255, 255, 255, 0.7);
				line-height: 1.5;
				margin: 0;
				font-family: 'BioRhyme', serif;
			}
		}
	}

	.article-image {
		margin-bottom: 24px;
		
		img {
			width: 100%;
			height: 200px;
			object-fit: cover;
			border-radius: 10px;
			margin-bottom: 8px;
			border: 0.5px solid rgba(255, 255, 255, 0.2);
		}
		
		.image-caption {
			font-size: 12px;
			color: rgba(255, 255, 255, 0.5);
			font-style: italic;
			line-height: 1.4;
			font-family: 'BioRhyme', serif;
		}
	}

	.article-content {
		margin-bottom: 30px;
		
		p {
			font-size: 16px;
			color: rgba(255, 255, 255, 0.95);
			line-height: 1.6;
			margin-bottom: 16px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.2px;
		}
		
		.highlighted-text {
			color: #2FB9C5;
			font-weight: 500;
		}
		
		.analyzable-text {
			cursor: pointer;
			position: relative;
			transition: all 0.2s ease;
			
			&:hover {
				background: rgba(47, 185, 197, 0.1);
				padding: 2px 4px;
				border-radius: 4px;
			}
		}
	}

	.five-big-stories {
		h3 {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin-bottom: 16px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.3px;
		}
		
		.story-list {
			.story-item {
				font-size: 15px;
				color: rgba(255, 255, 255, 0.95);
				line-height: 1.5;
				margin-bottom: 14px;
				padding-bottom: 14px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				font-family: 'BioRhyme', serif;
				
				&:last-child {
					border-bottom: none;
				}
				
				strong {
					color: #FFFFFF;
					font-weight: 700;
				}
			}
		}
	}

	/* 分析内容样式 */
	.analysis-content {
		padding: 30px 28px;
	}

	.analysis-overview {
		margin-bottom: 30px;
		
		h3 {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin-bottom: 20px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.3px;
		}
		
		.analysis-summary {
			background: rgba(255, 255, 255, 0.05);
			border-radius: 10px;
			padding: 20px;
			margin-bottom: 20px;
			border: 0.5px solid rgba(255, 255, 255, 0.1);
			
			.summary-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 14px;
				
				&:last-child {
					margin-bottom: 0;
				}
				
				.summary-label {
					font-size: 15px;
					font-weight: 600;
					color: #FFFFFF;
					font-family: 'BioRhyme', serif;
				}
				
				.summary-value {
					font-size: 15px;
					color: rgba(255, 255, 255, 0.7);
					font-family: 'BioRhyme', serif;
					
					&.verified {
						color: #2FB9C5;
						font-weight: 600;
					}
				}
			}
		}
		
		.analysis-note {
			font-size: 14px;
			color: rgba(255, 255, 255, 0.6);
			text-align: center;
			font-style: italic;
			margin: 0;
			line-height: 1.4;
			font-family: 'BioRhyme', serif;
		}
	}

	.detailed-analysis {
		h3 {
			font-size: 20px;
			font-weight: 700;
			color: #FFFFFF;
			margin-bottom: 20px;
			font-family: 'BioRhyme', serif;
			letter-spacing: 0.3px;
		}
		
		.analysis-details-panel {
			background: rgba(255, 255, 255, 0.05);
			border-radius: 10px;
			padding: 20px;
			border: 0.5px solid rgba(255, 255, 255, 0.1);
			
			.analysis-item {
				margin-bottom: 16px;
				
				&:last-child {
					margin-bottom: 0;
				}
				
				.analysis-label {
					display: block;
					font-size: 13px;
					font-weight: 600;
					color: #FFFFFF;
					margin-bottom: 4px;
					font-family: 'BioRhyme', serif;
				}
				
				.analysis-value {
					display: block;
					font-size: 12px;
					color: rgba(255, 255, 255, 0.8);
					line-height: 1.4;
					font-family: 'BioRhyme', serif;
					
					&.verified {
						color: #2FB9C5;
						font-weight: 600;
					}
					
					&.result-text {
						color: rgba(255, 255, 255, 0.9);
						line-height: 1.5;
						font-size: 11px;
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

	/* 浮动分析弹窗样式 */
	.analysis-tooltip {
		position: fixed;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.95);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 12px;
		padding: 0;
		max-width: 350px;
		min-width: 300px;
		backdrop-filter: blur(15px);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		
		.tooltip-content {
			padding: 20px;
			
			.analysis-details {
				.analysis-item {
					margin-bottom: 15px;
					
					&:last-child {
						margin-bottom: 0;
					}
					
					.analysis-label {
						display: block;
						font-size: 12px;
						font-weight: 600;
						color: #FFFFFF;
						margin-bottom: 5px;
						font-family: 'BioRhyme', serif;
					}
					
					.analysis-value {
						display: block;
						font-size: 11px;
						color: rgba(255, 255, 255, 0.8);
						line-height: 1.4;
						font-family: 'BioRhyme', serif;
						
						&.verified {
							color: #2FB9C5;
							font-weight: 600;
						}
						
						&.result-text {
							color: rgba(255, 255, 255, 0.9);
							line-height: 1.5;
							font-size: 10px;
						}
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
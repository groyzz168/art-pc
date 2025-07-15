<template>
	<div class="sidebar" :class="{ 'white-theme': theme === 'white' }">
		<!-- Logo -->
		<div class="logo-section">
			<img src="@/assets/figma/logo.png" alt="Logo" class="logo-image" />
		</div>

		<!-- 导航菜单 -->
		<nav class="navigation">
			<div v-for="item in navItems" :key="item.name" :class="['nav-item', { active: item.active }]"
				@click="handleNavClick(item.name)">
				<div class="nav-icon">
					<svg v-if="item.name === 'home'" width="40" height="32" viewBox="0 0 40 32" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20.0256 1.00021C20.2249 1.00442 20.4109 1.06959 20.5897 1.19063L38.6397 15.253C39.055 15.5821 39.1139 16.1895 38.8029 16.5861C38.4965 16.9769 37.8446 17.0394 37.4522 16.7325L19.9959 3.13886L2.53965 16.7325C2.14716 17.0394 1.51324 16.9745 1.20371 16.5861C0.896498 16.2005 0.929529 15.56 1.35215 15.253L8.1209 9.97964V1.9377C8.12092 1.68907 8.22102 1.45061 8.39918 1.2748C8.57733 1.099 8.81895 1.00023 9.0709 1.00021H12.8709C13.1229 1.00023 13.3645 1.099 13.5426 1.2748C13.7208 1.45061 13.8209 1.68907 13.8209 1.9377V5.54119L19.4022 1.19063C19.6136 1.05318 19.8263 0.996104 20.0256 1.00021ZM11.9209 2.87519H10.0209V8.50015L11.9209 7.02067V2.87519ZM31.8709 13.6124L33.7709 15.0919V30.0625C33.7709 30.3111 33.6708 30.5496 33.4926 30.7254C33.3145 30.9012 33.0729 31 32.8209 31H24.7459C24.494 31 24.2523 30.9012 24.0742 30.7254C23.896 30.5496 23.7959 30.3111 23.7959 30.0625V21.6251H16.1959V30.0625C16.1959 30.3111 16.0958 30.5496 15.9176 30.7254C15.7395 30.9012 15.4979 31 15.2459 31H7.1709C6.91895 31 6.67733 30.9012 6.49918 30.7254C6.32102 30.5496 6.22092 30.3111 6.2209 30.0625V15.0919L8.1209 13.6124V29.125H14.2959V20.6876C14.2959 20.439 14.396 20.2005 14.5742 20.0247C14.7523 19.8489 14.994 19.7501 15.2459 19.7501H24.7459C24.9979 19.7501 25.2395 19.8489 25.4176 20.0247C25.5958 20.2005 25.6959 20.439 25.6959 20.6876V29.125H31.8709V13.6124Z"
							fill="currentColor" stroke="currentColor" stroke-width="0.5" />
					</svg>

					<svg v-else-if="item.name === 'explore'" width="30" height="30" viewBox="0 0 30 30" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M21.9132 19.7491L29.5594 27.3953C30.1542 27.9902 30.1562 28.9527 29.5544 29.5544C28.9568 30.152 27.9793 30.1434 27.3953 29.5594L19.7491 21.9132C14.9466 25.6508 7.99984 25.3124 3.58555 20.8981C-1.19518 16.1174 -1.19518 8.36629 3.58555 3.58555C8.36629 -1.19518 16.1174 -1.19518 20.8981 3.58555C25.3124 7.99984 25.6508 14.9466 21.9132 19.7491ZM18.7341 18.7341C22.3196 15.1485 22.3196 9.33517 18.7341 5.74962C15.1485 2.16407 9.33517 2.16407 5.74962 5.74962C2.16407 9.33517 2.16407 15.1485 5.74962 18.7341C9.33517 22.3196 15.1485 22.3196 18.7341 18.7341Z"
							fill="currentColor" />
					</svg>

					<svg v-else-if="item.name === 'notification'" width="28" height="31" viewBox="0 0 28 31" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.552 0.00577877C13.052 0.0634334 12.6358 0.538343 12.6443 1.04167V2.13096C10.7394 2.36868 9.108 3.25944 7.88133 4.52313C6.4398 6.00816 5.52969 7.98461 5.14743 10.087L3.78048 17.6053C3.49682 19.1654 2.91856 19.4855 2.09314 20.0295C1.68044 20.3014 1.17713 20.5916 0.736872 21.1081C0.296616 21.6246 0 22.379 0 23.2546C0 24.7515 1.23705 25.9885 2.7339 25.9885H8.55413C8.73161 28.6521 10.9626 30.7729 13.6695 30.7729C16.3765 30.7729 18.6074 28.6521 18.7849 25.9885H24.6051C26.102 25.9885 27.339 24.7515 27.339 23.2546C27.339 22.379 27.0424 21.6246 26.6022 21.1081C26.1619 20.5916 25.6586 20.3014 25.2459 20.0295C24.4205 19.4855 23.8422 19.1654 23.5586 17.6053L22.1916 10.087C21.8093 7.98461 20.8992 6.00816 19.4577 4.52313C18.231 3.25944 16.5997 2.36868 14.6947 2.13096V1.04167C14.7046 0.459863 14.1301 -0.0609148 13.552 0.00577877ZM13.6695 4.11731C15.4687 4.11731 16.8781 4.80422 17.984 5.94348C19.0898 7.08273 19.8651 8.69676 20.1839 10.4501L21.5508 17.9684C21.939 20.103 23.2384 21.1542 24.1246 21.7382C24.5677 22.0302 24.8834 22.2451 25.043 22.4323C25.2026 22.6196 25.2886 22.7656 25.2886 23.2546C25.2886 23.651 25.0015 23.9381 24.6051 23.9381H2.7339C2.33752 23.9381 2.05043 23.651 2.05043 23.2546C2.05043 22.7656 2.13644 22.6196 2.29605 22.4323C2.45567 22.2451 2.77137 22.0302 3.21447 21.7382C4.10067 21.1542 5.40007 20.103 5.78819 17.9684L7.15514 10.4501C7.47394 8.69676 8.2492 7.08273 9.35508 5.94348C10.461 4.80422 11.8703 4.11731 13.6695 4.11731ZM10.658 25.9885H16.6811C16.5077 27.5356 15.2694 28.7224 13.6695 28.7224C12.0696 28.7224 10.8313 27.5356 10.658 25.9885Z"
							fill="currentColor" />
					</svg>

					<svg v-else-if="item.name === 'news'" width="30" height="30" viewBox="0 0 30 30" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.2246 11.6473C13.7534 12.005 13.8871 12.7175 13.5239 13.2382L7.1309 22.3946C6.90424 22.7179 6.54103 22.8896 6.17199 22.8896C5.94534 22.8896 5.71576 22.8238 5.51529 22.6893C4.98642 22.3316 4.85278 21.6192 5.21599 21.0984L11.6089 11.942C11.9722 11.4213 12.6957 11.2897 13.2246 11.6473ZM27.3353 16.9324C27.5968 17.1899 27.7189 17.5561 27.6608 17.9195C27.6027 18.28 27.3731 18.5948 27.0418 18.7608L19.629 22.509L19.9428 22.818C20.5094 23.376 20.771 24.1714 20.6489 24.9497C20.524 25.728 20.0271 26.4062 19.3152 26.7667L13.5036 29.7053C13.1113 29.9027 12.6899 30 12.2715 30C11.577 30 10.8913 29.7339 10.3711 29.2217L9.00826 27.8797L6.19254 29.3047C5.87581 29.4649 5.53584 29.5422 5.19875 29.5422C4.63793 29.5422 4.08292 29.3276 3.66448 28.9155L0.636647 25.934C-0.0316978 25.2759 -0.191522 24.2744 0.241457 23.4446L10.9463 2.91428C11.1149 2.58809 11.4345 2.36205 11.8007 2.3048C12.1668 2.24755 12.5387 2.36775 12.8032 2.62527L27.3353 16.9324Z"
							fill="currentColor" />
					</svg>

					<svg v-else-if="item.name === 'trending'" width="28" height="28" viewBox="0 0 28 28" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14 0.5C21.4565 0.5 27.5 6.54412 27.5 14C27.5 21.4558 21.4544 27.5 14 27.5C6.54348 27.5 0.5 21.4559 0.5 14C0.5 6.54412 6.54348 0.5 14 0.5ZM22.5068 5.49414C17.8081 0.795839 10.1917 0.795723 5.49414 5.49414C0.795546 10.1913 0.795492 17.8086 5.49414 22.5068C10.1916 27.2049 17.8093 27.2048 22.5068 22.5068C27.2043 17.8085 27.2043 10.1925 22.5068 5.49414ZM14.001 5.05762C14.4032 5.05762 14.7314 5.38513 14.7314 5.78906V13.5752L14.9814 13.7197L19.6758 16.4307C20.0252 16.6324 20.1452 17.0799 19.9443 17.4307C19.7406 17.7815 19.2925 17.9013 18.9404 17.6982L13.6348 14.6318L13.5557 14.5791C13.381 14.4455 13.2695 14.2363 13.2695 14V6.17969H13.2715V5.78906C13.2715 5.38521 13.5988 5.05775 14.001 5.05762Z"
							fill="currentColor" stroke="currentColor" />
					</svg>

					<svg v-else-if="item.name === 'profile'" width="25" height="29" viewBox="0 0 25 29" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12.5 15.1905C15.8141 15.1941 18.9914 16.5047 21.3348 18.8348C23.6782 21.1648 24.9963 24.3239 25 27.619C25 27.9853 24.8537 28.3365 24.5932 28.5955C24.3327 28.8545 23.9795 29 23.6111 29C23.2428 29 22.8895 28.8545 22.629 28.5955C22.3685 28.3365 22.2222 27.9853 22.2222 27.619C22.2222 25.0553 21.1979 22.5965 19.3746 20.7837C17.5514 18.9708 15.0785 17.9524 12.5 17.9524C9.92151 17.9524 7.44862 18.9708 5.62535 20.7837C3.80208 22.5965 2.77778 25.0553 2.77778 27.619C2.77778 27.9853 2.63145 28.3365 2.37098 28.5955C2.11051 28.8545 1.75725 29 1.38889 29C1.02053 29 0.667264 28.8545 0.406796 28.5955C0.146329 28.3365 0 27.9853 0 27.619C0.00367618 24.3239 1.32182 21.1648 3.66523 18.8348C6.00863 16.5047 9.18592 15.1941 12.5 15.1905ZM12.5 13.8095C11.1265 13.8095 9.78388 13.4046 8.64187 12.6459C7.49987 11.8872 6.60978 10.8088 6.08417 9.5471C5.55856 8.28542 5.42104 6.89711 5.68899 5.55771C5.95694 4.21832 6.61834 2.98801 7.58954 2.02236C8.56073 1.05671 9.79812 0.399098 11.1452 0.132676C12.4923 -0.133746 13.8886 0.00299172 15.1575 0.525597C16.4265 1.0482 17.511 1.9332 18.2741 3.06868C19.0372 4.20417 19.4444 5.53913 19.4444 6.90476C19.4422 8.73535 18.7099 10.4903 17.408 11.7847C16.1062 13.0792 14.3411 13.8073 12.5 13.8095ZM12.5 11.0476C13.3241 11.0476 14.1297 10.8046 14.8149 10.3494C15.5001 9.8942 16.0341 9.24718 16.3495 8.49017C16.6649 7.73316 16.7474 6.90017 16.5866 6.09653C16.4258 5.2929 16.029 4.55471 15.4463 3.97532C14.8636 3.39593 14.1211 3.00136 13.3129 2.84151C12.5046 2.68166 11.6668 2.7637 10.9055 3.07726C10.1441 3.39083 9.49338 3.92183 9.03554 4.60312C8.5777 5.28441 8.33333 6.08538 8.33333 6.90476C8.33333 8.00352 8.77232 9.05727 9.55372 9.83421C10.3351 10.6111 11.3949 11.0476 12.5 11.0476Z"
							fill="currentColor" />
					</svg>
				</div>
				<span class="nav-text">{{ item.label }}</span>
			</div>
		</nav>

		<!-- POST 按钮 -->
		<div class="post-section">
			<button class="post-button" @click="handlePostClick">
				POST
			</button>
		</div>

		<!-- 用户信息 -->
		<div class="user-profile" @click="handleUserProfileClick">
			<div class="user-avatar">
				<img :src="userAvatar" alt="Polly" />
			</div>
			<div class="user-info">
				<div class="user-name">{{ userName }}</div>
				<div class="user-email">{{ userEmail }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import avatar1 from '@/assets/figma/avatar/avatar1.jpg'

export default {
	name: 'SidebarMenu',
	props: {
		activeNavItem: {
			type: String,
			default: 'notification'
		},
		userName: {
			type: String,
			default: 'Polly'
		},
		userEmail: {
			type: String,
			default: 'pollyliu50Q@sina.com'
		},
		userAvatar: {
			type: String,
			default: avatar1
		},
		theme: {
			type: String,
			default: 'dark',
			validator: (value) => ['dark', 'white'].includes(value)
		}
	},
	data() {
		return {
			navItems: [{
					name: 'home',
					label: 'Home',
					icon: 'HomeIcon',
					active: false
				},
				{
					name: 'explore',
					label: 'Explore',
					icon: 'ExploreIcon',
					active: false
				},
				{
					name: 'notification',
					label: 'Notification',
					icon: 'NotificationIcon',
					active: true
				},
				{
					name: 'news',
					label: 'News',
					icon: 'NewsIcon',
					active: false
				},
				{
					name: 'trending',
					label: 'Trending Topics',
					icon: 'TrendingIcon',
					active: false
				},
				{
					name: 'profile',
					label: 'Profile',
					icon: 'ProfileIcon',
					active: false
				}
			]
		}
	},
	watch: {
		activeNavItem: {
			handler(newVal) {
				this.setActiveNav(newVal)
			},
			immediate: true
		}
	},
	methods: {
		setActiveNav(name) {
			this.navItems.forEach(item => {
				item.active = item.name === name
			})
		},
		handleNavClick(name) {
			this.setActiveNav(name)
			this.$emit('nav-click', name)
			
			// 添加页面跳转逻辑
			switch(name) {
				case 'home':
					this.$router.push('/home')
					break
				case 'explore':
					this.$router.push('/explore')
					break
				case 'notification':
					this.$router.push('/social-feed')
					break
				case 'news':
					this.$router.push('/news')
					break
				case 'trending':
					this.$router.push('/trending')
					break
				case 'profile':
					this.$router.push('/profile')
					break
				default:
					console.log('未知的导航项:', name)
			}
		},
		handlePostClick() {
			this.$emit('post-click')
			// 添加发布页面跳转或者打开发布模态框
			console.log('打开发布功能')
			// 可以跳转到发布页面或者触发模态框
			// this.$router.push('/post')
		},
		handleUserProfileClick() {
			this.$emit('user-profile-click')
			// 添加用户资料页面跳转
			this.$router.push('/profile')
		}
	}
}
</script>

<style scoped lang="scss">
	/* 左侧边栏 - 调整为2.5比例 */
	.sidebar {
		width: 26%;
		padding: 120px 0 0 84px;
		display: flex;
		flex-direction: column;
		gap: 32px;
		// background: #000;
		position: fixed;
		height: 100vh;
		left: 0;
		top: 0;
		border-right: 1.7px solid #ccc;
		z-index: 10;
		
		// 白色主题样式
		&.white-theme {
			background: #FFFFFF;
			border-right: 1.7px solid #000000;
			
			.logo-section {
				.logo-image {
					filter: brightness(0) invert(1);
				}
			}
			
			.navigation {
				.nav-item {
					color: #000000;
					
					&:hover {
						color: #2FB9C5;
					}
					
					&.active {
						.nav-text {
							color: #2FB9C5;
						}
						
						.nav-icon {
							color: #2FB9C5;
						}
					}
					
					.nav-icon {
						color: #000000;
					}
					
					.nav-text {
						color: #000000;
					}
				}
			}
			
			.post-section {
				.post-button {
					background: rgba(0, 0, 0, 0.1);
					border: 0.25px solid #000000;
					color: #000000;
					
					&:hover {
						background: rgba(47, 185, 197, 0.2);
						border-color: #2FB9C5;
						color: #2FB9C5;
					}
					
					&::before {
						background: rgba(0, 0, 0, 0.2);
					}
				}
			}
			
			.user-profile {
				&:hover {
					background: rgba(0, 0, 0, 0.05);
				}
				
				.user-avatar {
					border: 0.5px solid rgba(0, 0, 0, 0.2);
				}
				
				.user-info {
					.user-name {
						color: #000000;
					}
					
					.user-email {
						color: #000000;
					}
				}
			}
		}
	}

	.logo-section {
		width: 250px;
		height: 78px;
		margin-bottom: 32px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		position: absolute;
		top: 20px;
		left: 20px;

		.logo-image {
			height: 70px;
			width: auto;
			object-fit: contain;
			filter: none;
			transition: all 0.3s ease;

			&:hover {
				filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
				transform: scale(1.05);
			}
		}
	}

	.vera-title {
		display: none;
	}

	.navigation {
		flex: 1;
		padding: 30px 20px 0 0px;
		display: flex;
		flex-direction: column;
		gap: 16px;

		.nav-item {
			display: flex;
			align-items: center;
			gap: 32px;
			padding: 8px 0;
			color: #FFFFFF;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				color: #2FB9C5;
			}

			&.active {
				.nav-text {
					font-weight: 700;
				}
			}

			.nav-icon {
				width: 40px;
				height: 32px;
				display: flex;
				align-items: center;
				justify-content: center;

				svg {
					transition: all 0.3s ease;
				}
			}

			.nav-text {
				font-family: 'BioRhyme', serif;
				font-size: 20px;
				line-height: 1.549;
				font-weight: 200;
				color: #FFFFFF;
				letter-spacing: 0.5px;
			}
		}
	}

	.post-section {
		margin-top: 16px;

		.post-button {
			width: 218px;
			height: 58px;
			background: rgba(255, 255, 255, 0.1);
			border: 0.25px solid #FFFFFF;
			border-radius: 50px;
			backdrop-filter: blur(7.5px);
			color: #FFFFFF;
			font-family: 'BioRhyme', serif;
			font-weight: 400;
			font-size: 20px;
			line-height: 1.549;
			cursor: pointer;
			transition: all 0.3s ease;
			position: relative;
			overflow: hidden;
			
			// 创建进度条效果的伪元素
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 0;
				height: 100%;
				background: rgba(255, 255, 255, 0.2);
				border-radius: 50px;
				transition: width 0.5s ease;
				z-index: -1;
			}

			&:hover {
				transform: translateY(-2px);
				
				&::before {
					width: 100%;
				}
			}
		}
	}

	.user-profile {
		margin-top: auto;
		margin-bottom: 32px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 16px;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			background: rgba(255, 255, 255, 0.05);
		}

		.user-avatar {
			width: 49px;
			height: 49px;
			border-radius: 50%;
			overflow: hidden;
			border: none;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.user-info {
			padding-left: 20px;

			.user-name {
				font-family: 'BioRhyme', serif;
				font-weight: 300;
				font-size: 20px;
				line-height: 1.549;
				color: #FFFFFF;
				margin-bottom: 3px;
			}

			.user-email {
				font-family: 'BioRhyme', serif;
				font-weight: 300;
				font-size: 20px;
				line-height: 1.549;
				color: #FFFFFF;
			}
		}
	}
</style> 
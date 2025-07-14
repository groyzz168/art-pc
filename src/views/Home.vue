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
    <SidebarMenu 
      :active-nav-item="activeNavItem"
      :user-name="userName"
      :user-email="userEmail"
      :user-avatar="userAvatar"
      @nav-click="handleNavClick"
      @post-click="handlePostClick"
      @user-profile-click="handleUserProfileClick"
    />

    <!-- 主要内容区域 -->
    <div class="main-container">
      <!-- 中间内容区域 -->
      <div class="content-area">
        <!-- 顶部标签 -->
        <div class="content-tabs">
          <div class="tab" :class="{ active: activeTab === 'For You' }" @click="switchTab('For You')">For You</div>
          <div class="tab" :class="{ active: activeTab === 'Following' }" @click="switchTab('Following')">Following</div>
        </div>

        <!-- 内容列表 -->
        <div class="content-list">
          <!-- 主要内容项 -->
          <div class="content-item">
            <div class="content-header">
              <div class="content-avatar">
                <img src="@/assets/figma/avatar/avatar2.png" alt="头像" />
              </div>
              <div class="content-title">Wednesday briefing: The truth about the myths and misinformation surrounding the Southport attack</div>
            </div>
            
            <div class="content-image">
              <img src="@/assets/figma/content-image1.jpg" alt="Southport attack memorial" />
            </div>
            
            <div class="image-caption">
              Two women and a young girl embrace near the floral tributes to the young victims of the knife attack in Southport. Photograph: Gary Calton/The Observer
            </div>
            
            <div class="content-text">
              In today's newsletter: Amid far-right disinformation and claims of a cover-up, Keir Starmer has ordered a public inquiry to address the issues and prevent future tragedies; but how did things escalate so fast?...
            </div>
            
            <div class="content-actions">
              <button class="learn-more-btn">Learn more</button>
            </div>
          </div>

          <!-- 第二个内容项 -->
          <div class="content-item">
            <div class="content-header">
              <div class="content-avatar">
                <img src="@/assets/figma/avatar/avatar1.jpg" alt="头像" />
              </div>
              <div class="content-title">New easier British citizenship route for Irish citizens launched</div>
            </div>
            
            <div class="content-subtitle">
              Irish people living in the UK can soon benefit from this new British citizenship route.
            </div>
            
            <div class="content-image">
              <img src="@/assets/figma/content-avatar1.png" alt="Home Office sign" />
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧边栏 -->
      <div class="right-sidebar">
        <!-- 搜索框 -->
        <div class="search-container">
          <div class="search-box">
            <svg class="search-icon" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M11.9583 21.6667C17.4811 21.6667 21.9583 17.1895 21.9583 11.6667C21.9583 6.14385 17.4811 1.66667 11.9583 1.66667C6.43547 1.66667 1.95833 6.14385 1.95833 11.6667C1.95833 17.1895 6.43547 21.6667 11.9583 21.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.125 24.3333L18.7083 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input 
              type="text" 
              class="search-input" 
              placeholder="Search" 
              v-model="searchQuery"
              @input="handleSearch"
            />
          </div>
        </div>

        <!-- What's happening 卡片 -->
        <div class="card">
          <div class="card-header">
            <h3>What's happening</h3>
          </div>
          <div class="card-content">
            <!-- Flamengo vs Bayern Munich -->
            <div class="trending-item">
              <div class="trending-image">
                <img src="@/assets/figma/avatar/avatar1.jpg" alt="Flamengo vs Bayern Munich" />
              </div>
              <div class="trending-content">
                <div class="trending-title">Flamengo vs Bayern Munich</div>
                <div class="trending-time">42 minutes ago</div>
              </div>
              <button class="more-options">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="14" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </button>
            </div>

            <!-- The BBC -->
            <div class="trending-item">
              <div class="trending-content">
                <div class="trending-category">Entertainment Trending</div>
                <div class="trending-title">The BBC</div>
                <div class="trending-posts">268K posts</div>
              </div>
              <button class="more-options">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="14" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </button>
            </div>

            <!-- Glastonbury -->
            <div class="trending-item">
              <div class="trending-content">
                <div class="trending-category">Entertainment Trending</div>
                <div class="trending-title">Glastonbury</div>
                <div class="trending-subtitle">Trending with <span class="highlight">The Prodigy</span>, <span class="highlight">Olivia Rodrigo</span></div>
                <div class="trending-posts">653K posts</div>
              </div>
              <button class="more-options">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="14" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </button>
            </div>

            <!-- #LoveIsland -->
            <div class="trending-item">
              <div class="trending-content">
                <div class="trending-category">Love Island UK· Trending</div>
                <div class="trending-title">#LoveIsland</div>
                <div class="trending-subtitle">Trending with <span class="highlight">Shakira</span>, <span class="highlight">Helena</span></div>
                <div class="trending-posts">30.9K posts</div>
              </div>
              <button class="more-options">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="14" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </button>
            </div>

            <!-- Rod Stewart -->
            <div class="trending-item">
              <div class="trending-content">
                <div class="trending-category">Entertainment · Trending</div>
                <div class="trending-title">Rod Stewart</div>
                <div class="trending-subtitle">Trending with <span class="highlight">Lulu</span>, <span class="highlight">Mick Hucknall</span></div>
                <div class="trending-posts">26K posts</div>
              </div>
              <button class="more-options">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
                  <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="2" r="1.5" fill="currentColor" />
                  <circle cx="14" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </button>
            </div>

            <!-- 额外的trending项目 - 动态显示 -->
            <transition-group name="fade" tag="div" v-if="showMoreTrending">
              <div class="trending-item" v-for="(item, index) in additionalTrendingItems" :key="'trending-' + index">
                <div class="trending-content">
                  <div class="trending-category">{{ item.category }}</div>
                  <div class="trending-title">{{ item.title }}</div>
                  <div class="trending-subtitle" v-if="item.subtitle">{{ item.subtitle }}</div>
                  <div class="trending-posts">{{ item.posts }}</div>
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

            <div class="show-more">
              <button class="show-more-btn" @click="toggleShowMoreTrending">
                {{ showMoreTrending ? 'Show less' : 'Show More' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Who to follow 卡片 -->
        <div class="card">
          <div class="card-header">
            <h3>Who to follow</h3>
          </div>
          <div class="card-content">
            <div class="follow-item">
              <div class="follow-avatar">
                <img src="@/assets/figma/follow-avatar1.png" alt="用户头像" />
              </div>
              <div class="follow-info">
                <div class="follow-name">Angela Rayner</div>
                <div class="follow-handle">@AngelaRayner</div>
              </div>
              <button class="follow-btn">Follow</button>
            </div>

            <div class="follow-item">
              <div class="follow-avatar">
                <img src="@/assets/figma/follow-avatar2.png" alt="用户头像" />
              </div>
              <div class="follow-info">
                <div class="follow-name">Big Hims</div>
                <div class="follow-handle">@hiking skiing</div>
              </div>
              <button class="follow-btn">Follow</button>
            </div>

            <div class="follow-item">
              <div class="follow-avatar">
                <img src="@/assets/figma/follow-avatar3.png" alt="用户头像" />
              </div>
              <div class="follow-info">
                <div class="follow-name">Franz von Holzhausen</div>
                <div class="follow-handle">@woodhaus2</div>
              </div>
              <button class="follow-btn">Follow</button>
            </div>

            <!-- 额外的关注推荐 - 动态显示 -->
            <transition-group name="fade" tag="div" v-if="showMoreFollowing">
              <div class="follow-item" v-for="(item, index) in additionalFollowingItems" :key="'follow-' + index">
                <div class="follow-avatar">
                  <img :src="item.avatar" :alt="item.name" />
                </div>
                <div class="follow-info">
                  <div class="follow-name">{{ item.name }}</div>
                  <div class="follow-handle">{{ item.handle }}</div>
                </div>
                <button class="follow-btn">Follow</button>
              </div>
            </transition-group>

            <div class="show-more">
              <button class="show-more-btn" @click="toggleShowMoreFollowing">
                {{ showMoreFollowing ? 'Show less' : 'Show more' }}
              </button>
            </div>
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
      additionalTrendingItems: [
        {
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
      additionalFollowingItems: [
        {
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
      searchQuery: ''
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
  background: $color-black;
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
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
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
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scroll-behavior: smooth;
    max-height: calc(100vh - 200px);

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

        .learn-more-btn {
          padding: 12px 24px;
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

.right-sidebar {
  width: 26%;
  height: 100vh;
  padding: 20px 0px 48px 0;
  position: fixed;
  right: 0;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 24px;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */

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

  .search-container {
    padding: 0 24px;

    .search-box {
      position: relative;
      width: 100%;
      height: 50px;
      background: $bg-glass;
      border: $border-glass;
      border-radius: $border-radius-xxl;
      backdrop-filter: blur(8.6px);
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 16px;

      .search-input {
        flex: 1;
        background: transparent;
        border: none;
        color: $color-white;
        font-family: $font-primary;
        font-weight: $font-weight-medium;
        font-size: $font-size-lg;
        line-height: 1.549;
        outline: none;

        &::placeholder {
          color: $color-white;
          opacity: 0.7;
        }
      }

      .search-icon {
        width: 26px;
        height: 26px;
        color: $color-white;
      }
    }
  }

  .card {
    margin-right: 24px;
    background: $bg-glass;
    border: $border-glass;
    border-radius: $border-radius-lg;
    backdrop-filter: $blur-md;
    overflow: hidden;
    max-height: none;
    flex-shrink: 0;

    .card-header {
      padding: 20px 28px;
      

      h3 {
        font-family: $font-primary;
        font-weight: $font-weight-medium;
        font-size: $font-size-xl;
        line-height: 1.549;
        color: $color-white;
        margin: 0;
      }
    }

    .card-content {
      padding: 20px 28px;
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scroll-behavior: smooth;

      /* 隐藏 WebKit 滚动条 */
      &::-webkit-scrollbar {
        display: none;
        width: 0;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: transparent;
      }

      .trending-item {
        display: flex;
        align-items: flex-start;
        padding: 12px 16px;
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

          .trending-time {
            color: rgba(255, 255, 255, 0.5);
            font-size: 13px;
            font-weight: 400;
            font-family: 'BioRhyme', serif;
            line-height: 1.3;
          }

          .trending-subtitle {
            font-family: 'BioRhyme', serif;
            font-weight: 400;
            font-size: 13px;
            line-height: 1.3;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 2px;
            
            .highlight {
              color: #2FB9C5;
            }
          }

          .trending-posts {
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

      .follow-item {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        &:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .follow-avatar {
          width: 49px;
          height: 49px;
          border-radius: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .follow-info {
          flex: 1;

          .follow-name {
            font-family: $font-primary;
            font-weight: $font-weight-medium;
            font-size: $font-size-md;
            line-height: 1.549;
            color: $color-white;
            margin-bottom: 4px;
          }

          .follow-handle {
            font-family: $font-primary;
            font-weight: $font-weight-medium;
            font-size: $font-size-sm;
            line-height: 1.549;
            color: $color-gray;
          }
        }

        .follow-btn {
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
        }
      }

      .show-more {
        text-align: left;
        margin-top: 16px;

        .show-more-btn {
          background: transparent;
          border: none;
          color: $color-accent;
          font-family: $font-primary;
          font-weight: $font-weight-medium;
          font-size: $font-size-sm;
          line-height: 1.549;
          cursor: pointer;
          transition: $transition-normal;
          padding: 8px 16px;
          border-radius: 4px;

          &:hover {
            color: lighten($color-accent, 10%);
            background: rgba(47, 185, 197, 0.1);
            padding: 8px 12px;
          }
        }
      }
    }
  }
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-to, .fade-leave-from {
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
      
      .right-sidebar {
        /* 桌面端特定样式 */
      }
    }
  }
}
</style> 
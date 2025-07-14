<template>
  <div class="navigation-menu">
    <!-- VERA 标题 -->
    <div class="vera-title">
      <h1>VERA</h1>
    </div>

    <!-- 导航菜单 -->
    <nav class="navigation">
      <div 
        v-for="item in menuItems" 
        :key="item.name"
        :class="['nav-item', { active: item.active }]"
        @click="handleMenuClick(item)"
        @mouseenter="handleMouseEnter(item)"
        @mouseleave="handleMouseLeave(item)"
      >
        <div class="nav-icon">
          <component :is="item.icon" />
        </div>
        <span class="nav-text">{{ item.label }}</span>
      </div>
    </nav>

    <!-- POST 按钮 -->
    <div class="post-button">
      <button 
        class="btn-post"
        @click="handlePostClick"
        @mouseenter="postHovered = true"
        @mouseleave="postHovered = false"
        :class="{ hovered: postHovered }"
      >
        POST
      </button>
    </div>

    <!-- 用户信息 -->
    <div class="user-info">
      <div class="user-avatar">
        <img src="@/assets/figma/polly-avatar.png" alt="用户头像" />
      </div>
      <div class="user-details">
        <div class="user-name">Polly</div>
        <div class="user-email">pollyliu508@sina.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenu',
  data() {
    return {
      postHovered: false,
      menuItems: [
        {
          name: 'home',
          label: 'Home',
          active: false,
          icon: 'HomeIcon'
        },
        {
          name: 'explore',
          label: 'Explore',
          active: true,
          icon: 'ExploreIcon'
        },
        {
          name: 'notification',
          label: 'Notification',
          active: false,
          icon: 'NotificationIcon'
        },
        {
          name: 'news',
          label: 'News',
          active: false,
          icon: 'NewsIcon'
        },
        {
          name: 'trending',
          label: 'Trending Topics',
          active: false,
          icon: 'TrendingIcon'
        },
        {
          name: 'profile',
          label: 'Profile',
          active: false,
          icon: 'ProfileIcon'
        }
      ]
    }
  },
  methods: {
    handleMenuClick(item) {
      // 更新活跃状态
      this.menuItems.forEach(menuItem => {
        menuItem.active = menuItem.name === item.name;
      });
      
      // 发送点击事件
      this.$emit('menu-click', item);
      
      // 路由跳转
      if (item.name === 'home') {
        this.$router.push('/home');
      } else if (item.name === 'explore') {
        this.$router.push('/explore');
      }
    },
    
    handleMouseEnter(item) {
      this.$emit('menu-hover', item);
    },
    
    handleMouseLeave(item) {
      this.$emit('menu-leave', item);
    },
    
    handlePostClick() {
      this.$emit('post-click');
    }
  },
  components: {
    HomeIcon: {
      template: `
        <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.0256 0.00021C19.2249 0.00442 19.4109 0.06959 19.5897 0.19063L37.6397 14.253C38.055 14.5821 38.1139 15.1895 37.8029 15.5861C37.4965 15.9769 36.8446 16.0394 36.4522 15.7325L18.9959 2.13886L1.53965 15.7325C1.14716 16.0394 0.51324 15.9745 0.20371 15.5861C-0.103502 15.2005 -0.0704708 14.56 0.35215 14.253L7.1209 8.97964V0.9377C7.12092 0.68907 7.22102 0.45061 7.39918 0.2748C7.57733 0.099 7.81895 0.00023 8.0709 0.00021H11.8709C12.1229 0.00023 12.3645 0.099 12.5426 0.2748C12.7208 0.45061 12.8209 0.68907 12.8209 0.9377V4.54119L18.4022 0.19063C18.6136 0.05318 18.8263 -0.003896 19.0256 0.00021ZM10.9209 1.87519H9.0209V7.50015L10.9209 6.02067V1.87519ZM30.8709 12.6124L32.7709 14.0919V29.0625C32.7709 29.3111 32.6708 29.5496 32.4926 29.7254C32.3145 29.9012 32.0729 30 31.8209 30H23.7459C23.494 30 23.2523 29.9012 23.0742 29.7254C22.896 29.5496 22.7959 29.3111 22.7959 29.0625V20.6251H15.1959V29.0625C15.1959 29.3111 15.0958 29.5496 14.9176 29.7254C14.7395 29.9012 14.4979 30 14.2459 30H6.1709C5.91895 30 5.67733 29.9012 5.49918 29.7254C5.32102 29.5496 5.22092 29.3111 5.2209 29.0625V14.0919L7.1209 12.6124V28.125H13.2959V19.6876C13.2959 19.439 13.396 19.2005 13.5742 19.0247C13.7523 18.8489 13.994 18.7501 14.2459 18.7501H23.7459C23.9979 18.7501 24.2395 18.8489 24.4176 19.0247C24.5958 19.2005 24.6959 19.439 24.6959 19.6876V28.125H30.8709V12.6124Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
        </svg>
      `
    },
    ExploreIcon: {
      template: `
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9132 19.7491L29.5594 27.3953C30.1542 27.9902 30.1562 28.9527 29.5544 29.5544C28.9568 30.152 27.9793 30.1434 27.3953 29.5594L19.7491 21.9132C14.9466 25.6508 7.99984 25.3124 3.58555 20.8981C-1.19518 16.1174 -1.19518 8.36629 3.58555 3.58555C8.36629 -1.19518 16.1174 -1.19518 20.8981 3.58555C25.3124 7.99984 25.6508 14.9466 21.9132 19.7491ZM18.7341 18.7341C22.3196 15.1485 22.3196 9.33517 18.7341 5.74962C15.1485 2.16407 9.33517 2.16407 5.74962 5.74962C2.16407 9.33517 2.16407 15.1485 5.74962 18.7341C9.33517 22.3196 15.1485 22.3196 18.7341 18.7341Z" fill="currentColor"/>
        </svg>
      `
    },
    NotificationIcon: {
      template: `
        <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.552 0.00577877C12.052 0.0634334 11.6358 0.538343 11.6443 1.04167V2.13096C9.7394 2.36868 8.108 3.25944 6.88133 4.52313C5.4398 6.00816 4.52969 7.98461 4.14743 10.087L2.78048 17.6053C2.49682 19.1654 1.91856 19.4855 1.09314 20.0295C0.68044 20.3014 0.17713 20.5916 -0.263128 21.1081C-0.703384 21.6246 -1 22.379 -1 23.2546C-1 24.7515 0.23705 25.9885 1.7339 25.9885H7.55413C7.73161 28.6521 9.9626 30.7729 12.6695 30.7729C15.3765 30.7729 17.6074 28.6521 17.7849 25.9885H23.6051C25.102 25.9885 26.339 24.7515 26.339 23.2546C26.339 22.379 26.0424 21.6246 25.6022 21.1081C25.1619 20.5916 24.6586 20.3014 24.2459 20.0295C23.4205 19.4855 22.8422 19.1654 22.5586 17.6053L21.1916 10.087C20.8093 7.98461 19.8992 6.00816 18.4577 4.52313C17.231 3.25944 15.5997 2.36868 13.6947 2.13096V1.04167C13.7046 0.459863 13.1301 -0.0609148 12.552 0.00577877ZM12.6695 4.11731C14.4687 4.11731 15.8781 4.80422 16.984 5.94348C18.0898 7.08273 18.8651 8.69676 19.1839 10.4501L20.5508 17.9684C20.939 20.103 22.2384 21.1542 23.1246 21.7382C23.5677 22.0302 23.8834 22.2451 24.043 22.4323C24.2026 22.6196 24.2886 22.7656 24.2886 23.2546C24.2886 23.651 24.0015 23.9381 23.6051 23.9381H1.7339C1.33752 23.9381 1.05043 23.651 1.05043 23.2546C1.05043 22.7656 1.13644 22.6196 1.29605 22.4323C1.45567 22.2451 1.77137 22.0302 2.21447 21.7382C3.10067 21.1542 4.40007 20.103 4.78819 17.9684L6.15514 10.4501C6.47394 8.69676 7.2492 7.08273 8.35508 5.94348C9.461 4.80422 10.8703 4.11731 12.6695 4.11731ZM9.658 25.9885H15.6811C15.5077 27.5356 14.2694 28.7224 12.6695 28.7224C11.0696 28.7224 9.8313 27.5356 9.658 25.9885Z" fill="currentColor"/>
        </svg>
      `
    },
    NewsIcon: {
      template: `
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2246 11.6473C13.7534 12.005 13.8871 12.7175 13.5239 13.2382L7.1309 22.3946C6.90424 22.7179 6.54103 22.8896 6.17199 22.8896C5.94534 22.8896 5.71576 22.8238 5.51529 22.6893C4.98642 22.3316 4.85278 21.6192 5.21599 21.0984L11.6089 11.942C11.9722 11.4213 12.6957 11.2897 13.2246 11.6473ZM27.3353 16.9324C27.5968 17.1899 27.7189 17.5561 27.6608 17.9195C27.6027 18.28 27.3731 18.5948 27.0418 18.7608L19.629 22.509L19.9428 22.818C20.5094 23.376 20.771 24.1714 20.6489 24.9497C20.524 25.728 20.0271 26.4062 19.3152 26.7667L13.5036 29.7053C13.1113 29.9027 12.6899 30 12.2715 30C11.577 30 10.8913 29.7339 10.3711 29.2217L9.00826 27.8797L6.19254 29.3047C5.87581 29.4649 5.53584 29.5422 5.19875 29.5422C4.63793 29.5422 4.08292 29.3276 3.66448 28.9155L0.636647 25.934C-0.0316978 25.2759 -0.191522 24.2744 0.241457 23.4446L10.9463 2.91428C11.1149 2.58809 11.4345 2.36205 11.8007 2.3048C12.1668 2.24755 12.5387 2.36775 12.8032 2.62527L27.3353 16.9324Z" fill="currentColor"/>
        </svg>
      `
    },
    TrendingIcon: {
      template: `
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0.5C21.4565 0.5 27.5 6.54412 27.5 14C27.5 21.4558 21.4544 27.5 14 27.5C6.54348 27.5 0.5 21.4559 0.5 14C0.5 6.54412 6.54348 0.5 14 0.5ZM22.5068 5.49414C17.8081 0.795839 10.1917 0.795723 5.49414 5.49414C0.795546 10.1913 0.795492 17.8086 5.49414 22.5068C10.1916 27.2049 17.8093 27.2048 22.5068 22.5068C27.2043 17.8085 27.2043 10.1925 22.5068 5.49414ZM14.001 5.05762C14.4032 5.05762 14.7314 5.38513 14.7314 5.78906V13.5752L14.9814 13.7197L19.6758 16.4307C20.0252 16.6324 20.1452 17.0799 19.9443 17.4307C19.7406 17.7815 19.2925 17.9013 18.9404 17.6982L13.6348 14.6318L13.5557 14.5791C13.381 14.4455 13.2695 14.2363 13.2695 14V6.17969H13.2715V5.78906C13.2715 5.38521 13.5988 5.05775 14.001 5.05762Z" fill="currentColor" stroke="currentColor"/>
        </svg>
      `
    },
    ProfileIcon: {
      template: `
        <svg width="25" height="29" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 15.1905C15.8141 15.1941 18.9914 16.5047 21.3348 18.8348C23.6782 21.1648 24.9963 24.3239 25 27.619C25 27.9853 24.8537 28.3365 24.5932 28.5955C24.3327 28.8545 23.9795 29 23.6111 29C23.2428 29 22.8895 28.8545 22.629 28.5955C22.3685 28.3365 22.2222 27.9853 22.2222 27.619C22.2222 25.0553 21.1979 22.5965 19.3746 20.7837C17.5514 18.9708 15.0785 17.9524 12.5 17.9524C9.92151 17.9524 7.44862 18.9708 5.62535 20.7837C3.80208 22.5965 2.77778 25.0553 2.77778 27.619C2.77778 27.9853 2.63145 28.3365 2.37098 28.5955C2.11051 28.8545 1.75725 29 1.38889 29C1.02053 29 0.667264 28.8545 0.406796 28.5955C0.146329 28.3365 0 27.9853 0 27.619C0.00367618 24.3239 1.32182 21.1648 3.66523 18.8348C6.00863 16.5047 9.18592 15.1941 12.5 15.1905Z" fill="currentColor"/>
          <circle cx="12.5" cy="7.5" r="7.5" fill="currentColor"/>
        </svg>
      `
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-menu {
  width: 308px;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 84px;
  top: 0;
  z-index: 100;
}

/* VERA 标题 */
.vera-title {
  margin-bottom: 80px;
  margin-top: 120px;

  h1 {
    font-family: 'BioRhyme', serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 1.2;
    color: #ffffff;
    margin: 0;
    text-align: left;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
}

/* 导航菜单 */
.navigation {
  flex: 1;
  margin-bottom: 40px;

  .nav-item {
    display: flex;
    align-items: center;
    margin-bottom: 63px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding: 8px 0;
    border-radius: 8px;

    &:hover {
      transform: translateX(8px);
      
      .nav-icon {
        color: #02D8E5;
        transform: scale(1.1);
      }
      
      .nav-text {
        color: #02D8E5;
      }
      
      &::before {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    &.active {
      .nav-icon {
        color: #02D8E5;
        transform: scale(1.05);
      }
      
      .nav-text {
        font-weight: 700;
        color: #02D8E5;
      }
      
      &::after {
        opacity: 1;
        transform: scaleY(1);
      }
    }

    // 悬停背景效果
    &::before {
      content: '';
      position: absolute;
      left: -8px;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, #02D8E5 0%, rgba(165, 98, 154, 0.9) 100%);
      border-radius: 2px;
      opacity: 0;
      transform: scaleX(0);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    // 激活状态指示器
    &::after {
      content: '';
      position: absolute;
      left: -12px;
      top: 50%;
      transform: translateY(-50%) scaleY(0);
      width: 6px;
      height: 30px;
      background: linear-gradient(180deg, #02D8E5 0%, rgba(165, 98, 154, 0.9) 100%);
      border-radius: 3px;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 10px rgba(2, 216, 229, 0.5);
    }

    .nav-icon {
      width: 38px;
      height: 30px;
      margin-right: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      svg {
        width: 100%;
        height: 100%;
        filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));
      }
    }

    .nav-text {
      font-family: 'BioRhyme', serif;
      font-size: 20px;
      font-weight: 200;
      line-height: 1.549;
      color: #ffffff;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
    }

    // 点击动画
    &:active {
      transform: translateX(4px) scale(0.98);
    }
  }
}

/* POST 按钮 */
.post-button {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  .btn-post {
    background: rgba(255, 255, 255, 0.1);
    border: 0.25px solid #ffffff;
    border-radius: 50px;
    color: #ffffff;
    font-family: 'BioRhyme', serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.549;
    padding: 14px 78px;
    cursor: pointer;
    backdrop-filter: blur(7.5px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(2, 216, 229, 0.3), transparent);
      transition: left 0.5s ease;
    }

    &:hover {
      background: rgba(2, 216, 229, 0.2);
      border-color: #02D8E5;
      color: #02D8E5;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(2, 216, 229, 0.3);
      
      &::before {
        left: 100%;
      }
    }

    &.hovered {
      background: rgba(2, 216, 229, 0.2);
      border-color: #02D8E5;
      color: #02D8E5;
    }

    &:active {
      transform: translateY(0px) scale(0.98);
    }
  }
}

/* 用户信息 */
.user-info {
  display: flex;
  align-items: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .user-avatar {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;
    border: 2px solid rgba(2, 216, 229, 0.3);
    transition: all 0.3s ease;

    &:hover {
      border-color: #02D8E5;
      box-shadow: 0 0 15px rgba(2, 216, 229, 0.5);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .user-details {
    flex: 1;

    .user-name {
      font-family: 'BioRhyme', serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.4;
      color: #ffffff;
      margin-bottom: 4px;
      transition: color 0.3s ease;
    }

    .user-email {
      font-family: 'BioRhyme', serif;
      font-size: 14px;
      font-weight: 300;
      line-height: 1.4;
      color: rgba(255, 255, 255, 0.7);
      transition: color 0.3s ease;
    }
  }

  &:hover {
    .user-name {
      color: #02D8E5;
    }
    
    .user-email {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

/* 响应式设计 */
@media (max-width: 1600px) {
  .navigation-menu {
    left: 20px;
  }
}

@media (max-width: 1400px) {
  .navigation-menu {
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .vera-title {
      margin-bottom: 0;
      margin-top: 0;
      margin-right: 20px;

      h1 {
        font-size: 32px;
      }
    }

    .navigation {
      display: flex;
      flex-direction: row;
      flex: 1;
      margin-bottom: 0;
      justify-content: center;

      .nav-item {
        margin-bottom: 0;
        margin-right: 30px;
        flex-direction: column;
        text-align: center;

        .nav-icon {
          margin-right: 0;
          margin-bottom: 8px;
        }

        .nav-text {
          font-size: 12px;
        }
      }
    }

    .post-button {
      margin-bottom: 0;
      margin-right: 20px;

      .btn-post {
        padding: 10px 30px;
        font-size: 16px;
      }
    }

    .user-info {
      .user-avatar {
        width: 40px;
        height: 40px;
      }

      .user-details {
        .user-name {
          font-size: 16px;
        }

        .user-email {
          font-size: 12px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .navigation-menu {
    .navigation {
      .nav-item {
        .nav-text {
          display: none;
        }
      }
    }

    .user-info {
      .user-details {
        display: none;
      }
    }
  }
}
</style> 
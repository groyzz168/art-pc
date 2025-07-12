<template>
  <div class="vera-login">
    <!-- 左上角 Logo -->
    <div class="top-logo">
      <img src="@/assets/figma/logo.png" alt="VERA Logo" class="logo-img" />
    </div>

    <!-- 背景装饰 SVG -->
    <div class="background-decorations">
      <img src="@/assets/figma/login-vector3.svg" class="vector-3" alt="装饰" />
      <img src="@/assets/figma/login-vector5.svg" class="vector-5" alt="装饰" />
      <img src="@/assets/figma/login-vector6.svg" class="vector-6" alt="装饰" />
      <img src="@/assets/figma/login-vector7.svg" class="vector-7" alt="装饰" />
      <div class="ellipse-2"></div>
    </div>

    <!-- 背景 VERA 图片 -->
    <div class="background-logo">
      <img src="@/assets/figma/home-logo.png" alt="VERA Background" class="vera-bg-img" />
    </div>

    <!-- 主要内容 -->
    <div class="main-content">
      <!-- VERA 标题 -->
      <div class="header">
        <h1 class="vera-title">VERA</h1>
        <h2 class="vera-subtitle">What we build is what we become</h2>
      </div>

      <!-- 登录表单 -->
      <div class="login-form">
        <h3 class="form-title">Log in to VERA</h3>
        
        <div class="form-group">
          <input 
            type="email" 
            placeholder="DID: Decentralized Identity"
            class="form-input"
            v-model="email"
          />
        </div>

        <div class="form-group">
          <input 
            type="password" 
            placeholder="Password"
            class="form-input"
            v-model="password"
          />
        </div>

        <div class="form-actions">
          <button class="btn-login" @click="handleLogin">Log in</button>
          
          <div class="divider">
            <span class="divider-line"></span>
            <span class="divider-text">or</span>
            <span class="divider-line"></span>
          </div>

          <button class="btn-signup" @click="handleSignup">Get Your DID Identity</button>
        </div>
      </div>
    </div>

    <!-- 装饰性图标组 -->
    <div class="decoration-groups">
      <div class="group-left">
        <!-- 这里可以添加左侧装饰图标 -->
      </div>
      <div class="group-right">
        <!-- 这里可以添加右侧装饰图标 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VeraLogin',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // 登录逻辑
      console.log('Login:', this.email, this.password);
      // 导航到首页
      this.$router.push('/home');
    },
    handleSignup() {
      // 注册逻辑
      console.log('Signup clicked');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.vera-login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000000;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
}

.top-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 4;
  
  .logo-img {
    width: 198.9296875px;
    height: 78px;
    object-fit: contain;
    opacity: 1;
    border: 0.5px solid transparent;
  }
}

.background-logo {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  user-select: none;
  width: 80vw;
  max-height: 60vh;
  
  .vera-bg-img {
    width: 100%;
    height: auto;
    max-height: 60vh;
    opacity: 0.15;
    object-fit: contain;
    display: block;
    max-width: none;
  }
}

.background-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;

  .vector-3 {
    position: absolute;
    top: 15px;
    left: -105.52px;
    width: 2142.52px;
    height: 363.5px;
    filter: drop-shadow(76px -32px 9.1px rgba(165, 98, 154, 0.31));
    opacity: 0.3;
  }

  .vector-5 {
    position: absolute;
    top: 0;
    left: 843px;
    width: 1150px;
    height: 160.44px;
    filter: blur(43.7px);
    opacity: 0.2;
  }

  .vector-6 {
    position: absolute;
    top: 650.76px;
    left: 653.53px;
    width: 1333.45px;
    height: 485.69px;
    opacity: 0.2;
  }

  .vector-7 {
    position: absolute;
    top: 767px;
    left: 1101px;
    width: 1872px;
    height: 682px;
    opacity: 0.2;
  }

  .ellipse-2 {
    position: absolute;
    top: 806px;
    left: -460px;
    width: 788px;
    height: 397px;
    background: linear-gradient(180deg, rgba(2, 216, 229, 0.1) 0%, rgba(165, 98, 154, 0.2) 42.67%, rgba(63, 37, 59, 0.1) 100%);
    border-radius: 50%;
    box-shadow: 84px 33px 4px 0px rgba(165, 98, 154, 0.1), 94px -49px 4px 0px rgba(165, 98, 154, 0.05);
  }
}

.main-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

.header {
  text-align: center;
  color: $color-white;
  position: relative;
  z-index: 3;

  .vera-title {
    font-family: $font-primary;
    font-weight: $font-weight-bold;
    font-size: $font-size-xxxl;
    line-height: 1.549;
    margin: 0 0 16px 0;
    text-shadow: 0 0 20px rgba(47, 185, 197, 0.5);
    color: $color-white;
  }

  .vera-subtitle {
    font-family: $font-secondary;
    font-weight: $font-weight-bold;
    font-size: $font-size-xl;
    line-height: 1.549;
    margin: 0;
    opacity: 0.9;
  }
}

.login-form {
  width: 557px;
  padding: 40px;
  background: rgba(46, 46, 46, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: $border-radius-md;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  .form-title {
    font-family: $font-primary;
    font-weight: $font-weight-medium;
    font-size: $font-size-xl;
    line-height: 1.549;
    color: $color-white;
    margin: 0 0 20px 0;
    text-align: center;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-input {
    width: 100%;
    height: 83px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: $border-radius-md;
    backdrop-filter: blur(3px);
    color: $color-white;
    font-family: $font-primary;
    font-weight: $font-weight-normal;
    font-size: $font-size-lg;
    line-height: 1.549;
    box-sizing: border-box;

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }

    &:focus {
      outline: none;
      border-color: $color-accent;
      box-shadow: 0 0 0 2px rgba(47, 185, 197, 0.2);
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .form-actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  .btn-login {
    width: 100%;
    height: 83px;
    background: $color-primary;
    border: none;
    border-radius: $border-radius-md;
    backdrop-filter: blur(11.9px);
    color: $color-white;
    font-family: $font-primary;
    font-weight: $font-weight-black;
    font-size: $font-size-xl;
    line-height: 1.549;
    cursor: pointer;
    transition: $transition-normal;

    &:hover {
      background: lighten($color-primary, 10%);
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(9, 130, 137, 0.3);
    }
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 10px 0;

    .divider-line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.4);
    }

    .divider-text {
      color: rgba(255, 255, 255, 0.9);
      font-family: $font-primary;
      font-weight: $font-weight-normal;
      font-size: $font-size-lg;
      line-height: 1.549;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    }
  }

  .btn-signup {
    width: 100%;
    height: 83px;
    background: rgba(82, 46, 76, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: $border-radius-md;
    color: $color-white;
    font-family: $font-primary;
    font-weight: $font-weight-black;
    font-size: $font-size-xl;
    line-height: 1.549;
    cursor: pointer;
    transition: $transition-normal;
    backdrop-filter: blur(5px);

    &:hover {
      background: rgba(82, 46, 76, 0.9);
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-2px);
    }
  }
}

.decoration-groups {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 198.93px;
  height: 78px;
  z-index: 1;
  pointer-events: none;
}
</style> 
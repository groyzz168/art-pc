<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <h1>Figma Vue</h1>
          </router-link>
        </div>
        
        <nav class="nav">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  .logo-link {
    text-decoration: none;
    color: #333;
    
    h1 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}

.nav {
  display: flex;
  gap: 2rem;
  
  .nav-link {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover,
    &.router-link-active {
      color: #007bff;
    }
  }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    gap: 1rem;
  }
}
</style> 
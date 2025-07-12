<template>
  <div class="about">
    <Header />
    
    <main class="main-content">
      <div class="container">
        <h1 class="title">关于我们</h1>
        <div class="content">
          <p>这是一个基于 Figma 设计稿创建的 Vue 3 项目。</p>
          <p>你可以在这里添加更多页面内容。</p>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

.content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}
</style> 
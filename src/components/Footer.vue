<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Figma Vue 项目</h3>
          <p>基于 Figma 设计稿创建的 Vue 3 项目</p>
        </div>
        
        <div class="footer-section">
          <h4>链接</h4>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>技术栈</h4>
          <ul>
            <li>Vue 3</li>
            <li>Vite</li>
            <li>SCSS</li>
            <li>Vue Router</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Figma Vue Demo. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  background: #333;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  h3, h4 {
    margin-bottom: 1rem;
    color: #fff;
  }
  
  p {
    color: #ccc;
    line-height: 1.6;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: #007bff;
        }
      }
    }
  }
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 1rem;
  text-align: center;
  
  p {
    color: #ccc;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style> 
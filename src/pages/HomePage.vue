<template>
  <div class="home-page">
    <div class="welcome-container">
      <div class="welcome-icon">🏡</div>
      <h1>欢迎使用智慧农业系统</h1>
      <p class="subtitle">数据可视化与分析平台</p>
      
      <div class="navigation-cards">
        <el-card class="nav-card" shadow="hover" @click.native="$router.push('/grain')">
          <div class="card-icon grain">🌾</div>
          <div class="card-title">粮食生产</div>
          <div class="card-desc">查看粮食作物种植面积、产量及分布情况</div>
        </el-card>
        
        <el-card class="nav-card" shadow="hover" @click.native="$router.push('/economic')">
          <div class="card-icon economic">🍅</div>
          <div class="card-title">经济作物</div>
          <div class="card-desc">了解经济作物种植状况、产值及发展趋势</div>
        </el-card>
        
        <el-card class="nav-card" shadow="hover" @click.native="$router.push('/agricultural')">
          <div class="card-icon agricultural">🚜</div>
          <div class="card-title">农业概况</div>
          <div class="card-desc">综合查看农业生产条件与基础设施情况</div>
        </el-card>
      </div>
      
      <div class="data-info">
        <i class="el-icon-time"></i> 数据更新时间：2024-07-15
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgba(15, 28, 48, 0.9), rgba(15, 28, 48, 0.7));
}

.welcome-container {
  text-align: center;
  padding: 30px;
  max-width: 1000px;
}

.welcome-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
  background: linear-gradient(to right, #4cd5ce, #43aa8b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
}

.navigation-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.nav-card {
  width: 280px;
  background-color: rgba(26, 48, 89, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3) !important;
}

.card-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.card-icon.grain {
  color: #f9c74f;
}

.card-icon.economic {
  color: #4cd5ce;
}

.card-icon.agricultural {
  color: #90be6d;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.data-info {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .welcome-container {
    padding: 20px;
  }
  
  h1 {
    font-size: 26px;
  }
  
  .subtitle {
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .nav-card {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style> 
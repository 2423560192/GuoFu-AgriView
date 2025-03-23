<template>
  <div class="page-container">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="header-bg"></div>
      <div class="logo pulse-slow">🌾</div>
      <h1 class="title">郭扶镇农业生产条件可视化大屏</h1>
      <div class="date">{{ currentDate }}</div>
    </div>
    
    <!-- 主要内容区域 -->
    <div class="content">
      <!-- 数据概览 -->
      <div class="overview-section fade-in-up">
        <AgriculturalOverview />
      </div>
      
      <!-- 农业化肥使用量数据部分 -->
      <div class="section fade-in-up" style="animation-delay: 0.2s;">
        <div class="section-header">
          <span class="section-title">农用化肥施用量分析</span>
        </div>
        <div class="charts-container">
          <div class="chart-box wide">
            <FertilizerTrend />
          </div>
          <div class="chart-box">
            <FertilizerPie />
          </div>
          <div class="chart-box">
            <FertilizerSankey />
          </div>
          <div class="chart-box wide">
            <FertilizerVillage />
          </div>
        </div>
      </div>
      
      <!-- 其他农业生产消耗量数据部分 -->
      <div class="section fade-in-up" style="animation-delay: 0.4s;">
        <div class="section-header">
          <span class="section-title">其他农业生产消耗分析</span>
        </div>
        <div class="charts-container">
          <div class="chart-box">
            <OtherConsumptionTable />
          </div>
          <div class="chart-box wide">
            <OtherConsumptionVillage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentDate } from '../data/agricultural-data.js'
import FertilizerTrend from '../components/charts/FertilizerTrend.vue'
import FertilizerSankey from '../components/charts/FertilizerSankey.vue'
import FertilizerPie from '../components/charts/FertilizerPie.vue'
import FertilizerVillage from '../components/charts/FertilizerVillage.vue'
import OtherConsumptionTable from '../components/tables/OtherConsumptionTable.vue'
import OtherConsumptionVillage from '../components/charts/OtherConsumptionVillage.vue'
import AgriculturalOverview from '../components/overview/AgriculturalOverview.vue'

export default {
  name: 'AgriculturalPage',
  components: {
    FertilizerTrend,
    FertilizerSankey,
    FertilizerPie,
    FertilizerVillage,
    OtherConsumptionTable,
    OtherConsumptionVillage,
    AgriculturalOverview
  },
  data() {
    return {
      currentDate: getCurrentDate()
    }
  }
}
</script>

<style scoped>
.page-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(76,213,206,0.1) 50%, rgba(0,0,0,0) 100%);
  z-index: 0;
}

.logo {
  font-size: 28px;
  margin-right: 15px;
  z-index: 1;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px rgba(76, 213, 206, 0.8);
  margin: 0;
  z-index: 1;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
}

.title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    rgba(255,255,255,0) 0%, 
    rgba(255,255,255,0.2) 50%, 
    rgba(255,255,255,0) 100%);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
}

.date {
  position: absolute;
  right: 20px;
  font-size: 14px;
  color: #ccc;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow-y: auto;
  gap: 20px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMGYxYzMwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxYTMwNTkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=');
}

.overview-section {
  margin-bottom: 5px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-header {
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  border-left: 4px solid #f9c74f;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

.charts-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.chart-box {
  background-color: rgba(15, 28, 48, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  height: 320px;
  flex: 1;
  min-width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.chart-box.wide {
  flex: 2;
  min-width: 450px;
}

@media screen and (max-width: 1200px) {
  .chart-box, .chart-box.wide {
    flex: 100%;
    min-width: 100%;
  }
  
  .chart-box {
    height: 300px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 20px;
  }
  
  .chart-box {
    height: 280px;
  }
}

/* 添加动画效果 */
.pulse-slow {
  animation: pulse-slow 3s infinite ease-in-out;
}

@keyframes pulse-slow {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

@keyframes fade-in-up {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style> 
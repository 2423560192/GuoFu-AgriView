<template>
  <div class="page-container">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="header-bg"></div>
      <div class="logo pulse-slow">🌾</div>
      <h1 class="title">郭扶镇经济作物生产情况可视化大屏</h1>
      <div class="date">{{ currentDate }}</div>
    </div>
    
    <!-- 数据概览 -->
    <div class="overview-section">
      <EconomicOverview />
    </div>
    
    <!-- 主要内容区域 - 修改为三列布局 -->
    <div class="content">
      <!-- 左侧面板 -->
      <div class="left-panel slide-in">
        <div class="chart-container">
          <EconomicCropsTrend />
        </div>
        <div class="chart-container">
          <EconomicCropsPie />
        </div>
      </div>
      
      <!-- 中间地图区域 - 新增 -->
      <div class="center-panel slide-in-delay">
        <EconomicRegionMap />
      </div>
      
      <!-- 右侧面板 -->
      <div class="right-panel slide-in">
        <div class="chart-container">
          <EconomicCropsTable />
        </div>
        <div class="chart-container">
          <EconomicCropsVillage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentDate } from '../data/agricultural-data.js'
import EconomicOverview from '../components/overview/EconomicOverview.vue'
import EconomicCropsTrend from '../components/charts/EconomicCropsTrend.vue'
import EconomicCropsPie from '../components/charts/EconomicCropsPie.vue'
import EconomicCropsTable from '../components/tables/EconomicCropsTable.vue'
import EconomicCropsVillage from '../components/charts/EconomicCropsVillage.vue'
import EconomicRegionMap from '../components/charts/EconomicRegionMap.vue'

export default {
  name: 'EconomicPage',
  components: {
    EconomicOverview,
    EconomicCropsTrend,
    EconomicCropsPie,
    EconomicCropsTable,
    EconomicCropsVillage,
    EconomicRegionMap
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
  font-size: 26px;
  margin-right: 15px;
  z-index: 1;
}

.title {
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  margin: 0;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
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

.overview-section {
  padding: 15px;
  height: 100px;
}

.content {
  flex: 1;
  display: flex;
  padding: 0 15px 15px;
  gap: 15px;
  overflow: hidden;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMGYxYzMwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxYTMwNTkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=');
}

/* 三列布局 */
.left-panel, .right-panel {
  width: 27%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.center-panel {
  flex: 1;
  min-width: 0; /* 防止flex子项溢出 */
  margin: 0 10px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.center-panel:hover {
  box-shadow: 0 0 30px rgba(76, 213, 206, 0.2);
  transform: translateY(-2px);
}

.chart-container {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.chart-container:hover {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  transform: translateY(-2px);
}

@media screen and (max-width: 1200px) {
  .content {
    flex-direction: column;
  }
  
  .left-panel, .right-panel, .center-panel {
    width: 100%;
    margin: 0;
  }
  
  .left-panel, .right-panel {
    flex-direction: row;
  }
  
  .center-panel {
    min-height: 400px;
    order: -1;
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 20px;
  }
  
  .left-panel, .right-panel {
    flex-direction: column;
  }
  
  .overview-section {
    height: auto;
  }
  
  .chart-container {
    min-height: 300px;
  }
  
  .center-panel {
    min-height: 350px;
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

.slide-in {
  animation: slide-in 0.8s ease-out both;
}

.slide-in-delay {
  animation: slide-in 0.8s ease-out 0.2s both;
}

@keyframes slide-in {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style> 
<template>
  <div class="page-container">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="header-bg"></div>
      <div class="logo pulse-slow">🌾</div>
      <h1 class="title">郭扶镇农业生产条件可视化大屏</h1>
      <div class="date">{{ currentDate }}</div>
    </div>
    
    <!-- 主要内容区域（固定高度，无滚动） -->
    <div class="content-fixed">
      <!-- 数据概览 -->
      <div class="overview-section">
        <AgriculturalOverview />
      </div>
      
      <!-- 图表主区域 -->
      <div class="charts-main-container">
        <!-- 左侧图表区 -->
        <div class="charts-left">
          <div class="chart-item">
            <div class="chart-header">
              <span class="chart-title">农用化肥施用趋势</span>
            </div>
            <div class="chart-content">
              <FertilizerTrend />
            </div>
          </div>
          
          <div class="chart-item">
            <div class="chart-header">
              <span class="chart-title">各村化肥使用量</span>
            </div>
            <div class="chart-content">
              <FertilizerVillage />
            </div>
          </div>
        </div>
        
        <!-- 右侧图表区 -->
        <div class="charts-right">
          <div class="chart-row">
            <div class="chart-item small">
              <div class="chart-header">
                <span class="chart-title">化肥类型分布</span>
              </div>
              <div class="chart-content">
                <FertilizerPie />
              </div>
            </div>
            
            <div class="chart-item small">
              <div class="chart-header">
                <span class="chart-title">化肥使用流向</span>
              </div>
              <div class="chart-content">
                <FertilizerSankey />
              </div>
            </div>
          </div>
          
          <div class="chart-row">
            <div class="chart-item small">
              <div class="chart-header">
                <span class="chart-title">农业生产消耗表</span>
              </div>
              <div class="chart-content">
                <OtherConsumptionTable />
              </div>
            </div>
            
            <div class="chart-item small">
              <div class="chart-header">
                <span class="chart-title">各村农业消耗量</span>
              </div>
              <div class="chart-content">
                <OtherConsumptionVillage />
              </div>
            </div>
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* overflow: clip; */
  background-color: rgba(10, 20, 35, 0.95);
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMGYxYzMwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxYTMwNTkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=');
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

/* 固定高度内容区 */
.content-fixed {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding: 10px;
  gap: 10px;
}

/* 概览区域 */
.overview-section {
  height: 100px;
  flex-shrink: 0;
}

/* 主图表容器 */
.charts-main-container {
  display: flex;
  flex: 1;
  gap: 10px;
  height: calc(100% - 110px);
}

/* 左侧图表区 */
.charts-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 右侧图表区 */
.charts-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* 图表行 */
.chart-row {
  display: flex;
  flex: 1;
  gap: 10px;
}

/* 图表项 */
.chart-item {
  background-color: rgba(15, 28, 48, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

.chart-item.small {
  flex: 1;
}

/* 图表标题 */
.chart-header {
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.chart-title {
  font-size: 14px;
  font-weight: bold;
  color: #f9c74f;
}

/* 图表内容 */
.chart-content {
  flex: 1;
  overflow: hidden;
}

/* 响应式处理 */
@media screen and (max-width: 1200px) {
  .charts-main-container {
    flex-direction: column;
  }
  
  .charts-left, .charts-right {
    width: 100%;
  }
  
  .overview-section {
    height: 180px;
  }
  
  .content-fixed {
    height: auto;
    overflow-y: auto;
  }
  
  .chart-item {
    height: 250px;
  }
}

/* 动画效果 */
.pulse-slow {
  animation: pulse-slow 3s infinite ease-in-out;
}

@keyframes pulse-slow {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style> 
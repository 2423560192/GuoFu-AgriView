<template>
  <div class="data-visualization">
    <!-- 顶部标题 -->
    <div class="header">
      <div class="header-bg"></div>
      <div class="logo">🌾</div>
      <h1 class="title">郭扶镇农作物生产情况可视化大屏</h1>
      <div class="date">{{ currentDate }}</div>
    </div>
    
    <!-- 数据概览 -->
    <div class="overview-section">
      <DataOverview />
    </div>
    
    <!-- 主要内容区域 -->
    <div class="content">
      <!-- 左侧面板 -->
      <div class="left-panel">
        <EconomicCropsPanel />
        <GrainProductionPanel />
      </div>
      
      <!-- 中间地图 -->
      <div class="center-panel">
        <div class="map-container">
          <RegionMap />
        </div>
      </div>
      
      <!-- 右侧面板 -->
      <div class="right-panel">
        <AgriculturalConditionsPanel />
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentDate } from '../data/agricultural-data.js'
import DataOverview from './overview/DataOverview.vue'
import EconomicCropsPanel from './panels/EconomicCropsPanel.vue'
import GrainProductionPanel from './panels/GrainProductionPanel.vue'
import AgriculturalConditionsPanel from './panels/AgriculturalConditionsPanel.vue'
import RegionMap from './charts/RegionMap.vue'

export default {
  name: 'DataVisualization',
  components: {
    DataOverview,
    EconomicCropsPanel,
    GrainProductionPanel,
    AgriculturalConditionsPanel,
    RegionMap
  },
  data() {
    return {
      currentDate: getCurrentDate()
    }
  }
}
</script>

<style scoped>
.data-visualization {
  width: 100%;
  height: 100%;
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

.left-panel, .right-panel {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.center-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.map-container {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.map-container:hover {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 1400px) {
  .content {
    flex-direction: column;
  }
  
  .left-panel, .right-panel {
    width: 100%;
    flex-direction: row;
  }
  
  .center-panel {
    height: 400px;
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
}
</style> 
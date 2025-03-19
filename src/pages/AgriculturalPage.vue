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
      <!-- 左侧地图 -->
      <div class="map-container fade-in-up">
        <RegionMap />
      </div>
      
      <!-- 右侧面板 -->
      <div class="panel-container fade-in-up" style="animation-delay: 0.3s;">
        <AgriculturalConditionsPanel />
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentDate } from '../data/agricultural-data.js'
import RegionMap from '../components/charts/RegionMap.vue'
import AgriculturalConditionsPanel from '../components/panels/AgriculturalConditionsPanel.vue'

export default {
  name: 'AgriculturalPage',
  components: {
    RegionMap,
    AgriculturalConditionsPanel
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
  padding: 15px;
  gap: 15px;
  overflow: hidden;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMGYxYzMwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxYTMwNTkiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=');
}

.map-container {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.map-container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #4cd5ce, #43aa8b, #90be6d, #f9c74f, #f94144);
  z-index: -1;
  border-radius: 10px;
  opacity: 0.3;
  animation: border-glow 3s infinite alternate;
}

@keyframes border-glow {
  0% { opacity: 0.2; }
  100% { opacity: 0.5; }
}

.panel-container {
  width: 50%;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1200px) {
  .content {
    flex-direction: column;
  }
  
  .panel-container {
    width: 100%;
  }
  
  .map-container {
    height: 400px;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 20px;
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
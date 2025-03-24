<template>
  <div class="map-container">
    <div class="map-title">郭扶镇各村经济作物分布示意图</div>
    <div class="map-wrapper">
      <img ref="mapImage" :src="mapImageUrl" class="region-map" alt="郭扶镇地图" />
      
      <!-- 地图上的数据点标记 -->
      <!-- <div v-for="(point, index) in dataPoints" :key="index"
           class="data-point" 
           :style="{
             left: point.x + '%',
             top: point.y + '%',
             backgroundColor: getPointColor(point.value)
           }"
           @mouseover="showTooltip(index, $event)" 
           @mouseleave="hideTooltip">
        <div class="pulse-ring"></div>
      </div> -->
      
      <!-- 悬浮提示框
      <div class="map-tooltip" ref="tooltip" v-show="tooltipVisible" :style="tooltipStyle">
        <div class="tooltip-title">{{ tooltipData.title }}</div>
        <div class="tooltip-content">
          <div class="tooltip-item">
            <span class="item-label">种植面积:</span> 
            <span class="item-value">{{ tooltipData.area }} 亩</span>
          </div>
          <div class="tooltip-item">
            <span class="item-label">同比增长:</span> 
            <span class="item-value" :class="tooltipData.trend >= 0 ? 'up' : 'down'">
              {{ tooltipData.trend > 0 ? '+' : '' }}{{ tooltipData.trend }}%
            </span>
          </div>
        </div>
      </div> -->
    </div>
    
    <div class="map-legend">
      <div class="legend-title">种植面积</div>
      <div class="legend-items">
        <div class="legend-item">
          <div class="legend-color" style="background-color: rgba(255, 84, 84, 0.8)"></div>
          <div class="legend-label">≥ 4000亩</div>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background-color: rgba(255, 149, 5, 0.8)"></div>
          <div class="legend-label">3500-4000亩</div>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background-color: rgba(255, 208, 18, 0.8)"></div>
          <div class="legend-label">3000-3500亩</div>
        </div>
        <div class="legend-item">
          <div class="legend-color" style="background-color: rgba(70, 207, 59, 0.8)"></div>
          <div class="legend-label">< 3000亩</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EconomicRegionMap',
  data() {
    return {
      // 地图图片URL
      mapImageUrl: '/地图.jpg',
      tooltipVisible: false,
      tooltipStyle: {
        left: '0px',
        top: '0px'
      },
      tooltipData: {
        title: '',
        area: 0,
        trend: 0
      },
      // 根据截图实际位置调整的坐标点
      dataPoints: [
        { x: 55, y: 43, village: '平等村', value: 4067.8, trend: 1.2 },
        { x: 72, y: 51, village: '古松村', value: 3567.4, trend: 0.7 },
        { x: 62, y: 55, village: '长岭村', value: 2892.54, trend: 0.5 },
        { x: 74, y: 63, village: '梅子桥村', value: 2675.1, trend: 0.3 },
        { x: 87, y: 53, village: '古松村', value: 2559.9, trend: 1.1 },
        { x: 65, y: 32, village: '安平村', value: 2559.4, trend: 0.9 },
        { x: 36, y: 48, village: '建新村', value: 2515.73, trend: 1.5 },
        { x: 86, y: 32, village: '培山村', value: 2474.6, trend: 0.4 },
        { x: 75, y: 16, village: '骑龙村', value: 3578.3, trend: 0.8 },
        { x: 14, y: 48, village: '狮子村', value: 3467.1, trend: 1.3 },
        { x: 25, y: 65, village: '永胜村', value: 3354.5, trend: 0.7 },
        { x: 73, y: 73, village: '双山村', value: 3289.3, trend: -0.3 },
        { x: 83, y: 68, village: '团结村', value: 3245.6, trend: -0.5 },
        { x: 82, y: 48, village: '三塘村', value: 3212.7, trend: 0.6 },
        { x: 34, y: 85, village: '高庙村', value: 3175.9, trend: 0.3 },
        { x: 63, y: 89, village: '同心村', value: 3156.2, trend: 1.2 },
        { x: 80, y: 84, village: '龙泉村', value: 3134.5, trend: 0.9 },
        { x: 47, y: 75, village: '人和村', value: 3087.6, trend: 0.8 },
        { x: 41, y: 62, village: '柳子村', value: 3054.1, trend: 0.4 },
        { x: 25, y: 94, village: '龙台村', value: 2995.8, trend: -0.2 },
        { x: 67, y: 97, village: '银盆村', value: 2987.3, trend: 0.6 },
        { x: 32, y: 37, village: '龙台村', value: 2943.2, trend: -0.1 },
        { x: 63, y: 69, village: '镇政府', value: 4050.0, trend: 2.8 }
      ]
    }
  },
  methods: {
    getPointColor(value) {
      if (value >= 4000) {
        return 'rgba(255, 84, 84, 0.8)'; // 红色
      } else if (value >= 3500) {
        return 'rgba(255, 149, 5, 0.8)'; // 橙色
      } else if (value >= 3000) {
        return 'rgba(255, 208, 18, 0.8)'; // 黄色
      } else {
        return 'rgba(70, 207, 59, 0.8)'; // 绿色
      }
    },
    showTooltip(index, event) {
      const point = this.dataPoints[index];
      this.tooltipData = {
        title: point.village,
        area: point.value,
        trend: point.trend
      };
      
      // 计算提示框位置
      const rect = this.$refs.mapImage.getBoundingClientRect();
      const containerRect = this.$el.getBoundingClientRect();
      
      const left = (point.x / 100) * rect.width - 60;
      const top = (point.y / 100) * rect.height - 80;
      
      this.tooltipStyle = {
        left: `${left}px`,
        top: `${top}px`
      };
      
      this.tooltipVisible = true;
    },
    hideTooltip() {
      this.tooltipVisible = false;
    }
  }
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.map-title {
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.map-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.region-map {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.data-point {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.data-point:hover {
  transform: translate(-50%, -50%) scale(1.3);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  70% {
    transform: scale(2);
    opacity: 0;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.map-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 8px;
  min-width: 140px;
  z-index: 10;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

.tooltip-title {
  font-size: 14px;
  font-weight: bold;
  color: #4cd5ce;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 4px;
}

.tooltip-content {
  font-size: 12px;
}

.tooltip-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.item-label {
  color: rgba(255, 255, 255, 0.7);
}

.item-value {
  font-weight: bold;
  color: #fff;
}

.item-value.up {
  color: #4cd5ce;
}

.item-value.down {
  color: #ff6b6b;
}

.map-legend {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 6px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 5;
}

.legend-title {
  font-size: 12px;
  color: #fff;
  margin-bottom: 5px;
  text-align: center;
}

.legend-items {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.legend-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.8);
}

@media screen and (max-width: 768px) {
  .map-title {
    font-size: 14px;
  }
  
  .data-point {
    width: 12px;
    height: 12px;
  }
  
  .map-legend {
    bottom: 10px;
    right: 10px;
    padding: 5px;
  }
  
  .legend-title {
    font-size: 10px;
  }
  
  .legend-color {
    width: 10px;
    height: 10px;
  }
  
  .legend-label {
    font-size: 9px;
  }
}
</style> 
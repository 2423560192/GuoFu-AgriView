<template>
  <div class="overview-container">
    <div class="overview-card" v-for="(item, index) in overviewData" :key="index">
      <div class="card-icon" :style="{ backgroundColor: item.color }">
        <i :class="item.icon"></i>
      </div>
      <div class="card-content">
        <div class="card-title">{{ item.title }}</div>
        <div class="card-value">{{ item.value }}</div>
        <div class="card-trend" :class="item.trend > 0 ? 'up' : 'down'">
          <i :class="item.trend > 0 ? 'el-icon-top' : 'el-icon-bottom'"></i>
          <span>{{ Math.abs(item.trend) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EconomicOverview',
  data() {
    return {
      overviewData: [
        {
          title: '2024年经济作物总播种面积',
          value: '51,524.5亩',
          trend: 2.3,
          icon: 'el-icon-s-grid',
          color: 'rgba(76, 213, 206, 0.8)'
        },
        {
          title: '2024年最多播种面积（作物）',
          value: '6,564亩',
          trend: 1.7,
          icon: 'el-icon-s-finance',
          color: 'rgba(144, 190, 109, 0.8)'
        },
        {
          title: '2024年最多播种面积（村）',
          value: '32,658亩',
          trend: 4.5,
          icon: 'el-icon-s-data',
          color: 'rgba(76, 213, 206, 0.8)'
        },
        {
          title: '2024年总作物品种',
          value: '7种',
          trend: 0,
          icon: 'el-icon-s-operation',
          color: 'rgba(67, 170, 139, 0.8)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.overview-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.overview-card {
  flex: 1;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.overview-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 0;
}

.overview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  z-index: 1;
}

.card-icon i {
  font-size: 24px;
  color: #fff;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.card-title {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3px;
}

.card-value {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 3px;
}

.card-trend {
  font-size: 12px;
  display: flex;
  align-items: center;
}

.card-trend.up {
  color: #4cd5ce;
}

.card-trend.down {
  color: #f94144;
}

.card-trend i {
  margin-right: 5px;
}

@media screen and (max-width: 1200px) {
  .overview-container {
    flex-wrap: wrap;
  }
  
  .overview-card {
    flex: 1 1 calc(50% - 15px);
    min-width: 200px;
  }
}

@media screen and (max-width: 768px) {
  .overview-card {
    flex: 1 1 100%;
  }
}
</style> 
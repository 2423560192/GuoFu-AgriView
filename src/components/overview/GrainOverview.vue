<template>
  <div class="overview-container">
    <div class="overview-card" v-for="(item, index) in overviewData" :key="index">
      <div class="card-icon" :style="{ backgroundColor: item.color }">
        <i :class="item.icon"></i>
      </div>
      <div class="card-content">
        <div class="card-title">{{ item.title }}</div>
        <div class="card-value">{{ item.value }}</div>
        <div class="card-trend" :class="item.showPercentage ? 'percentage' : (item.trend > 0 ? 'up' : 'down')">
          <i v-if="!item.showPercentage" :class="item.trend > 0 ? 'el-icon-top' : 'el-icon-bottom'"></i>
          <i v-else class="el-icon-pie-chart"></i>
          <span class="trend-percentage">
            {{ item.showPercentage ? '占比 ' + item.percentValue + '%' : Math.abs(item.trend) + '%' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrainOverview',
  data() {
    return {
      overviewData: [
        {
          title: '2024年粮食总播种面积',
          value: '63,825.7亩',
          trend: 1.05,
          showPercentage: false,
          icon: 'el-icon-s-data',
          color: 'rgba(52, 211, 153, 0.8)'
        },
        {
          title: '2024年粮食总产量',
          value: '35,467.3吨',
          trend: 1.01,
          showPercentage: false,
          icon: 'el-icon-s-grid',
          color: 'rgba(16, 185, 129, 0.8)'
        },
        {
          title: '2024年谷物总播种面积',
          value: '39,307.5亩',
          percentValue: 61.59,
          showPercentage: true,
          icon: 'el-icon-s-finance',
          color: 'rgba(52, 211, 153, 0.8)'
        },
        {
          title: '2024年谷物总产量',
          value: '24,341.8吨',
          percentValue: 68.63,
          showPercentage: true,
          icon: 'el-icon-s-marketing',
          color: 'rgba(16, 185, 129, 0.8)'
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
  gap: 15px;
  width: 100%;
  height: 100%;
}

.overview-card {
  flex: 1;
  background-color: rgba(15, 28, 48, 0.6);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 15px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.overview-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 70%);
  z-index: 0;
}

.overview-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
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
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
}

.card-value {
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
}

.card-trend {
  font-size: 14px;
  display: flex;
  align-items: center;
}

.card-trend.up {
  color: #34d399;
}

.card-trend.down {
  color: #f94144;
}

.card-trend.percentage {
  color: #60a5fa;
}

.card-trend i {
  margin-right: 5px;
}

.trend-percentage {
  font-size: 16px;
  font-weight: bold;
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
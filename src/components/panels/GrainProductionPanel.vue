<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">🌾</div>
      <div class="panel-title">粮食生产情况</div>
    </div>
    <div class="panel-content">
      <div class="responsive-layout">
        <!-- 自适应布局容器 -->
        <div class="chart-item trend-chart">
          <GrainTrend />
        </div>
        <div class="chart-item pyramid-chart">
          <GrainPyramid />
        </div>
        <div class="chart-item table-chart">
          <GrainCropsTable />
        </div>
        <div class="chart-item village-chart">
          <GrainVillage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GrainTrend from '../charts/GrainTrend.vue'
import GrainPyramid from '../charts/GrainPyramid.vue'
import GrainCropsTable from '../tables/GrainCropsTable.vue'
import GrainVillage from '../charts/GrainVillage.vue'

export default {
  name: 'GrainProductionPanel',
  components: {
    GrainTrend,
    GrainPyramid,
    GrainCropsTable,
    GrainVillage
  }
}
</script>

<style scoped>
.panel {
  width: 100%;
  height: 100%;
  background-color: rgba(15, 28, 48, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-header {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(26, 48, 89, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-icon {
  font-size: 18px;
  margin-right: 10px;
}

.panel-title {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

.panel-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: hidden;
}

/* 使用CSS网格实现真正的响应式布局 */
.responsive-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  height: 100%;
  width: 100%;
  overflow: auto;
}

.chart-item {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

/* 调整网格中各个图表项的位置 */
.trend-chart {
  grid-column: 1;
  grid-row: 1;
}

.pyramid-chart {
  grid-column: 2;
  grid-row: 1;
}

.table-chart {
  grid-column: 1;
  grid-row: 2;
}

.village-chart {
  grid-column: 2;
  grid-row: 2;
}

/* 超大屏幕 */
@media screen and (min-width: 1800px) {
  .responsive-layout {
    max-width: 1800px;
    margin: 0 auto;
  }
}

/* 大屏幕 */
@media screen and (max-width: 1400px) {
  .chart-item {
    min-height: 180px;
  }
}

/* 平板电脑和小型笔记本 */
@media screen and (max-width: 1024px) {
  .responsive-layout {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }
  
  .trend-chart, .pyramid-chart, .table-chart, .village-chart {
    grid-column: 1;
  }
  
  .trend-chart {
    grid-row: 1;
  }
  
  .pyramid-chart {
    grid-row: 2;
  }
  
  .table-chart {
    grid-row: 3;
  }
  
  .village-chart {
    grid-row: 4;
  }
  
  .chart-item {
    min-height: 300px;
  }
}

/* 平板竖屏和手机横屏 */
@media screen and (max-width: 768px) {
  .panel-content {
    padding: 8px;
  }
  
  .responsive-layout {
    gap: 8px;
  }
  
  .chart-item {
    min-height: 250px;
    padding: 4px;
  }
}

/* 手机竖屏 */
@media screen and (max-width: 480px) {
  .panel-content {
    padding: 5px;
  }
  
  .responsive-layout {
    gap: 5px;
  }
  
  .chart-item {
    min-height: 220px;
    padding: 3px;
  }
  
  .panel-title {
    font-size: 14px;
  }
  
  .panel-icon {
    font-size: 16px;
  }
}

/* 超小屏幕 */
@media screen and (max-width: 320px) {
  .chart-item {
    min-height: 180px;
  }
}
</style> 
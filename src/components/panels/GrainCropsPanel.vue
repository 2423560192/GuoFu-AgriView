<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">🌾</div>
      <div class="panel-title">粮食生产情况</div>
    </div>
    <div class="panel-content">
      <!-- 自动适应屏幕尺寸的布局 -->
      <div class="responsive-layout">
        <div class="chart-container">
          <GrainTrend />
        </div>
        <div class="chart-container">
          <GrainPyramid />
        </div>
        <div class="chart-container table-container">
          <GrainCropsTable />
        </div>
        <div class="chart-container">
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
  name: 'GrainCropsPanel',
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

/* 响应式布局容器 */
.responsive-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: 100%;
  width: 100%;
}

.chart-container {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.table-container {
  overflow: auto;
}

/* 响应式断点 */
@media screen and (max-width: 1200px) {
  .responsive-layout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

@media screen and (max-width: 900px) {
  .responsive-layout {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(250px, 1fr));
  }
}

@media screen and (max-width: 480px) {
  .panel-content {
    padding: 5px;
  }
  
  .responsive-layout {
    gap: 5px;
  }
  
  .chart-container {
    padding: 3px;
  }
}
</style> 
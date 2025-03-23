<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">📊</div>
      <div class="panel-title">经济作物生产情况</div>
    </div>
    <div class="panel-content">
      <!-- 自动适应屏幕尺寸的布局 -->
      <div class="responsive-layout">
        <div class="chart-container">
          <EconomicCropsTrend />
        </div>
        <div class="chart-container">
          <EconomicCropsPie />
        </div>
        <div class="chart-container table-container">
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
import EconomicCropsTrend from '../charts/EconomicCropsTrend.vue'
import EconomicCropsPie from '../charts/EconomicCropsPie.vue'
import EconomicCropsTable from '../tables/EconomicCropsTable.vue'
import EconomicCropsVillage from '../charts/EconomicCropsVillage.vue'

export default {
  name: 'EconomicCropsPanel',
  components: {
    EconomicCropsTrend,
    EconomicCropsPie,
    EconomicCropsTable,
    EconomicCropsVillage
  }
}
</script>

<style scoped>
.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.panel-header {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 15px;
}

.panel-icon {
  margin-right: 10px;
  font-size: 18px;
}

.panel-title {
  flex: 1;
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
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px;
  min-height: 0; /* 解决Firefox中grid子项溢出的问题 */
}

.table-container {
  padding: 10px 5px 5px 5px;
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
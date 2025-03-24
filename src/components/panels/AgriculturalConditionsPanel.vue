<template>
  <div class="panel">
    <div class="panel-header">农业生产条件</div>
    <div class="panel-content">
      <div class="chart-container">
        <FertilizerTrend />
      </div>
      <div class="chart-container">
        <FertilizerSankey />
      </div>
      <div class="chart-container">
        <FertilizerPie />
      </div>
      <div class="chart-container">
        <FertilizerVillage />
      </div>
      <div class="chart-container consumption-table-container">
        <OtherConsumptionTable />
      </div>
      <div class="chart-container">
        <OtherConsumptionVillage />
      </div>
    </div>
  </div>
</template>

<script>
import FertilizerTrend from '../charts/FertilizerTrend.vue'
import FertilizerSankey from '../charts/FertilizerSankey.vue'
import FertilizerPie from '../charts/FertilizerPie.vue'
import FertilizerVillage from '../charts/FertilizerVillage.vue'
import OtherConsumptionTable from '../tables/OtherConsumptionTable.vue'
import OtherConsumptionVillage from '../charts/OtherConsumptionVillage.vue'

export default {
  name: 'AgriculturalConditionsPanel',
  components: {
    FertilizerTrend,
    FertilizerSankey,
    FertilizerPie,
    FertilizerVillage,
    OtherConsumptionTable,
    OtherConsumptionVillage
  }
}
</script>

<style scoped>
.panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.panel-header {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(260px, 1fr)); /* 增加最小行高 */
  gap: 10px;
  padding: 10px;
  overflow: auto;
  height: calc(100% - 40px); /* 确保内容区域填满剩余空间 */
}

.chart-container {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 专门为消耗表设置更高的最小高度 */
.consumption-table-container {
  min-height: 300px; /* 为表格容器设置更大的最小高度 */
}

@media screen and (max-width: 1400px) {
  .panel-content {
    grid-template-rows: repeat(3, minmax(240px, 1fr));
  }
}

@media screen and (max-width: 992px) {
  .panel-content {
    grid-template-rows: repeat(3, minmax(220px, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .panel-content {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, minmax(250px, auto));
    gap: 8px;
    padding: 8px;
  }
  
  .consumption-table-container {
    min-height: 280px;
  }
}

@media screen and (max-width: 480px) {
  .panel-content {
    grid-template-rows: repeat(6, minmax(220px, auto));
    gap: 6px;
    padding: 6px;
  }
  
  .consumption-table-container {
    min-height: 260px;
  }
  
  .panel-header {
    height: 36px;
    font-size: 14px;
  }
}
</style> 
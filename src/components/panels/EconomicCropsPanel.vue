<template>
  <div class="panel">
    <div class="panel-header">
      <div class="panel-icon">📊</div>
      <div class="panel-title">经济作物生产情况</div>
    </div>
    <div class="panel-content">
      <div class="chart-row">
        <div class="chart-container">
          <EconomicCropsTrend />
        </div>
        <div class="chart-container">
          <EconomicCropsPie />
        </div>
      </div>
      <div class="chart-row">
        <div class="chart-container">
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
  gap: 10px;
}

.chart-row {
  display: flex;
  gap: 10px;
  flex: 1;
}

.chart-container {
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px;
}

@media screen and (max-width: 768px) {
  .chart-row {
    flex-direction: column;
  }
}
</style> 
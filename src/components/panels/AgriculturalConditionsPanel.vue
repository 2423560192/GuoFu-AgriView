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
      <div class="chart-container">
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
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  overflow: auto;
}

.chart-container {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .panel-content {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
}
</style> 
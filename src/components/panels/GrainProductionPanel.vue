<template>
  <div class="panel">
    <div class="panel-header">粮食生产情况</div>
    <div class="panel-content">
      <div class="chart-container">
        <GrainTrend />
      </div>
      <div class="chart-container">
        <GrainPyramid />
      </div>
      <div class="chart-container">
        <GrainTable />
      </div>
      <div class="chart-container">
        <GrainVillage />
      </div>
    </div>
  </div>
</template>

<script>
import GrainTrend from '../charts/GrainTrend.vue'
import GrainPyramid from '../charts/GrainPyramid.vue'
import GrainTable from '../tables/GrainTable.vue'
import GrainVillage from '../charts/GrainVillage.vue'

export default {
  name: 'GrainProductionPanel',
  components: {
    GrainTrend,
    GrainPyramid,
    GrainTable,
    GrainVillage
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
  grid-template-rows: 1fr 1fr;
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
    grid-template-rows: repeat(4, 1fr);
  }
}
</style> 
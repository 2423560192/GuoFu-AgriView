<template>
  <div class="panel">
    <div class="panel-header">农业生产条件</div>
    <div class="panel-content">
      <div class="chart-container left-column">
        <FertilizerTrend />
      </div>
      <div class="chart-container right-column">
        <FertilizerSankey />
      </div>
      <div class="chart-container left-column">
        <FertilizerPie />
      </div>
      <div class="chart-container right-column">
        <FertilizerVillage />
      </div>
      <div class="chart-container left-column consumption-table-container">
        <OtherConsumptionTable />
      </div>
      <div class="chart-container right-column">
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
  /* 调整左右列宽比例，左边略窄，右边略宽 */
  grid-template-columns: 0.95fr 1.05fr;
  grid-template-rows: repeat(3, minmax(260px, 1fr));
  gap: 10px;
  padding: 10px;
  overflow: auto;
  height: calc(100% - 40px);
}

.chart-container {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 左列容器样式 */
.left-column {
  padding-right: 2px; /* 右侧稍微减少内边距 */
}

/* 右列容器样式 */
.right-column {
  padding-left: 2px; /* 左侧稍微减少内边距 */
}

/* 专门为消耗表设置更高的最小高度 */
.consumption-table-container {
  min-height: auto !important; /* 移除最小高度限制 */
  height: auto !important; /* 让高度自适应内容 */
}

@media screen and (max-width: 1400px) {
  .panel-content {
    grid-template-rows: repeat(3, minmax(240px, 1fr));
  }
}

@media screen and (max-width: 1200px) {
  .panel-content {
    /* 在中等屏幕上进一步调整比例 */
    grid-template-columns: 0.93fr 1.07fr;
  }
}

@media screen and (max-width: 992px) {
  .panel-content {
    grid-template-rows: repeat(3, minmax(220px, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .panel-content {
    /* 小屏幕上恢复为单列布局 */
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, minmax(250px, auto));
    gap: 8px;
    padding: 8px;
  }
  
  .left-column, .right-column {
    padding: 0; /* 重置小屏幕上的内边距 */
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
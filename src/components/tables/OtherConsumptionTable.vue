<template>
  <div class="table-wrapper">
    <div class="table-title">其他生产消耗数据</div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="tableHeaderStyle"
      :cell-style="tableCellStyle"
      size="mini"
      border>
      <el-table-column prop="category" label="消耗类别" width="120"></el-table-column>
      <el-table-column prop="2021" label="2021年"></el-table-column>
      <el-table-column prop="2022" label="2022年"></el-table-column>
      <el-table-column prop="2023" label="2023年"></el-table-column>
      <el-table-column prop="2024" label="2024年"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { agriculturalConditionsData } from '../../data/agricultural-data.js'

export default {
  name: 'OtherConsumptionTable',
  data() {
    return {
      tableData: agriculturalConditionsData.otherConsumption,
      tableHeaderStyle: {
        background: '#1a3059',
        color: '#fff',
        fontSize: '12px',
        padding: '5px'
      },
      tableCellStyle: {
        background: '#0c1f3e',
        color: '#fff',
        fontSize: '12px',
        padding: '5px'
      }
    }
  }
}
</script>

<style scoped>
.table-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.table-title {
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 10px;
}

.el-table {
  --el-table-border-color: rgba(255, 255, 255, 0.1);
  --el-table-font-color: #fff;
  --el-table-header-background-color: #1a3059;
  --el-table-row-hover-background-color: #1a3059;
}

/* 自定义滚动条样式 */
:deep(.el-table__body-wrapper::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-thumb) {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-track) {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
</style> 
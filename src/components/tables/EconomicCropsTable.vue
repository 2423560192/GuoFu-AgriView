<template>
  <div class="table-wrapper">
    <div class="table-title">2021-2024年各类经济作物面积</div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="tableHeaderStyle"
      :cell-style="tableCellStyle"
      size="mini"
      border
      :max-height="220">
      <el-table-column prop="category" label="作物类别" width="90" fixed="left"></el-table-column>
      <el-table-column prop="2021" label="2021年面积(亩)" width="110"></el-table-column>
      <el-table-column prop="2022" label="2022年面积(亩)" width="110"></el-table-column>
      <el-table-column prop="2023" label="2023年面积(亩)" width="110"></el-table-column>
      <el-table-column prop="2024" label="2024年面积(亩)" width="110"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { economicCropsData } from '../../data/agricultural-data.js'

export default {
  name: 'EconomicCropsTable',
  data() {
    return {
      tableData: economicCropsData.detailedData,
      tableHeaderStyle: {
        background: '#1a3059',
        color: '#fff',
        fontSize: '12px',
        padding: '5px 0'
      },
      tableCellStyle: {
        background: '#0c1f3e',
        color: '#fff',
        fontSize: '12px',
        padding: '3px'
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
  padding: 5px;
  box-sizing: border-box;
}

.table-title {
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
}

:deep(.el-table) {
  background-color: transparent !important;
  --el-table-border-color: rgba(255, 255, 255, 0.1);
  --el-table-font-color: #fff;
  --el-table-header-background-color: #1a3059;
  --el-table-row-hover-background-color: #1a3059;
  font-size: 12px;
}

:deep(.el-table__header-wrapper) {
  min-height: 30px;
}

:deep(.el-table__header th) {
  height: 30px;
  padding: 3px 0;
}

:deep(.el-table__body td) {
  height: 28px;
  padding: 2px 0;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar) {
  width: 4px;
  height: 4px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-thumb) {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

:deep(.el-table__body-wrapper::-webkit-scrollbar-track) {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

:deep(.el-table--border), :deep(.el-table--group) {
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-table--border::after), :deep(.el-table--group::after) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-table__fixed-right::before), :deep(.el-table__fixed::before) {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

:deep(.el-table .cell) {
  padding-left: 5px;
  padding-right: 5px;
}
</style> 
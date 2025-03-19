<template>
  <div class="table-wrapper">
    <div class="table-title">2021-2024年各类经济作物面积</div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="tableHeaderStyle"
      :cell-style="tableCellStyle"
      size="mini"
      border>
      <el-table-column prop="category" label="作物类别" width="100"></el-table-column>
      <el-table-column prop="2021" label="2021年面积(亩)"></el-table-column>
      <el-table-column prop="2022" label="2022年面积(亩)"></el-table-column>
      <el-table-column prop="2023" label="2023年面积(亩)"></el-table-column>
      <el-table-column prop="2024" label="2024年面积(亩)"></el-table-column>
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
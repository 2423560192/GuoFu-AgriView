<template>
  <div class="chart-wrapper">
    <div class="chart-title">全镇2021-2024年各类经济作物总播种面积</div>
    <!-- 固定高度为200px的容器 -->
    <div class="fixed-height-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="tableHeaderStyle"
        :cell-style="tableCellStyle"
        size="mini"
        border>
        <el-table-column prop="index" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="category" label="各类经济作物" min-width="120"></el-table-column>
        <el-table-column prop="2024" label="2024年面积(亩)" min-width="120" align="right"></el-table-column>
        <el-table-column prop="2023" label="2023年面积(亩)" min-width="120" align="right"></el-table-column>
        <el-table-column prop="2022" label="2022年面积(亩)" min-width="120" align="right"></el-table-column>
        <el-table-column prop="2021" label="2021年面积(亩)" min-width="120" align="right"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EconomicCropsTable',
  data() {
    return {
      tableData: [
        { index: 1, category: '油料', '2024': 6569, '2023': 6502, '2022': 5938, '2021': 5906 },
        { index: 2, category: '棉花', '2024': 0, '2023': 0, '2022': 0, '2021': 0 },
        { index: 3, category: '麻类', '2024': 0, '2023': 0, '2022': 0, '2021': 0 },
        { index: 4, category: '糖料', '2024': 0, '2023': 0, '2022': 0, '2021': 0 },
        { index: 5, category: '烟叶', '2024': 890, '2023': 917, '2022': 900, '2021': 900 },
        { index: 6, category: '中草药材', '2024': 5958, '2023': 5919, '2022': 5914, '2021': 5912 },
        { index: 7, category: '蔬菜及食用菌', '2024': 32684.8, '2023': 33072, '2022': '-', '2021': 30719 },
        { index: 8, category: '瓜果', '2024': 1677.7, '2023': 1170, '2022': '-', '2021': '-' },
        { index: 9, category: '其他农作物', '2024': 3745, '2023': 4066, '2022': 3986, '2021': '-' },
        { index: 10, category: '特种农作物', '2024': 0, '2023': 0, '2022': 0, '2021': '-' },
        { index: 11, category: '食用坚果', '2024': 40, '2023': 40, '2022': '-', '2021': '-' }
      ],
      tableHeaderStyle: {
        background: '#1a3059',
        color: '#fff',
        fontSize: '12px',
        padding: '5px 0',
        textAlign: 'center'
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
.chart-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
}

.chart-title {
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 5px;
  flex-shrink: 0;
}

/* 固定高度的容器 */
.fixed-height-container {
  height: 250px;
  overflow-y: auto;
}

.fixed-height-container::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.fixed-height-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.fixed-height-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

:deep(.el-table) {
  background-color: transparent !important;
  color: #fff;
  width: 100%;
}

:deep(.el-table__inner-wrapper) {
  height: 100%;
}

:deep(.el-table__body-wrapper) {
  overflow-y: auto !important;
}

:deep(.el-table), :deep(.el-table__fixed) {
  max-width: 100%;
}

:deep(.el-table tr), :deep(.el-table th) {
  background-color: transparent !important;
}

:deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
  background-color: rgba(76, 213, 206, 0.1) !important;
}

:deep(.el-table__header-wrapper th) {
  color: #fff;
  background-color: #1a3059 !important;
  padding: 5px 0;
}

:deep(.el-table__body td) {
  height: 25px;
  padding: 2px 0;
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

:deep(.el-table td), :deep(.el-table th.is-leaf) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-table--border td), :deep(.el-table--border th) {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-table .cell) {
  padding-left: 5px;
  padding-right: 5px;
}
</style> 
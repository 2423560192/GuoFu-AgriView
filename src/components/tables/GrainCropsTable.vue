<template>
  <div class="chart-wrapper">
    <div class="chart-title">全镇2021-2024年各类粮食作物播种面积及产量</div>
    <div class="table-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="tableHeaderStyle"
        :cell-style="tableCellStyle"
        size="mini"
        border>
        <el-table-column prop="index" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="category" label="各类粮食作物" min-width="100"></el-table-column>
        <el-table-column label="2024年" align="center">
          <el-table-column prop="2024_area" label="面积(亩)" min-width="100" align="right"></el-table-column>
          <el-table-column prop="2024_yield" label="产量(吨)" min-width="100" align="right"></el-table-column>
        </el-table-column>
        <el-table-column label="2023年" align="center">
          <el-table-column prop="2023_area" label="面积(亩)" min-width="100" align="right"></el-table-column>
          <el-table-column prop="2023_yield" label="产量(吨)" min-width="100" align="right"></el-table-column>
        </el-table-column>
        <el-table-column label="2022年" align="center">
          <el-table-column prop="2022_area" label="面积(亩)" min-width="100" align="right"></el-table-column>
          <el-table-column prop="2022_yield" label="产量(吨)" min-width="100" align="right"></el-table-column>
        </el-table-column>
        <el-table-column label="2021年" align="center">
          <el-table-column prop="2021_area" label="面积(亩)" min-width="100" align="right"></el-table-column>
          <el-table-column prop="2021_yield" label="产量(吨)" min-width="100" align="right"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { grainProductionData } from '../../data/agricultural-data.js'

export default {
  name: 'GrainCropsTable',
  data() {
    return {
      tableData: [
        { 
          index: 1, 
          category: '谷物', 
          '2024_area': 48459, '2024_yield': 23906,
          '2023_area': 48021, '2023_yield': 23695,
          '2022_area': 48250, '2022_yield': 23676,
          '2021_area': 48193, '2021_yield': 23703
        },
        { 
          index: 2, 
          category: '豆类', 
          '2024_area': 7566, '2024_yield': 1233,
          '2023_area': 7462, '2023_yield': 1215,
          '2022_area': 7292, '2022_yield': 1191.5,
          '2021_area': 6683, '2021_yield': 1073
        },
        { 
          index: 3, 
          category: '折粮薯类', 
          '2024_area': 22658, '2024_yield': 9694,
          '2023_area': 22386, '2023_yield': 9576,
          '2022_area': 22391, '2022_yield': 9625,
          '2021_area': 22390, '2021_yield': 9691
        }
      ]
    }
  },
  methods: {
    tableHeaderStyle() {
      return {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: '#fff',
        fontWeight: 'bold',
        padding: '5px 0',
        fontSize: '12px'
      }
    },
    tableCellStyle({row, column, rowIndex, columnIndex}) {
      return {
        backgroundColor: 'transparent',
        color: columnIndex === 1 ? '#f9c74f' : '#fff',
        padding: '3px',
        fontSize: '12px'
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  height: 100%;
  width: 100%;
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

.table-container {
  flex: 1;
  overflow: auto;
  min-height: 150px; /* 确保表格有最小高度 */
}

:deep(.el-table) {
  background-color: transparent !important;
  color: #fff !important;
}

:deep(.el-table__header-wrapper), 
:deep(.el-table__body-wrapper), 
:deep(.el-table__footer-wrapper) {
  background-color: transparent !important;
}

:deep(.el-table__inner-wrapper),
:deep(.el-table__header),
:deep(.el-table__body),
:deep(.el-table__footer) {
  background-color: transparent !important;
}

:deep(.el-table::before) {
  display: none;
}

:deep(.el-table--border) {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-table--border::after) {
  background-color: rgba(255, 255, 255, 0.1);
}

:deep(.el-table--border th), :deep(.el-table--border td) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-table--border td), :deep(.el-table--border th) {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

:deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
  background-color: rgba(76, 213, 206, 0.1) !important;
}

:deep(.el-table .cell) {
  padding-left: 5px;
  padding-right: 5px;
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 12px;
  }
  
  .table-container {
    min-height: 120px;
  }
}
</style> 
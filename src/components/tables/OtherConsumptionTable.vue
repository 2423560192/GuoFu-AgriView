<template>
  <div class="chart-wrapper">
    <div class="chart-title">2021-2024年其他农业生产消耗量</div>
    <div class="table-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="tableHeaderStyle"
        :cell-style="tableCellStyle"
        size="mini"
        border>
        <el-table-column prop="category" label="消耗类别" min-width="140"></el-table-column>
        <el-table-column prop="unit" label="单位" width="80" align="center"></el-table-column>
        <el-table-column prop="2024" label="2024年" min-width="100" align="right">
          <template slot-scope="scope">
            <div class="value-cell">
              <div v-if="scope.row['2024'] > 0" 
                   class="value-bar" 
                   :style="{width: getBarWidth(scope.row, '2024') + '%', backgroundColor: getBarColor(scope.row.category)}">
              </div>
              <span class="value-text">{{ scope.row['2024'] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="2023" label="2023年" min-width="100" align="right">
          <template slot-scope="scope">
            <div class="value-cell">
              <div v-if="scope.row['2023'] > 0" 
                   class="value-bar" 
                   :style="{width: getBarWidth(scope.row, '2023') + '%', backgroundColor: getBarColor(scope.row.category)}">
              </div>
              <span class="value-text">{{ scope.row['2023'] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="2022" label="2022年" min-width="100" align="right">
          <template slot-scope="scope">
            <div class="value-cell">
              <div v-if="scope.row['2022'] > 0" 
                   class="value-bar" 
                   :style="{width: getBarWidth(scope.row, '2022') + '%', backgroundColor: getBarColor(scope.row.category)}">
              </div>
              <span class="value-text">{{ scope.row['2022'] }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="2021" label="2021年" min-width="100" align="right">
          <template slot-scope="scope">
            <div class="value-cell">
              <div v-if="scope.row['2021'] > 0" 
                   class="value-bar" 
                   :style="{width: getBarWidth(scope.row, '2021') + '%', backgroundColor: getBarColor(scope.row.category)}">
              </div>
              <span class="value-text">{{ scope.row['2021'] }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherConsumptionTable',
  data() {
    return {
      tableData: [
        { 
          category: '农用塑料薄膜使用量', 
          unit: '千克',
          '2024': 37306.56, 
          '2023': 37306.56, 
          '2022': 37451, 
          '2021': 37599
        },
        { 
          category: '地膜覆盖面积', 
          unit: '亩',
          '2024': 9245.48, 
          '2023': 9245.48, 
          '2022': 9264, 
          '2021': 9283
        },
        { 
          category: '农用柴油使用量', 
          unit: '千克',
          '2024': 75396.6, 
          '2023': 75396.6, 
          '2022': 75137, 
          '2021': 74873 
        },
        { 
          category: '农药使用量', 
          unit: '千克',
          '2024': 0, 
          '2023': 22808.56, 
          '2022': 22831, 
          '2021': 22854
        }
      ],
      maxValues: {
        '农用塑料薄膜使用量': 40000,
        '地膜覆盖面积': 10000,
        '农用柴油使用量': 80000,
        '农药使用量': 25000
      },
      colorMap: {
        '农用塑料薄膜使用量': 'rgba(249, 199, 79, 0.7)',
        '地膜覆盖面积': 'rgba(144, 190, 109, 0.7)',
        '农用柴油使用量': 'rgba(67, 170, 139, 0.7)',
        '农药使用量': 'rgba(77, 144, 142, 0.7)'
      }
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
    tableCellStyle({row, column}) {
      return {
        backgroundColor: 'transparent',
        color: column.property === 'category' ? '#f9c74f' : '#fff',
        padding: '3px',
        fontSize: '12px'
      }
    },
    getBarWidth(row, year) {
      if (row[year] <= 0) return 0;
      const maxValue = this.maxValues[row.category] || 100000;
      return (row[year] / maxValue) * 100;
    },
    getBarColor(category) {
      return this.colorMap[category] || 'rgba(249, 199, 79, 0.7)';
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
  min-height: 150px;
}

.value-cell {
  position: relative;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.value-bar {
  position: absolute;
  height: 70%;
  left: 0;
  border-radius: 2px;
  z-index: 0;
}

.value-text {
  position: relative;
  z-index: 1;
  padding-right: 5px;
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
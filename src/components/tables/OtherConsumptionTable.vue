<template>
  <div class="table-wrapper">
    <div class="table-header">农业生产消耗表</div>
    <div class="table-scroll-container">
      <table class="consumption-table">
        <thead>
          <tr>
            <th class="item-col">项目</th>
            <th class="unit-col">单位</th>
            <th v-for="year in years" :key="year">{{ year }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td class="item-name">{{ item.name }}</td>
            <td class="unit">{{ item.unit }}</td>
            <td v-for="(value, yearIndex) in item.values" :key="yearIndex" class="value-cell">
              <div class="value-content">
                <div 
                  class="value-bar" 
                  :style="{ 
                    width: getBarWidth(value), 
                    backgroundColor: getBarColor(index)
                  }"
                ></div>
                <span class="value-text">{{ formatNumber(value) }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherConsumptionTable',
  data() {
    return {
      years: ['2021年', '2022年', '2023年', '2024年'],
      tableData: [
        {
          name: '农用塑料薄膜使用量',
          unit: '千克',
          values: [37599, 37451, 37306.56, 37306.56]
        },
        {
          name: '地膜覆盖面积',
          unit: '亩',
          values: [9283, 9264, 9245.48, 9245.48]
        },
        {
          name: '农用柴油使用量',
          unit: '千克',
          values: [74873, 75137, 75396.60, 75396.60]
        },
        {
          name: '农药使用量',
          unit: '千克',
          values: [22854, 22831, 22808.56, 0]
        }
      ],
      colors: ['#43aa8b', '#90be6d', '#f9c74f', '#f3722c'],
      maxValue: 0
    };
  },
  created() {
    // 计算所有数据中的最大值
    this.maxValue = this.getOverallMaxValue();
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString('zh-CN', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
      });
    },
    getOverallMaxValue() {
      let max = 0;
      this.tableData.forEach(item => {
        const rowMax = Math.max(...item.values);
        if (rowMax > max) {
          max = rowMax;
        }
      });
      return max;
    },
    getBarWidth(value) {
      // 使用整个表格的最大值作为基准
      const percentage = (value / this.maxValue) * 100;
      return `${Math.max(percentage, 3)}%`;
    },
    getBarColor(index) {
      return this.colors[index % this.colors.length];
    }
  }
};
</script>

<style scoped>
.table-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  /* 确保表格在所有屏幕尺寸都有合适高度 */
  min-height: 280px;
}

.table-header {
  font-size: 14px;
  color: #f9c74f;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
}

.table-scroll-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 230px; /* 确保表格高度足够显示内容 */
  max-height: 100%; /* 限制最大高度为容器的100% */
  /* 自定义滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.table-scroll-container::-webkit-scrollbar {
  width: 4px;
}

.table-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.table-scroll-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.consumption-table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
  font-size: 14px;
  table-layout: fixed; /* 提高表格渲染性能 */
}

.consumption-table th {
  padding: 8px 12px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1;
}

.consumption-table td {
  padding: 10px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.consumption-table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.item-col {
  width: 25%;
}

.unit-col {
  width: 10%;
}

.item-name {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.unit {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}

.value-cell {
  padding: 8px 10px !important;
}

.value-content {
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
}

.value-bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 2px;
  opacity: 0.3;
  z-index: 0;
  transition: width 0.5s ease;
}

.value-text {
  position: relative;
  z-index: 1;
  padding-left: 4px;
}

@media screen and (max-width: 1200px) {
  .table-wrapper {
    min-height: 250px;
  }
}

@media screen and (max-width: 992px) {
  .table-wrapper {
    min-height: 240px;
  }
}

@media screen and (max-width: 768px) {
  .consumption-table {
    font-size: 12px;
  }
  
  .consumption-table th,
  .consumption-table td {
    padding: 6px 8px;
  }
  
  .value-content {
    height: 20px;
  }
  
  .table-wrapper {
    min-height: 220px;
  }
  
  .table-scroll-container {
    min-height: 180px;
  }
  
  .table-header {
    font-size: 13px;
  }
}

@media screen and (max-width: 480px) {
  .consumption-table {
    font-size: 11px;
  }
  
  .consumption-table th,
  .consumption-table td {
    padding: 5px 6px;
  }
  
  .table-wrapper {
    min-height: 200px;
  }
  
  .table-scroll-container {
    min-height: 160px;
  }
  
  .table-header {
    font-size: 12px;
    margin-bottom: 5px;
  }
}
</style> 
<template>
  <div class="table-wrapper">
    <div class="table-header">2021-2024其他农业生产消耗量表格</div>
    <div class="table-scroll-container">
      <table class="consumption-table">
        <thead>
          <tr>
            <th class="item-col">项目</th>
            <th class="unit-col">单位</th>
            <th v-for="year in years" :key="year" class="year-col">{{ year }}</th>
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
                <span class="value-text">{{ formatValueDisplay(value) }}</span>
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
      // 年份从新到旧排列
      years: ['2024年', '2023年', '2022年', '2021年'],
      tableData: [
        {
          name: '农用塑料薄膜使用量',
          unit: '千克',
          // 顺序对应上面的年份顺序：2024, 2023, 2022, 2021
          values: [37306.56, 37306.56, 37451, 37599]
        },
        {
          name: '地膜覆盖面积',
          unit: '亩',
          values: [9245.48, 9245.48, 9264, 9283]
        },
        {
          name: '农用柴油使用量',
          unit: '千克',
          values: [75396.60, 75396.60, 75137, 74873]
        },
        {
          name: '农药使用量',
          unit: '千克',
          values: [0, 22808.56, 22831, 22854]
        }
      ],
      colors: ['#43aa8b', '#90be6d', '#f9c74f', '#f3722c'],
      maxValue: 0,
      displayMode: 'normal' // 'normal' or 'compact'
    };
  },
  created() {
    // 计算所有数据中的最大值
    this.maxValue = this.getOverallMaxValue();
    
    // 检测屏幕宽度，设置显示模式
    this.setDisplayMode();
    window.addEventListener('resize', this.setDisplayMode);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setDisplayMode);
  },
  methods: {
    formatNumber(num) {
      return num.toLocaleString('zh-CN', {
        minimumFractionDigits: num % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
      });
    },
    // 简化大数字显示
    formatValueDisplay(value) {
      if (value === 0) return "0";
      if (this.displayMode === 'compact' && value >= 10000) {
        return (value / 10000).toFixed(1) + '万';
      } else if (this.displayMode === 'compact' && value >= 1000) {
        return (value / 1000).toFixed(1) + '千';
      }
      return this.formatNumber(value);
    },
    getOverallMaxValue() {
      let max = 0;
      this.tableData.forEach(item => {
        const rowMax = Math.max(...item.values.filter(val => val > 0)); // 排除0值
        if (rowMax > max) {
          max = rowMax;
        }
      });
      return max;
    },
    getBarWidth(value) {
      if (value === 0) return "0%"; // 值为0不显示条形
      // 使用整个表格的最大值作为基准
      const percentage = (value / this.maxValue) * 100;
      return `${Math.max(percentage, 3)}%`;
    },
    getBarColor(index) {
      return this.colors[index % this.colors.length];
    },
    setDisplayMode() {
      // 根据屏幕宽度决定是否使用紧凑显示模式
      this.displayMode = window.innerWidth < 1200 ? 'compact' : 'normal';
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
}

.table-header {
  font-size: 14px;
  /* color: #f9c74f; */
  text-align: center;
  margin-bottom: 5px; /* 减少顶部空间 */
  /* font-weight: bold; */
  flex-shrink: 0;
}

.table-scroll-container {
  flex: 1;
  overflow: visible; /* 改为可见，不使用滚动 */
  display: flex;
  flex-direction: column;
}

.consumption-table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
  font-size: 13px;
  table-layout: fixed; /* 提高表格渲染性能 */
}

.consumption-table th {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 6px 8px; /* 减少内边距 */
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1;
}

.consumption-table td {
  padding: 6px 8px; /* 减少内边距 */
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

.year-col {
  width: 16.25%;
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
  padding: 6px 8px !important; /* 减少内边距 */
  text-align: right;
}

.value-content {
  position: relative;
  height: 22px; /* 减少高度 */
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
}

@media screen and (max-width: 768px) {
  .consumption-table {
    font-size: 11px;
  }
  
  .consumption-table th,
  .consumption-table td {
    padding: 5px 4px;
  }
  
  .value-content {
    height: 20px;
  }
  
  .value-cell {
    padding: 5px 4px !important;
  }
}

@media screen and (max-width: 480px) {
  .consumption-table {
    font-size: 10px;
  }
  
  .consumption-table th,
  .consumption-table td {
    padding: 4px 2px;
  }
  
  .value-content {
    height: 18px;
  }
  
  .table-header {
    font-size: 12px;
    margin-bottom: 3px;
  }
  
  .item-col {
    width: 20%;
  }
  
  .unit-col {
    width: 8%;
  }
  
  .year-col {
    width: 18%;
  }
}
</style> 
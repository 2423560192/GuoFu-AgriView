<template>
  <div class="chart-wrapper">
    <div class="chart-title">各村2024年农业生产消耗量</div>
    <div class="chart-tabs">
      <div 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="['tab-item', { active: activeTabIndex === index }]"
        @click="activeTabIndex = index">
        {{ tab.label }}
      </div>
    </div>
    <div class="fixed-height-container">
      <div ref="chart" class="chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherConsumptionVillage',
  data() {
    return {
      chart: null,
      activeTabIndex: 0,
      tabs: [
        { label: '农用塑料薄膜使用量', unit: '千克' },
        { label: '地膜覆盖面积', unit: '亩' },
        { label: '农用柴油使用量', unit: '千克' }
      ],
      consumptionData: {
        '农用塑料薄膜使用量': [
          { name: '骑龙村', value: 3025.29 },
          { name: '平等村', value: 3025.29 },
          { name: '同心村', value: 2018.19 },
          { name: '五星村', value: 2017.19 },
          { name: '三塘村', value: 2017.19 },
          { name: '翻身村', value: 2017.19 },
          { name: '古松村', value: 2016.19 },
          { name: '垮山村', value: 2016.19 },
          { name: '长岭村', value: 2016.19 },
          { name: '梅子村', value: 2016.19 },
          { name: '龙台村', value: 2016.19 },
          { name: '永胜村', value: 2016.19 },
          { name: '龙泉村', value: 2016.19 },
          { name: '人和村', value: 2016.19 },
          { name: '安平村', value: 1008.10 },
          { name: '建新村', value: 1008.10 },
          { name: '狮子村', value: 1008.10 },
          { name: '双山村', value: 1008.10 },
          { name: '高庙村', value: 1008.10 },
          { name: '团结村', value: 1008.10 },
          { name: '银盆村', value: 1008.10 }
        ],
        '地膜覆盖面积': [
          { name: '龙泉村', value: 918.16 },
          { name: '高庙村', value: 795.40 },
          { name: '骑龙村', value: 673.65 },
          { name: '同心村', value: 658.68 },
          { name: '平等村', value: 658.68 },
          { name: '五星村', value: 490.02 },
          { name: '梅子村', value: 490.00 },
          { name: '人和村', value: 459.08 },
          { name: '团结村', value: 444.11 },
          { name: '长岭村', value: 428.14 },
          { name: '三塘村', value: 367.26 },
          { name: '垮山村', value: 367.00 },
          { name: '古松村', value: 351.00 },
          { name: '安平村', value: 336.00 },
          { name: '永胜村', value: 305.00 },
          { name: '狮子村', value: 275.45 },
          { name: '银盆村', value: 275.45 },
          { name: '翻身村', value: 245.51 },
          { name: '建新村', value: 245.50 },
          { name: '双山村', value: 245.51 },
          { name: '龙台村', value: 214.57 }
        ],
        '农用柴油使用量': [
          { name: '同心村', value: 4554.68 },
          { name: '五星村', value: 4047.94 },
          { name: '垮山村', value: 4047.94 },
          { name: '翻身村', value: 4047.94 },
          { name: '骑龙村', value: 4047.94 },
          { name: '平等村', value: 4047.94 },
          { name: '长岭村', value: 4047.94 },
          { name: '建新村', value: 4047.90 },
          { name: '龙台村', value: 4047.94 },
          { name: '双山村', value: 4047.94 },
          { name: '高庙村', value: 4047.94 },
          { name: '龙泉村', value: 4047.94 },
          { name: '人和村', value: 4047.94 },
          { name: '古松村', value: 3036.45 },
          { name: '三塘村', value: 3036.45 },
          { name: '安平村', value: 3036.00 },
          { name: '狮子村', value: 3036.45 },
          { name: '永胜村', value: 3036.45 },
          { name: '团结村', value: 3036.45 },
          { name: '梅子村', value: 2023.97 },
          { name: '银盆村', value: 2023.97 }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.handleResize)
    this.$watch('activeTabIndex', this.updateChart)
    
    if (window.ResizeObserver) {
      this.observer = new ResizeObserver(() => {
        this.handleResize()
      })
      this.observer.observe(this.$el)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (this.observer) {
      this.observer.disconnect()
    }
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      if (this.chart) {
        this.chart.dispose()
      }
      this.chart = this.$echarts.init(this.$refs.chart)
      this.updateChart()
    },
    updateChart() {
      if (!this.chart) return
      
      const activeTab = this.tabs[this.activeTabIndex]
      const activeData = this.consumptionData[activeTab.label]
      
      // 对数据进行排序（从大到小）
      const sortedData = [...activeData].sort((a, b) => b.value - a.value)
      
      // 将数据转换为适合条形图的格式
      const villages = sortedData.map(item => item.name)
      const values = sortedData.map(item => item.value)
      
      // 设置固定高度为600px，确保可以容纳所有村庄数据
      this.$refs.chart.style.height = '600px'
      
      // 获取容器宽度决定是否显示完整村名
      const containerWidth = this.$el.clientWidth
      const showFullName = containerWidth > 350
      
      // 定义图表颜色
      let itemColor
      switch(this.activeTabIndex) {
        case 0: // 农用塑料薄膜
          itemColor = ['rgba(76, 213, 206, 0.3)', 'rgba(76, 213, 206, 0.8)']
          break
        case 1: // 地膜覆盖面积
          itemColor = ['rgba(90, 190, 109, 0.3)', 'rgba(90, 190, 109, 0.8)']
          break
        case 2: // 农用柴油
          itemColor = ['rgba(248, 150, 30, 0.3)', 'rgba(248, 150, 30, 0.8)']
          break
        default:
          itemColor = ['rgba(249, 199, 79, 0.3)', 'rgba(249, 199, 79, 0.8)']
      }
      
      const option = {
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            return `${params[0].name}: ${params[0].value} ${activeTab.unit}`
          },
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: showFullName ? '25%' : '20%',
          right: '5%',
          bottom: '3%',
          top: '3%',
          containLabel: false
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: villages,
          axisLabel: {
            color: '#fff',
            fontSize: containerWidth < 400 ? 10 : 12,
            formatter: function(value) {
              if (!showFullName && value.length > 3) {
                return value.substring(0, 3)
              }
              return value
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: activeTab.label,
            type: 'bar',
            data: values,
            barWidth: '60%',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: itemColor[0] },
                { offset: 1, color: itemColor[1] }
              ])
            },
            label: {
              show: containerWidth > 300,
              position: 'right',
              color: '#fff',
              fontSize: containerWidth < 400 ? 9 : 10,
              formatter: '{c} ' + activeTab.unit
            }
          }
        ]
      }
      
      this.chart.setOption(option, true)
    },
    handleResize() {
      if (this.chart) {
        this.chart.dispose()
        this.initChart()
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

.chart-tabs {
  display: flex;
  margin-bottom: 10px;
  overflow-x: auto;
  flex-shrink: 0;
}

.chart-tabs::-webkit-scrollbar {
  height: 3px;
}

.chart-tabs::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.chart-tabs::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.tab-item {
  padding: 5px 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  border-radius: 12px;
  white-space: nowrap;
  transition: all 0.2s;
  background-color: rgba(0, 0, 0, 0.2);
  margin-right: 5px;
}

.tab-item.active {
  color: #fff;
  background-color: rgba(249, 199, 79, 0.3);
  box-shadow: 0 2px 8px rgba(249, 199, 79, 0.2);
}

.fixed-height-container {
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
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

.chart {
  width: 100%;
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 12px;
  }
  
  .tab-item {
    font-size: 10px;
    padding: 4px 8px;
  }
  
  .fixed-height-container {
    height: 200px;
  }
}
</style> 
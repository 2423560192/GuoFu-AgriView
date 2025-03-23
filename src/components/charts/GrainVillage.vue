<template>
  <div class="chart-container">
    <div class="chart-title">各村2024年粮食播种面积</div>
    <div ref="chartRef" class="echarts-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'GrainVillage',
  data() {
    return {
      chart: null,
      villageData: [
        { name: '龙泉村', value: 5358.2 },
        { name: '梅子村', value: 5297.1 },
        { name: '高庙村', value: 4853.2 },
        { name: '骑龙村', value: 4722.1 },
        { name: '平等村', value: 4469.2 },
        { name: '同心村', value: 4457.2 },
        { name: '人和村', value: 4269.2 },
        { name: '五星村', value: 4039.6 },
        { name: '长岭村', value: 3935.1 },
        { name: '三塘村', value: 3884.2 },
        { name: '双山村', value: 3774.2 },
        { name: '古松村', value: 3696.2 },
        { name: '永胜村', value: 3459.1 },
        { name: '团结村', value: 3442.2 },
        { name: '建新村', value: 3357.1 },
        { name: '翻身村', value: 3257.6 },
        { name: '狮子村', value: 2849.1 },
        { name: '银盆村', value: 2532.1 },
        { name: '龙台村', value: 2481.1 },
        { name: '安平村', value: 2309.1 },
        { name: '垮山村', value: 2240.1 }
      ]
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.resizeChart)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeChart)
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartRef)
      this.updateChart()
    },
    
    updateChart() {
      if (!this.chart) return
      
      // 对数据进行排序（从大到小）
      const sortedData = [...this.villageData].sort((a, b) => b.value - a.value)
      
      // 提取村名和数值为单独数组
      const villageNames = sortedData.map(item => item.name)
      const villageValues = sortedData.map(item => item.value)
      
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: '{b}: {c} 亩'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff',
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
          data: villageNames,
          axisLabel: {
            color: '#fff',
            fontSize: 11,
            interval: 0,
            width: 80,
            overflow: 'truncate'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        series: [
          {
            name: '播种面积',
            type: 'bar',
            barWidth: '60%',
            data: villageValues,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#4cd5ce' },
                { offset: 1, color: '#16a6b5' }
              ])
            },
            label: {
              show: true,
              position: 'right',
              formatter: '{c} 亩',
              fontSize: 11,
              color: '#fff'
            }
          }
        ]
      }
      
      this.chart.setOption(option)
    },
    
    resizeChart() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 0;
  box-sizing: border-box;
}

.chart-title {
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 15px 0;
}

.echarts-container {
  width: 100%;
  flex: 1;
  position: relative;
}

@media screen and (max-width: 768px) {
  .chart-title {
    font-size: 15px;
    margin: 5px 0 10px 0;
  }
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 14px;
    margin: 3px 0 8px 0;
  }
}
</style> 
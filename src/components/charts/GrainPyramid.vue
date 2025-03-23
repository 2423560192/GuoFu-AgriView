<template>
  <div class="chart-container">
    <!-- 年份选择器 -->
    <div class="year-selector">
      <div 
        v-for="year in years" 
        :key="year" 
        :class="['year-tab', { active: currentYear === year }]" 
        @click="changeYear(year)"
      >
        {{ year }}年
      </div>
    </div>
    
    <!-- 自定义标题 -->
    <div class="chart-title">{{ currentYear }}年粮食作物占比</div>
    
    <!-- ECharts漏斗图 -->
    <div ref="chartRef" class="echarts-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'GrainPyramid',
  data() {
    return {
      currentYear: '2024',
      years: ['2024', '2023', '2022', '2021'],
      dataMap: {
        '2024': { grain: 61.59, beans: 9.62, potato: 28.80 },
        '2023': { grain: 61.67, beans: 9.58, potato: 28.75 },
        '2022': { grain: 61.91, beans: 9.36, potato: 28.73 },
        '2021': { grain: 62.37, beans: 8.65, potato: 28.98 }
      },
      chart: null
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
    
    changeYear(year) {
      this.currentYear = year
      this.updateChart()
    },
    
    updateChart() {
      if (!this.chart) return
      
      const data = [
        {
          name: '谷物',
          value: this.dataMap[this.currentYear].grain,
          num: this.dataMap[this.currentYear].grain.toFixed(2),
          ratio: this.dataMap[this.currentYear].grain.toFixed(2) + '%',
          itemStyle: { color: '#f9c74f' }
        },
        {
          name: '薯类',
          value: this.dataMap[this.currentYear].potato,
          num: this.dataMap[this.currentYear].potato.toFixed(2),
          ratio: this.dataMap[this.currentYear].potato.toFixed(2) + '%',
          itemStyle: { color: '#4cd5ce' }
        },
        {
          name: '豆类',
          value: this.dataMap[this.currentYear].beans,
          num: this.dataMap[this.currentYear].beans.toFixed(2),
          ratio: this.dataMap[this.currentYear].beans.toFixed(2) + '%',
          itemStyle: { color: '#90be6d' }
        }
      ]
      
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: function(params) {
            return `${params.marker}${params.name}：${params.data.num}%`
          }
        },
        legend: {
          data: ['谷物', '薯类', '豆类'],
          orient: 'horizontal',
          left: '5%',
          bottom: '5%',
          itemWidth: 15,
          itemHeight: 10,
          itemGap: 10,
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          itemStyle: {
            borderWidth: 0
          }
        },
        series: [
          {
            name: '占比',
            type: 'funnel',
            left: 'center',
            top: 20,
            bottom: '15%',
            width: '60%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
              position: 'right',
              formatter: function(params) {
                return `{b|${params.data.num}%}\n{c|占比${params.data.ratio}}`
              },
              rich: {
                b: {
                  color: '#fff',
                  lineHeight: 30,
                  fontWeight: "bold",
                  fontSize: 16
                },
                c: {
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 20,
                  fontSize: 12,
                  padding: [0, 0]
                }
              }
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              borderColor: "rgba(255,255,255,0.5)",
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 18
              }
            },
            data: data
          },
          {
            name: '占比',
            type: 'funnel',
            left: 'center',
            top: 20,
            bottom: '15%',
            width: '60%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
              position: 'inside',
              formatter: '{b}',
              fontSize: 14,
              color: '#fff'
            },
            itemStyle: {
              opacity: 1,
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 16
              }
            },
            data: data,
            z: 100
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

.year-selector {
  display: flex;
  justify-content: center;
  padding: 5px 0;
}

.chart-title {
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0 15px 0;
}

.year-tab {
  padding: 4px 10px;
  margin: 0 5px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.year-tab:hover {
  color: #fff;
  background: rgba(76, 213, 206, 0.1);
}

.year-tab.active {
  color: #4cd5ce;
  font-weight: bold;
  border: 1px solid rgba(76, 213, 206, 0.5);
}

.echarts-container {
  width: 100%;
  flex: 1;
  position: relative;
}

@media screen and (max-width: 768px) {
  .year-tab {
    padding: 3px 8px;
    font-size: 12px;
  }
  
  .chart-title {
    font-size: 15px;
    margin: 5px 0 10px 0;
  }
}

@media screen and (max-width: 480px) {
  .year-tab {
    padding: 2px 6px;
    margin: 0 3px;
    font-size: 11px;
  }
  
  .chart-title {
    font-size: 14px;
    margin: 3px 0 8px 0;
  }
}
</style> 
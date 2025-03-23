<template>
  <div class="chart-wrapper">
    <div class="year-tabs">
      <div 
        v-for="year in years" 
        :key="year" 
        :class="['year-tab', { active: currentYear === year }]" 
        @click="currentYear = year"
      >
        {{ year }}年
      </div>
    </div>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { grainProductionData } from '../../data/agricultural-data.js'

export default {
  name: 'GrainPyramid',
  data() {
    return {
      chart: null,
      currentYear: '2024',
      years: ['2024', '2023', '2022', '2021'],
      pyramidData: {
        '2024': grainProductionData.distribution2024,
        '2023': grainProductionData.distribution2023,
        '2022': grainProductionData.distribution2022,
        '2021': grainProductionData.distribution2021
      }
    }
  },
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (this.chart) {
      this.chart.dispose()
    }
  },
  watch: {
    currentYear() {
      this.updateChart()
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      this.updateChart()
    },
    updateChart() {
      // 获取当前年份的数据
      const data = this.pyramidData[this.currentYear]
      
      const option = {
        title: {
          text: `${this.currentYear}年粮食作物面积占比`,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center',
          top: 5
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '面积占比',
            type: 'funnel',
            width: '80%',
            height: '80%',
            left: '10%',
            top: '15%',
            minSize: '0%',
            maxSize: '100%',
            sort: 'none',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
              formatter: '{b} {c}%',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#fff'
            },
            itemStyle: {
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 16
              },
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: data
          }
        ],
        color: ['#f9c74f', '#90be6d', '#43aa8b']
      }
      
      this.chart.setOption(option, true)
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize()
        
        // 响应式调整
        const containerWidth = this.$refs.chart.clientWidth
        if (containerWidth < 300) {
          this.chart.setOption({
            series: [{
              width: '90%',
              left: '5%',
              label: {
                fontSize: 12
              }
            }]
          })
        } else {
          this.chart.setOption({
            series: [{
              width: '80%',
              left: '10%',
              label: {
                fontSize: 14
              }
            }]
          })
        }
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
  padding: 0 5px;
  box-sizing: border-box;
}

.year-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5px;
  margin-top: 5px;
}

.year-tab {
  padding: 4px 8px;
  cursor: pointer;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  margin: 2px;
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

.chart {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 480px) {
  .year-tab {
    padding: 3px 6px;
    font-size: 10px;
    margin: 1px;
  }
  
  .chart-wrapper {
    padding: 0 3px;
  }
}
</style> 
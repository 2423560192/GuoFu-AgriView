<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { grainProductionData } from '../../data/agricultural-data.js'

export default {
  name: 'GrainVillage',
  data() {
    return {
      chart: null
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
  methods: {
    initChart() {
      // 对数据进行排序
      const sortedData = [...grainProductionData.villageData2024].sort((a, b) => b.area - a.area)
      
      this.chart = this.$echarts.init(this.$refs.chart)
      const option = {
        title: {
          text: '2024年各村粮食面积',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '面积(亩)',
          nameTextStyle: {
            color: '#fff'
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
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
          data: sortedData.map(item => item.village),
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            alignWithLabel: true
          }
        },
        series: [
          {
            name: '粮食面积',
            type: 'bar',
            data: sortedData.map(item => item.area),
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#f9c74f' },
                { offset: 1, color: '#f8961e' }
              ])
            }
          }
        ]
      }
      this.chart.setOption(option)
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize()
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
}

.chart {
  flex: 1;
}
</style> 
<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { agriculturalConditionsData } from '../../data/agricultural-data.js'

export default {
  name: 'FertilizerTrend',
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
      this.chart = this.$echarts.init(this.$refs.chart)
      const option = {
        title: {
          text: '2021-2024年化肥用量趋势',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: agriculturalConditionsData.fertilizerUsage.years,
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '用量(吨)',
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
        series: [
          {
            name: '化肥用量',
            type: 'line',
            data: agriculturalConditionsData.fertilizerUsage.data,
            smooth: true,
            lineStyle: {
              width: 3,
              color: '#f94144'
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#f94144'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(249, 65, 68, 0.8)' },
                { offset: 1, color: 'rgba(249, 65, 68, 0.1)' }
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
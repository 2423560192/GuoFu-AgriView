<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { grainProductionData } from '../../data/agricultural-data.js'

export default {
  name: 'GrainTrend',
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
          text: '2021-2024年粮食生产面积和产量趋势',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['面积', '产量'],
          textStyle: {
            color: '#fff'
          },
          bottom: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: grainProductionData.areaAndYield.years,
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '面积(亩)',
            min: 75000,
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
          {
            type: 'value',
            name: '产量(吨)',
            min: 34000,
            nameTextStyle: {
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '面积',
            type: 'bar',
            data: grainProductionData.areaAndYield.area,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#f9c74f' },
                { offset: 1, color: '#f8961e' }
              ])
            }
          },
          {
            name: '产量',
            type: 'line',
            yAxisIndex: 1,
            data: grainProductionData.areaAndYield.yield,
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              width: 3,
              color: '#f94144'
            },
            itemStyle: {
              color: '#f94144'
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
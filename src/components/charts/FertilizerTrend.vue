<template>
  <div class="chart-wrapper">
    <div class="chart-title">2021-2024年农用化肥施用量趋势</div>
    <div ref="chart" class="chart-container"></div>
  </div>
</template>

<script>
export default {
  name: 'FertilizerTrend',
  data() {
    return {
      chart: null,
      fertilizerData: [
        { year: '2021', value: 2377.81 },
        { year: '2022', value: 10174.62 },
        { year: '2023', value: 7960.42 },
        { year: '2024', value: 7976.01 }
      ]
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
      this.chart = null
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      
      const years = this.fertilizerData.map(item => item.year)
      const values = this.fertilizerData.map(item => item.value)
      
      const option = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}年<br/>农用化肥施用量: {c} 吨'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: years,
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: '#fff'
          }
        },
        yAxis: {
          type: 'value',
          name: '吨',
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        },
        series: [
          {
            name: '农用化肥施用量',
            type: 'line',
            data: values,
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#f9c74f'
            },
            lineStyle: {
              width: 4,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: '#f9c74f' },
                  { offset: 1, color: '#f8961e' }
                ]
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(249, 199, 79, 0.4)' },
                  { offset: 1, color: 'rgba(249, 199, 79, 0)' }
                ]
              }
            },
            emphasis: {
              itemStyle: {
                color: '#f8961e',
                borderWidth: 2,
                borderColor: '#fff'
              }
            },
            label: {
              show: true,
              position: 'top',
              formatter: '{c} 吨',
              color: '#fff',
              fontSize: 12
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

.chart-container {
  flex: 1;
  width: 100%;
}

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 12px;
  }
}
</style> 
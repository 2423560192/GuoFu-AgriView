<template>
  <div class="chart-wrapper">
    <div class="chart-loading" v-if="loading">
      <div class="loading-spinner"></div>
      <div>加载中...</div>
    </div>
    <div ref="chart" class="chart" :class="{ 'is-loading': loading }"></div>
  </div>
</template>

<script>
import { economicCropsData } from '../../data/agricultural-data.js'

export default {
  name: 'EconomicCropsTrend',
  data() {
    return {
      chart: null,
      loading: true
    }
  },
  mounted() {
    // 模拟加载延迟
    setTimeout(() => {
      this.loading = false
      this.$nextTick(() => {
        this.initChart()
      })
    }, 500)
    
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
          text: '2021-2024年经济作物总播种面积趋势',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'normal'
          },
          left: 'center',
          top: 10
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderColor: 'rgba(76, 213, 206, 0.3)',
          borderWidth: 1,
          textStyle: {
            color: '#fff'
          },
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgba(76, 213, 206, 0.5)',
              width: 1
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '10%',
          top: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: economicCropsData.totalArea.years,
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            margin: 10
          }
        },
        yAxis: {
          type: 'value',
          name: '面积(亩)',
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 12,
            padding: [0, 0, 0, 5]
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)',
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: '总播种面积',
            type: 'line',
            data: economicCropsData.totalArea.data,
            smooth: true,
            lineStyle: {
              width: 4,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#4cd5ce'
                }, {
                  offset: 1, color: '#43aa8b'
                }]
              },
              shadowColor: 'rgba(76, 213, 206, 0.3)',
              shadowBlur: 10
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              color: '#4cd5ce',
              borderColor: '#fff',
              borderWidth: 2,
              shadowColor: 'rgba(76, 213, 206, 0.5)',
              shadowBlur: 5
            },
            emphasis: {
              scale: true,
              itemStyle: {
                borderWidth: 3
              }
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(76, 213, 206, 0.8)' },
                { offset: 0.8, color: 'rgba(76, 213, 206, 0.1)' },
                { offset: 1, color: 'rgba(76, 213, 206, 0)' }
              ])
            }
          }
        ],
        animationDuration: 2000,
        animationEasing: 'cubicInOut'
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
  position: relative;
}

.chart {
  flex: 1;
  transition: opacity 0.3s ease;
}

.chart.is-loading {
  opacity: 0;
}

.chart-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  z-index: 10;
}

.loading-spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(76, 213, 206, 0.3);
  border-radius: 50%;
  border-top-color: #4cd5ce;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style> 
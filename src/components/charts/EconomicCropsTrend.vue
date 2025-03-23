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
export default {
  name: 'EconomicCropsTrend',
  data() {
    return {
      chart: null,
      loading: true,
      cropData: {
        years: ['2021', '2022', '2023', '2024'],
        totalArea: [47964, 16822, 51646, 51524.5]
      }
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
          text: '全镇2021-2024年经济作物总播种面积',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}年<br/>总播种面积: {c} 亩',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.cropData.years,
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        yAxis: {
          type: 'value',
          name: '亩',
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        series: [
          {
            name: '总播种面积',
            type: 'line',
            data: this.cropData.totalArea,
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              width: 3,
              color: '#4cd5ce'
            },
            itemStyle: {
              color: '#4cd5ce'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(76, 213, 206, 0.8)' },
                { offset: 1, color: 'rgba(76, 213, 206, 0.1)' }
              ])
            },
            emphasis: {
              itemStyle: {
                borderWidth: 3,
                borderColor: 'rgba(255, 255, 255, 0.8)',
                color: '#43aa8b'
              }
            }
          }
        ],
        animationDuration: 1500
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
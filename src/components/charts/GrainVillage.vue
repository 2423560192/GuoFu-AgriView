<template>
  <div class="chart-wrapper">
    <div class="chart-title">各村2024年粮食播种面积</div>
    <div class="fixed-height-container">
      <div ref="chart" class="chart"></div>
    </div>
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
    this.$nextTick(() => {
      this.initChart()
    })
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
      // 对数据进行排序（从大到小）
      const sortedData = [...grainProductionData.villageData2024].sort((a, b) => b.area - a.area)
      
      // 将数据转换为适合垂直条形图的格式
      const villages = sortedData.map(item => item.village)
      const areas = sortedData.map(item => item.area)
      
      // 设置固定高度为500px，确保可以容纳所有村庄数据
      this.$refs.chart.style.height = '500px';
      
      // 获取容器宽度决定是否显示完整村名
      const containerWidth = this.$el.clientWidth
      const showFullName = containerWidth > 350
      
      this.chart = this.$echarts.init(this.$refs.chart)
      const option = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}<br/>播种面积: {c} 亩',
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
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff',
            formatter: '{value} 亩'
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
            // 根据容器宽度决定是否显示完整村名
            formatter: function(value) {
              if (!showFullName && value.length > 3) {
                return value.substring(0, 3);
              }
              return value;
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
            name: '播种面积',
            type: 'bar',
            data: areas,
            barWidth: '60%',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#4cd5ce' },
                { offset: 1, color: '#43aa8b' }
              ])
            },
            label: {
              show: true,
              position: 'right',
              color: '#fff',
              formatter: '{c} 亩'
            }
          }
        ]
      }
      this.chart.setOption(option)
    },
    handleResize() {
      if (this.chart) {
        this.chart.resize()
        this.initChart()  // 重新初始化以适应容器大小变化
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

/* 固定高度的容器 */
.fixed-height-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-right: -4px; /* 补偿滚动条宽度 */
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

@media screen and (max-width: 768px) {
  .chart-title {
    font-size: 12px;
  }
}
</style> 
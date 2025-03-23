<template>
  <div class="chart-wrapper">
    <div class="chart-title">各村2024年经济作物播种面积</div>
    <!-- 固定高度容器 -->
    <div class="fixed-height-container">
      <div ref="chart" class="chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EconomicCropsVillage',
  data() {
    return {
      chart: null,
      villageData: [
        { village: '平等村', area: 4067.8 },
        { village: '龙台村', area: 3578.3 },
        { village: '龙泉村', area: 2892.54 },
        { village: '同心村', area: 2672.1 },
        { village: '梅子村', area: 2559.9 },
        { village: '骑龙村', area: 2559.4 },
        { village: '高庙村', area: 2535.73 },
        { village: '狮子村', area: 2478.4 },
        { village: '建新村', area: 2405 },
        { village: '翻身村', area: 2338 },
        { village: '人和村', area: 2276.26 },
        { village: '永胜村', area: 2196.74 },
        { village: '双山村', area: 2134.83 },
        { village: '团结村', area: 2059.14 },
        { village: '五星村', area: 2046.77 },
        { village: '三塘村', area: 1933.4 },
        { village: '古松村', area: 1919.6 },
        { village: '长岭村', area: 1862.1 },
        { village: '垮山村', area: 1409.7 },
        { village: '银盆村', area: 1373.27 },
        { village: '安平村', area: 1324.9 }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    window.addEventListener('resize', this.handleResize)
    
    // 添加ResizeObserver监听容器大小变化
    if (window.ResizeObserver) {
      this.observer = new ResizeObserver(() => {
        this.handleResize()
      })
      this.observer.observe(this.$el)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    if (this.observer) {
      this.observer.disconnect()
    }
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
  methods: {
    initChart() {
      // 对数据进行排序（从大到小）
      const sortedData = [...this.villageData].sort((a, b) => b.area - a.area)
      
      // 将数据转换为适合垂直条形图的格式
      const villages = sortedData.map(item => item.village)
      const areas = sortedData.map(item => item.area)
      
      // 设置固定高度为600px，确保可以容纳所有村庄数据
      this.$refs.chart.style.height = '600px';
      
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
          top: '3%',
          right: showFullName ? '8%' : '5%',
          bottom: '3%',
          left: showFullName ? '15%' : '20%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          name: '亩',
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: containerWidth < 400 ? 10 : 11
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
          inverse: true,
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            margin: 10,
            fontSize: containerWidth < 400 ? 10 : 11,
            formatter: function(value) {
              if (!showFullName && value.length > 3) {
                return value.substring(0, 2) + '..';
              }
              return value;
            }
          }
        },
        series: [
          {
            name: '播种面积',
            type: 'bar',
            data: areas,
            barWidth: '60%',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: 'rgba(76, 213, 206, 0.3)' },
                { offset: 1, color: 'rgba(76, 213, 206, 0.8)' }
              ])
            },
            label: {
              show: containerWidth > 300,
              position: 'right',
              color: '#fff',
              fontSize: containerWidth < 400 ? 9 : 10,
              formatter: '{c} 亩'
            }
          }
        ]
      }
      
      this.chart.setOption(option)
    },
    handleResize() {
      if (this.chart) {
        this.chart.dispose()
        this.initChart() // 重新初始化以应用响应式变化
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

/* 固定高度的容器 */
.fixed-height-container {
  height: 250px;
  overflow-y: auto;
  overflow-x: hidden;
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

@media screen and (max-width: 480px) {
  .chart-title {
    font-size: 12px;
  }
  
  .fixed-height-container {
    height: 200px;
  }
}
</style> 
<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
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
      // 对数据进行排序（已经预先排序了，但为了保险起见）
      const sortedData = [...this.villageData].sort((a, b) => b.area - a.area)
      
      this.chart = this.$echarts.init(this.$refs.chart)
      const option = {
        title: {
          text: '各村2024年经济作物播种面积',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
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
          bottom: '5%',
          top: '15%',
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
            color: 'rgba(255, 255, 255, 0.7)'
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
              color: 'rgba(255, 255, 255, 0.3)'
            }
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 10,
            interval: 0
          },
          axisTick: {
            alignWithLabel: true
          }
        },
        series: [
          {
            name: '播种面积',
            type: 'bar',
            data: sortedData.map(item => item.area),
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#43aa8b' },
                { offset: 1, color: '#90be6d' }
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
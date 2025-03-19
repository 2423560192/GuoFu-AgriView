<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { agriculturalConditionsData } from '../../data/agricultural-data.js'

export default {
  name: 'OtherConsumptionVillage',
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
      // 准备数据
      const villages = agriculturalConditionsData.villageOtherConsumption2024.map(item => item.village)
      const plasticData = agriculturalConditionsData.villageOtherConsumption2024.map(item => item.plastic)
      const dieselData = agriculturalConditionsData.villageOtherConsumption2024.map(item => item.diesel)
      const pesticideData = agriculturalConditionsData.villageOtherConsumption2024.map(item => item.pesticide)
      const filmData = agriculturalConditionsData.villageOtherConsumption2024.map(item => item.film)
      
      this.chart = this.$echarts.init(this.$refs.chart)
      const option = {
        title: {
          text: '2024年各村其他消耗情况',
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
        legend: {
          data: ['塑料薄膜', '柴油', '农药', '农膜'],
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
        xAxis: {
          type: 'category',
          data: villages,
          axisLabel: {
            interval: 0,
            rotate: 45,
            fontSize: 10
          },
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
            name: '塑料薄膜',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: plasticData,
            itemStyle: {
              color: '#f94144'
            }
          },
          {
            name: '柴油',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: dieselData,
            itemStyle: {
              color: '#f3722c'
            }
          },
          {
            name: '农药',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: pesticideData,
            itemStyle: {
              color: '#f8961e'
            }
          },
          {
            name: '农膜',
            type: 'bar',
            stack: 'total',
            emphasis: {
              focus: 'series'
            },
            data: filmData,
            itemStyle: {
              color: '#f9c74f'
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
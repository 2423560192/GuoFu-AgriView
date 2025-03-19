<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { agriculturalConditionsData } from '../../data/agricultural-data.js'

export default {
  name: 'FertilizerPie',
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
          text: '2024年化肥类型分布',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c}% ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '化肥类型',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#0f1c30',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold',
                color: '#fff'
              }
            },
            labelLine: {
              show: false
            },
            data: agriculturalConditionsData.fertilizerDistribution2024
          }
        ],
        color: ['#f94144', '#f3722c', '#f8961e', '#f9c74f']
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
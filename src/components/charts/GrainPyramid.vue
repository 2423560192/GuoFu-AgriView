<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { grainProductionData } from '../../data/agricultural-data.js'

export default {
  name: 'GrainPyramid',
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
          text: '2024年粮食作物占比',
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
          data: grainProductionData.distribution2024.map(item => item.name),
          textStyle: {
            color: '#fff'
          },
          bottom: 0
        },
        series: [
          {
            name: '粮食占比',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}: {c}%',
              color: '#fff'
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#0f1c30',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 16
              }
            },
            data: grainProductionData.distribution2024
          }
        ],
        color: ['#f9c74f', '#90be6d', '#43aa8b']
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
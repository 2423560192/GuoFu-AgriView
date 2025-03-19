<template>
  <div class="chart-wrapper">
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { agriculturalConditionsData } from '../../data/agricultural-data.js'

export default {
  name: 'FertilizerSankey',
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
          text: '2021-2024年化肥类型变化',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'sankey',
            data: [
              { name: '2021氮肥' },
              { name: '2021磷肥' },
              { name: '2021钾肥' },
              { name: '2021复合肥' },
              { name: '2022氮肥' },
              { name: '2022磷肥' },
              { name: '2022钾肥' },
              { name: '2022复合肥' },
              { name: '2023氮肥' },
              { name: '2023磷肥' },
              { name: '2023钾肥' },
              { name: '2023复合肥' },
              { name: '2024氮肥' },
              { name: '2024磷肥' },
              { name: '2024钾肥' },
              { name: '2024复合肥' },
              { name: '新增' },
              { name: '减少' },
              { name: '新增2' }
            ],
            links: agriculturalConditionsData.fertilizerTypeFlow,
            left: 50,
            right: 50,
            top: 50,
            bottom: 20,
            nodeWidth: 20,
            nodeGap: 8,
            orient: 'horizontal',
            label: {
              color: '#fff',
              position: 'right',
              fontSize: 10
            },
            lineStyle: {
              color: 'gradient',
              curveness: 0.5
            },
            itemStyle: {
              borderWidth: 1,
              borderColor: '#0f1c30'
            },
            emphasis: {
              focus: 'adjacency'
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
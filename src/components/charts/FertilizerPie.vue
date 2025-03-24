<template>
  <div class="chart-wrapper">
    <div class="chart-title">2024年各农业化肥使用量占比</div>
    <div ref="chart" class="chart-container"></div>
  </div>
</template>

<script>
export default {
  name: 'FertilizerPie',
  data() {
    return {
      chart: null,
      pieData: [
        { value: 2498.20, name: '氮肥', percentage: '31.32%' },
        { value: 3676.38, name: '磷肥', percentage: '46.10%' },
        { value: 285.80, name: '钾肥', percentage: '3.58%' },
        { value: 1515.63, name: '复合肥', percentage: '19.00%' }
      ],
      colors: ['#ff4d4f', '#ffd666', '#95de64', '#69c0ff']
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
      if (this.chart) {
        this.chart.dispose()
      }
      
      this.chart = this.$echarts.init(this.$refs.chart)
      
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} 吨 ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          top: 'center',
          textStyle: {
            color: '#fff'
          },
          formatter: name => {
            const item = this.pieData.find(item => item.name === name)
            return `${name}  ${item.percentage}`
          }
        },
        series: [
          {
            name: '化肥使用量',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['65%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: 'rgba(0, 0, 0, 0.2)',
              borderWidth: 1
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
            data: this.pieData
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
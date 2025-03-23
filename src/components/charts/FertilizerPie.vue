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
      fertilizerData: [
        { name: '氮肥', value: 31.32 },
        { name: '磷肥', value: 46.09 },
        { name: '钾肥', value: 3.58 },
        { name: '复合肥', value: 19.00 }
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
      this.chart = null
    }
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs.chart)
      
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}%'
        },
        legend: {
          orient: 'vertical',
          right: '5%',
          top: 'center',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 10
        },
        series: [
          {
            name: '化肥使用量',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['40%', '50%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 5,
              borderColor: 'rgba(0, 0, 0, 0.2)',
              borderWidth: 2
            },
            label: {
              show: true,
              position: 'inside',
              formatter: '{d}%',
              fontSize: 12,
              color: '#fff'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { 
                value: this.fertilizerData[0].value, 
                name: this.fertilizerData[0].name,
                itemStyle: { color: '#f94144' }
              },
              { 
                value: this.fertilizerData[1].value, 
                name: this.fertilizerData[1].name,
                itemStyle: { color: '#f9c74f' }
              },
              { 
                value: this.fertilizerData[2].value, 
                name: this.fertilizerData[2].name,
                itemStyle: { color: '#90be6d' }
              },
              { 
                value: this.fertilizerData[3].value, 
                name: this.fertilizerData[3].name,
                itemStyle: { color: '#43aa8b' }
              }
            ]
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